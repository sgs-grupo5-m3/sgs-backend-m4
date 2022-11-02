export interface IPatientCreate {
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

export interface IExamsCreate {
  name: string;
  date: string;
  results_exams: string;
  userId: string;

}

