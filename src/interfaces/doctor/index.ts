export interface IDoctorRequest {
  name: string;
  birth_date: string;
  email: string;
  password?: string;
  cpf: string;
  crm: string;
  specialtie: string;
}

export interface ISpecialtyRequest {
  name: string;
}
