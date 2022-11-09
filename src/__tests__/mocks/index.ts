import { IDoctorRequest } from "../../interfaces/doctor";

import {
  IAllergySerializer,
  IDiseaseSerializer,
  IExamsSerilizer,
  IMedicinesSerializer,
  IPatientRequest,
} from "../../interfaces/patient";
import { ISession } from "../../interfaces/session";

export const mockedPatient: IPatientRequest = {
  name: "Daniel",
  email: "daniel@gmail.com",
  password: "12345",
  birth_date: "2005/08/20",
  cpf: "42353456438",
};

export const mockedDoctor: IDoctorRequest = {
  name: "Felipe",
  email: "felipe@gmail.com",
  password: "12345",
  birth_date: "2005/08/20",
  cpf: "42353456436",
  crm: "23423534666",
  specialtie: "Cardiologista",
};

export const mockedPatientLogin: ISession = {
  email: "daniel@gmail.com",
  password: "12345",
};

export const mockedDoctorLogin: ISession = {
  email: "felipe@gmail.com",
  password: "12345",
};

export const mockedAllergy: IAllergySerializer = {
  name: "Camarão",
  description: "Comer camarão",
};

export const mockedAllergyName: IAllergySerializer = {
  name: "Abelha",
};

export const mockedDisease: IDiseaseSerializer = {
  name: "Câncer",
  symptoms: "Cansaço, falta de ar",
};

export const mockedDiseaseName: IDiseaseSerializer = {
  name: "Epatite",
};

export const mockedMedicine: IMedicinesSerializer = {
  name: "Dipirona",
  description: "Para dor de cabeça",
};

export const mockedMedicineName: IMedicinesSerializer = {
  name: "Paracetamol",
};

export const mockedExam: IExamsSerilizer = {
  name: "Exame de sangue",
  date: "2021/04/20",
  results_exams: "https://examedesangue",
};
