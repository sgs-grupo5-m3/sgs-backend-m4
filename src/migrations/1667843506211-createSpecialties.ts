import { MigrationInterface, QueryRunner } from "typeorm";

export class createSpecialties1667843506211 implements MigrationInterface {
    name = 'createSpecialties1667843506211'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "specialties" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(120) NOT NULL, CONSTRAINT "PK_ba01cec5aa8ac48778a1d097e98" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "doctor" ADD "specialtiesId" uuid`);
        await queryRunner.query(`ALTER TABLE "patient" DROP CONSTRAINT "UQ_d1206b00842f789e35c7c5baf61"`);
        await queryRunner.query(`ALTER TABLE "patient" DROP COLUMN "cpf"`);
        await queryRunner.query(`ALTER TABLE "patient" ADD "cpf" character varying(20) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "patient" ADD CONSTRAINT "UQ_d1206b00842f789e35c7c5baf61" UNIQUE ("cpf")`);
        await queryRunner.query(`ALTER TABLE "doctor" DROP CONSTRAINT "UQ_e7ae9d234374b5e70c1d9180bd9"`);
        await queryRunner.query(`ALTER TABLE "doctor" DROP COLUMN "cpf"`);
        await queryRunner.query(`ALTER TABLE "doctor" ADD "cpf" character varying(20) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "doctor" ADD CONSTRAINT "UQ_e7ae9d234374b5e70c1d9180bd9" UNIQUE ("cpf")`);
        await queryRunner.query(`ALTER TABLE "doctor" DROP CONSTRAINT "UQ_aab8f24bc311f018cf511577ac6"`);
        await queryRunner.query(`ALTER TABLE "doctor" DROP COLUMN "crm"`);
        await queryRunner.query(`ALTER TABLE "doctor" ADD "crm" character varying(20) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "doctor" ADD CONSTRAINT "UQ_aab8f24bc311f018cf511577ac6" UNIQUE ("crm")`);
        await queryRunner.query(`ALTER TABLE "doctor" ADD CONSTRAINT "FK_c5620a2c171a77fa77af1601b36" FOREIGN KEY ("specialtiesId") REFERENCES "specialties"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "doctor" DROP CONSTRAINT "FK_c5620a2c171a77fa77af1601b36"`);
        await queryRunner.query(`ALTER TABLE "doctor" DROP CONSTRAINT "UQ_aab8f24bc311f018cf511577ac6"`);
        await queryRunner.query(`ALTER TABLE "doctor" DROP COLUMN "crm"`);
        await queryRunner.query(`ALTER TABLE "doctor" ADD "crm" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "doctor" ADD CONSTRAINT "UQ_aab8f24bc311f018cf511577ac6" UNIQUE ("crm")`);
        await queryRunner.query(`ALTER TABLE "doctor" DROP CONSTRAINT "UQ_e7ae9d234374b5e70c1d9180bd9"`);
        await queryRunner.query(`ALTER TABLE "doctor" DROP COLUMN "cpf"`);
        await queryRunner.query(`ALTER TABLE "doctor" ADD "cpf" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "doctor" ADD CONSTRAINT "UQ_e7ae9d234374b5e70c1d9180bd9" UNIQUE ("cpf")`);
        await queryRunner.query(`ALTER TABLE "patient" DROP CONSTRAINT "UQ_d1206b00842f789e35c7c5baf61"`);
        await queryRunner.query(`ALTER TABLE "patient" DROP COLUMN "cpf"`);
        await queryRunner.query(`ALTER TABLE "patient" ADD "cpf" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "patient" ADD CONSTRAINT "UQ_d1206b00842f789e35c7c5baf61" UNIQUE ("cpf")`);
        await queryRunner.query(`ALTER TABLE "doctor" DROP COLUMN "specialtiesId"`);
        await queryRunner.query(`DROP TABLE "specialties"`);
    }

}
