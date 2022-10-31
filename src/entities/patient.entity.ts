import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Allergy } from "./allergy.entiry";
import { Disease } from "./disease.entity";
import { Exam } from "./exam.entity";
import { Medicines } from "./medicines.entity";

@Entity('patient')
export class Patient {
    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column({ length: 120 })
    name: string

    @Column({ type: "date" })
    birth_date: string

    @Column({ length: 120 })
    email: string

    @Column({ length: 120 })
    password: string

    @Column({ unique: true })
    cpf: string

    @Column({ default: false })
    isDoctor: boolean

    @OneToMany((type) => Disease,(disease) => disease.patient)
    disease: Disease[]

    @OneToMany((type) => Exam,(exam) => exam.patient)
    exam: Exam[]

    @OneToMany((type) => Allergy,(allergy) => allergy.patient)
    allergy: Allergy[]

    @OneToMany((type) => Medicines,(medicines) => medicines.patient)
    medicines: Medicines[]

}