import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

import { Exclude } from "class-transformer";

@Entity("doctor")
export class Doctor {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ length: 120 })
  name: string;

  @Column({ type: "date" })
  birth_date: string;

  @Column({ length: 120 })
  email: string;

  @Column({ length: 120 })
  @Exclude()
  password: string;

  @Column({ unique: true })
  cpf: string;

  @Column({ default: true })
  isDoctor: boolean;

  @Column({ unique: true })
  crm: string;
}
