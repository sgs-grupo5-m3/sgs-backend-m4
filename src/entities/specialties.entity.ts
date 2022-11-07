import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { Doctor } from "./doctor.entity";

@Entity('specialties')
export class Specialties {
    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column({ length: 120 })
    name: string

    @ManyToOne((type) => Doctor)
    doctor: Doctor[]
}