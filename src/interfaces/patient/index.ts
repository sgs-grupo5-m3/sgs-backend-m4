export interface IPatientRequest {
  name: string;
  birth_date: string;
  email: string;
  password: string;
  cpf: string;
}

export interface IAllergyRequest {
  name: string;
  description?: string;
  userId: string;
}

export interface IAllergySerializer {
  name: string;
  description?: string;
}

export interface IDiseaseRequest {
  name: string;
  symptoms?: string;
  userId: string;
}

export interface IDiseaseSerializer {
  name: string;
  symptoms?: string;
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
