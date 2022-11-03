import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { Patient } from "./patient.entity";

@Entity('exam')
export class Exam {
    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column({ length: 120 })
    name: string

    @Column({ type: "date" })
    date: string

    @Column({ length: 120 })
    results_exams: string

    @ManyToOne((type) => Patient) 
    patient: Patient

}