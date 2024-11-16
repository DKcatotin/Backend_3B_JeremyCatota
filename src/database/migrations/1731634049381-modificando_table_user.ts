import { MigrationInterface, QueryRunner } from "typeorm";

export class ModificandoTableUser1731634049381 implements MigrationInterface {
    name = 'ModificandoTableUser1731634049381'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD "phone" integer NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "phone"`);
    }

}
