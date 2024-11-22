import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateRoleUserTable1732283878218 implements MigrationInterface {
    name = 'CreateRoleUserTable1732283878218'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "roles" ("id" SERIAL NOT NULL, "nombre" character varying NOT NULL, "detalle" character varying NOT NULL, CONSTRAINT "PK_c1433d71a4838793a49dcad46ab" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "roles_user" ("rolesId" integer NOT NULL, "userId" integer NOT NULL, CONSTRAINT "PK_f33588d591c00737d7fa6653f6f" PRIMARY KEY ("rolesId", "userId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_cb0a3e0d85b734d56a4a2205bc" ON "roles_user" ("rolesId") `);
        await queryRunner.query(`CREATE INDEX "IDX_f624613332eb30523fd92a1afd" ON "roles_user" ("userId") `);
        await queryRunner.query(`ALTER TABLE "roles_user" ADD CONSTRAINT "FK_cb0a3e0d85b734d56a4a2205bc6" FOREIGN KEY ("rolesId") REFERENCES "roles"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "roles_user" ADD CONSTRAINT "FK_f624613332eb30523fd92a1afd0" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "roles_user" DROP CONSTRAINT "FK_f624613332eb30523fd92a1afd0"`);
        await queryRunner.query(`ALTER TABLE "roles_user" DROP CONSTRAINT "FK_cb0a3e0d85b734d56a4a2205bc6"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_f624613332eb30523fd92a1afd"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_cb0a3e0d85b734d56a4a2205bc"`);
        await queryRunner.query(`DROP TABLE "roles_user"`);
        await queryRunner.query(`DROP TABLE "roles"`);
    }

}
