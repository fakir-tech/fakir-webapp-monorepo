import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { NlpService } from "./nlp.service";
import { NlpQuery, NlpQuerySchema } from "./schemas/nlpquery.schema";
import { NlpController } from "./nlp.controller";

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: NlpQuery.name, schema: NlpQuerySchema },
    ]),
  ],
  controllers: [NlpController],
  providers: [NlpService],
})
export class NlpModule {}
