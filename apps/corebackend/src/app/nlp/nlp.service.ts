import { Model } from "mongoose";
import { Injectable, Logger } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";

import { NlpQuery, NlpQueryDocument } from "./schemas/nlpquery.schema";
import { NlpRequestDto } from "./dto/nlp-request.dto";
import { NlpResponseDto } from "./dto/nlp-response.dto";
import { NlpQueryConvertor } from "./dto/nlp-query.dto";
import { NlpFeedbackDto } from "./dto/nlp-feedback.dto";

@Injectable()
export class NlpService {
  private readonly logger = new Logger(NlpService.name);

  constructor(@InjectModel(NlpQuery.name) private NlpQuery: Model<NlpQuery>) {}

  async findById(id: string): Promise<NlpQueryDocument> {
    return this.NlpQuery.findById(id);
  }

  async query(request: NlpRequestDto): Promise<NlpResponseDto> {
    this.logger.log("Query: " + request.query);

    const query = await this.logQuery(request);

    return {
      query: NlpQueryConvertor.toDto(query), // TODO convert to DTO?
      response: {
        text: "Hello World!",
      },
      processingTime: 0,
    };
  }

  async addFeedbackToQuery(queryId: string, feedback: NlpFeedbackDto) {
    const queryEntity = await this.NlpQuery.findById(queryId);
    // vlaidate request by IP etc.

    queryEntity.feedback = {
      value: feedback.value,
      comment: feedback.comment,
    };
    await queryEntity.save();
  }
  async logQuery(request: NlpRequestDto): Promise<NlpQueryDocument> {
    const querylog = new this.NlpQuery({
      query: request.query,
      time: new Date(),
    });
    await querylog.save();

    return querylog;
  }
}
