export interface IPatientRequest {
  name: string;
  birth_date: string;
  email: string;
  password: string;
  cpf: string;
}

export interface IAllergyCreate {
  name: string;
  description: string;
  patient: string;
}

export interface IDiseaseCreate {
  name: string;
  symptoms: string;
  patient: string;
}

export interface IMedicinesRequest {
  name: string;
  description?: string;
  patient: string;
}

export interface IMedicinesSerilizer {
  name: string;
  description?: string;
}

export interface IExamsRequest {
  name: string;
  date: string;
  results_exams: string;
  userId: string;
}

export interface IExamsSerilizer {
  name: string;
  date: string;
  results_exams: string;
}

