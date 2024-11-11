import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './modules/auth/auth.module';
import { UsersModule } from './modules/users/users.module';
import { AuthController } from './modules/auth/auth.controller';
import { AuthService } from './modules/auth/auth.service';
import { DatabaseModule } from './database/database.module';
import { ConfigService } from './config/config.service';
import { ConfigModule } from './config/config.module';

@Module({
  imports: [AuthModule, UsersModule, DatabaseModule, ConfigModule],
  controllers: [AppController, AuthController],
  providers: [AppService, AuthService, ConfigService],
})
export class AppModule {}
