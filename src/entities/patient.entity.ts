import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";

import { Allergy } from "./allergy.entiry";
import { Disease } from "./disease.entity";
import { Exam } from "./exam.entity";
import { Medicines } from "./medicines.entity";

import { Exclude } from "class-transformer";

@Entity("patient")
export class Patient {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ length: 120 })
  name: string;

  @Column({ type: "date" })
  birth_date: string;

  @Column({ length: 120 })
  email: string;

  @Column({ length: 120 })
  @Exclude({ toPlainOnly: true })
  password?: string;

  @Column({ unique: true, length: 20 })
  cpf: string;

  @Column({ default: false })
  isDoctor: boolean;

  @OneToMany((type) => Disease, (disease) => disease.patient, {
    eager: true
  })
  disease: Disease[];

  @OneToMany((type) => Exam, (exam) => exam.patient, {
    eager: true
  })
  exam: Exam[];

  @OneToMany((type) => Allergy, (allergy) => allergy.patient, {
    eager: true
  })
  allergy: Allergy[];

  @OneToMany((type) => Medicines, (medicines) => medicines.patient, {
    eager: true 
  })
  medicines: Medicines[];
}
