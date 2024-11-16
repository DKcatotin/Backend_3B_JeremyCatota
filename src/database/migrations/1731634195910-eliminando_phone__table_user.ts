import { MigrationInterface, QueryRunner } from "typeorm";

export class EliminandoPhone_tableUser1731634195910 implements MigrationInterface {
    name = 'EliminandoPhone_tableUser1731634195910'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" RENAME COLUMN "phone" TO "mail"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "mail"`);
        await queryRunner.query(`ALTER TABLE "user" ADD "mail" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "mail"`);
        await queryRunner.query(`ALTER TABLE "user" ADD "mail" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user" RENAME COLUMN "mail" TO "phone"`);
    }

}
