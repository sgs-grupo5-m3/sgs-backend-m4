import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { Patient } from "./patient.entity";

@Entity("allergy")
export class Allergy {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ length: 120 })
  name: string;

  @Column({ type: "text", nullable: true })
  description: string;

  @ManyToOne((type) => Patient, {
    eager: true,
  })
  patient: Patient;
}
