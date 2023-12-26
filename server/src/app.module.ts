import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { PapersModule } from './papers/papers.module';
import { Paper } from './papers/entities/paper.entity';
import { ConfigModule } from '@nestjs/config';
import { ConverterModule } from './converter/converter.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { ATGuard } from './auth/guards';
import { APP_GUARD } from '@nestjs/core';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `.${process.env.NODE_ENV}.env`,
    }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.HOST,
      port: Number(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: String(process.env.POSTGRES_PASSWORD),
      database: process.env.POSTGRES_DB,
      models: [Paper],
      autoLoadModels: true,
      synchronize: true,
    }),
    PapersModule,
    ConverterModule,
    AuthModule,
    UsersModule,
  ],
  controllers: [],
  providers: [
    {
      provide: APP_GUARD,
      useClass: ATGuard,
    },
  ],
})
export class AppModule {}
