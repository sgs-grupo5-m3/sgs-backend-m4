import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { Patient } from "./patient.entity";

@Entity('disease')
export class Disease {
    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column({ length: 120 })
    name: string

    @Column({ type: "text", nullable: true })
    symptoms: string

    @ManyToOne((type) => Patient,{
        eager: true
    }) 
    patient: Patient

}