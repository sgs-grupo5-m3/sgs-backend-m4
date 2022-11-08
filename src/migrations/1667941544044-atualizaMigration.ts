import { MigrationInterface, QueryRunner } from "typeorm";

export class atualizaMigration1667941544044 implements MigrationInterface {
    name = 'atualizaMigration1667941544044'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "specialties" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(120) NOT NULL, "doctorId" uuid, CONSTRAINT "PK_ba01cec5aa8ac48778a1d097e98" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "specialties" ADD CONSTRAINT "FK_5d6165179668aa1c74d3d9d3119" FOREIGN KEY ("doctorId") REFERENCES "doctor"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "specialties" DROP CONSTRAINT "FK_5d6165179668aa1c74d3d9d3119"`);
        await queryRunner.query(`DROP TABLE "specialties"`);
    }

}
