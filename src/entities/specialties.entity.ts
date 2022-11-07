import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity('specialties')
export class Specialties {
    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column({ length: 120 })
    name: string
}