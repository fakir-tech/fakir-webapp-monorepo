import { Module } from "@nestjs/common";

import { AppController } from "./app.controller";
import { AppService } from "./app.service";

import { ConfigModule, ConfigService } from "@nestjs/config";

import { MongooseModule } from "@nestjs/mongoose";

import { NlpModule } from "./nlp/nlp.module";

@Module({
  imports: [
    MongooseModule.forRootAsync({
      imports: [ConfigModule, NlpModule],
      inject: [ConfigService],
      useFactory: async (config: ConfigService) => ({
        uri: config.get<string>("MONGODB_URI"), // Loaded from .ENV
      }),
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
