import { MigrationInterface, QueryRunner } from "typeorm";

export class Create1667914351215 implements MigrationInterface {
    name = 'Create1667914351215'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "doctor" DROP CONSTRAINT "FK_c5620a2c171a77fa77af1601b36"`);
        await queryRunner.query(`ALTER TABLE "doctor" DROP CONSTRAINT "UQ_c5620a2c171a77fa77af1601b36"`);
        await queryRunner.query(`ALTER TABLE "doctor" DROP COLUMN "specialtiesId"`);
        await queryRunner.query(`ALTER TABLE "specialties" ADD "doctorId" uuid`);
        await queryRunner.query(`ALTER TABLE "specialties" ADD CONSTRAINT "FK_5d6165179668aa1c74d3d9d3119" FOREIGN KEY ("doctorId") REFERENCES "doctor"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "specialties" DROP CONSTRAINT "FK_5d6165179668aa1c74d3d9d3119"`);
        await queryRunner.query(`ALTER TABLE "specialties" DROP COLUMN "doctorId"`);
        await queryRunner.query(`ALTER TABLE "doctor" ADD "specialtiesId" uuid`);
        await queryRunner.query(`ALTER TABLE "doctor" ADD CONSTRAINT "UQ_c5620a2c171a77fa77af1601b36" UNIQUE ("specialtiesId")`);
        await queryRunner.query(`ALTER TABLE "doctor" ADD CONSTRAINT "FK_c5620a2c171a77fa77af1601b36" FOREIGN KEY ("specialtiesId") REFERENCES "specialties"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
