export interface IPatientCreate {
  name: string;
  birth_date: string;
  email: string;
  password: string;
  cpf: string;
}

export interface IMedicinesRequest {
  name: string;
  description?: string;
  patient: string;
}
