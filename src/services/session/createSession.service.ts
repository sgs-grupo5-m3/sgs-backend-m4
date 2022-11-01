import { Doctor } from './../../entities/doctor.entity';
import { Patient } from './../../entities/patient.entity';
import { AppDataSource } from './../../data-source';
import { ISession } from './../../interfaces/session/session';
import { AppError } from './../../errors/appError';
import { compare } from 'bcrypt';
import jwt from 'jsonwebtoken';
import 'dotenv/config';

const createSessionService = async ({email, password}: ISession): Promise<string> => {
  const doctorRepository = AppDataSource.getRepository(Doctor);
  const patientRepository = AppDataSource.getRepository(Patient);

  const doctor = await doctorRepository.findOneBy({
    email: email
  });

  if (!doctor) {
    throw new AppError(403, 'Invalid email or password');
  }

  const passwordMatch = await compare(password, doctor.password);

  if (!passwordMatch) {
    throw new AppError(403, 'Invalid email or password');
  }

  if(doctor == undefined){
    const patient = await patientRepository.findOneBy({
        email: email
    })

    if(!patient){
        throw new AppError(403, 'Invalid email or password');
    }

    const passwordMatch = await compare(password, patient.password);

    if (!passwordMatch) {
        throw new AppError(403, 'Invalid email or password');
      }
  }

  const token = jwt.sign(
    {
      isDoctor: doctor.isDoctor,
    },
    process.env.SECRET_KEY as string,
    {
      expiresIn: '24h',
      subject: doctor.id,
    }
  );
  return token;
};

export default createSessionService;