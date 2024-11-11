import { Module } from '@nestjs/common';
import { databaseProvieder } from './database.providers';
import { ConfigService } from 'src/config/config.service';

@Module({
    providers:[...databaseProvieder,ConfigService],
    exports:[...databaseProvieder]
})
export class DatabaseModule {}
