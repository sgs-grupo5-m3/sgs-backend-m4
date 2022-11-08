import { Doctor } from "./../../entities/doctor.entity";
import { Patient } from "./../../entities/patient.entity";
import { AppDataSource } from "./../../data-source";
import { ISession } from "../../interfaces/session";
import { AppError } from "./../../errors/appError";
import { compare } from "bcrypt";
import jwt from "jsonwebtoken";
import "dotenv/config";

const createSessionService = async ({
  email,
  password,
}: ISession): Promise<object | undefined> => {
  const doctorRepository = AppDataSource.getRepository(Doctor);
  const patientRepository = AppDataSource.getRepository(Patient);

  const doctor = await doctorRepository.findOneBy({
    email: email,
  });

  const patient = await patientRepository.findOneBy({
    email: email,
  });

  if (!doctor && !patient) {
    throw new AppError(403, "Invalid email or password");
  }

  if (doctor) {
    const passwordMatch = await compare(password, doctor.password!);

    if (!passwordMatch) {
      throw new AppError(403, "Invalid email or password");
    }

    const token = jwt.sign(
      {
        isDoctor: doctor.isDoctor,
      },
      process.env.SECRET_KEY as string,
      {
        expiresIn: "24h",
        subject: doctor.id,
      }
    );
      
    return {
        token,
        isDoctor: doctor.isDoctor
    };
  }

  if (patient) {
    const passwordMatch = await compare(password, patient.password!);

    if (!passwordMatch) {
      throw new AppError(403, "Invalid email or password");
    }

    const token = jwt.sign(
      {
        isDoctor: patient.isDoctor,
      },
      process.env.SECRET_KEY as string,
      {
        expiresIn: "24h",
        subject: patient.id,
      }
    );

    return {
      token,
      isDoctor: patient.isDoctor
  };
  }
};

export default createSessionService;
