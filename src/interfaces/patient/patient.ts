export interface IPatientCreate {
  name: string;
  birth_date: string;
  email: string;
  password: string;
  cpf: string;
}

export interface IUserAllergy {
  name: string
  description: string
}