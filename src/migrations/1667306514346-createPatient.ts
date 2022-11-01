import { MigrationInterface, QueryRunner } from "typeorm";

export class createPatient1667306514346 implements MigrationInterface {
    name = 'createPatient1667306514346'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "disease" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(120) NOT NULL, "symptoms" text, "patientId" uuid, CONSTRAINT "PK_f7a8573a47cdc044735eda4644b" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "exam" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(120) NOT NULL, "date" date NOT NULL, "results_exams" character varying(120) NOT NULL, "patientId" uuid, CONSTRAINT "PK_56071ab3a94aeac01f1b5ab74aa" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "medicines" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(120) NOT NULL, "description" text, "patientId" uuid, CONSTRAINT "PK_77b93851766f7ab93f71f44b18b" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "patient" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(120) NOT NULL, "birth_date" date NOT NULL, "email" character varying(120) NOT NULL, "password" character varying(120) NOT NULL, "cpf" character varying NOT NULL, "isDoctor" boolean NOT NULL DEFAULT false, CONSTRAINT "UQ_d1206b00842f789e35c7c5baf61" UNIQUE ("cpf"), CONSTRAINT "PK_8dfa510bb29ad31ab2139fbfb99" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "allergy" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(120) NOT NULL, "description" text, "patientId" uuid, CONSTRAINT "PK_c9cb3ece73ddfde61d2ada768e1" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "doctor" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(120) NOT NULL, "birth_date" date NOT NULL, "email" character varying(120) NOT NULL, "password" character varying(120) NOT NULL, "cpf" character varying NOT NULL, "isDoctor" boolean NOT NULL DEFAULT true, "crm" character varying NOT NULL, CONSTRAINT "UQ_e7ae9d234374b5e70c1d9180bd9" UNIQUE ("cpf"), CONSTRAINT "UQ_aab8f24bc311f018cf511577ac6" UNIQUE ("crm"), CONSTRAINT "PK_ee6bf6c8de78803212c548fcb94" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "disease" ADD CONSTRAINT "FK_50a94cb2fd720726a0402ebccc4" FOREIGN KEY ("patientId") REFERENCES "patient"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "exam" ADD CONSTRAINT "FK_9dc2c675b41d305bf5267da9b41" FOREIGN KEY ("patientId") REFERENCES "patient"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "medicines" ADD CONSTRAINT "FK_a66b677a9966af33fda5d416ad3" FOREIGN KEY ("patientId") REFERENCES "patient"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "allergy" ADD CONSTRAINT "FK_bc3502f7acc8a5575b7185429fa" FOREIGN KEY ("patientId") REFERENCES "patient"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "allergy" DROP CONSTRAINT "FK_bc3502f7acc8a5575b7185429fa"`);
        await queryRunner.query(`ALTER TABLE "medicines" DROP CONSTRAINT "FK_a66b677a9966af33fda5d416ad3"`);
        await queryRunner.query(`ALTER TABLE "exam" DROP CONSTRAINT "FK_9dc2c675b41d305bf5267da9b41"`);
        await queryRunner.query(`ALTER TABLE "disease" DROP CONSTRAINT "FK_50a94cb2fd720726a0402ebccc4"`);
        await queryRunner.query(`DROP TABLE "doctor"`);
        await queryRunner.query(`DROP TABLE "allergy"`);
        await queryRunner.query(`DROP TABLE "patient"`);
        await queryRunner.query(`DROP TABLE "medicines"`);
        await queryRunner.query(`DROP TABLE "exam"`);
        await queryRunner.query(`DROP TABLE "disease"`);
    }

}
