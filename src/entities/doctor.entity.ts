import { Exclude } from "class-transformer";
import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

<<<<<<< HEAD
=======
import { Exclude } from "class-transformer";
>>>>>>> 936c83c3c02329e7a38b98d1c384dbcbb7be6dac

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
  password: string

  @Column({ unique: true, length: 20 })
  cpf: string

  @Column({ default: true })
  isDoctor: boolean;

  @Column({ unique: true, length: 20 })
  crm: string;

}
