import { Body, Controller, Post } from "@nestjs/common";
import { NlpService } from "./nlp.service";
import { NlpResponseDto } from "./dto/nlp-response.dto";
import { NlpRequestDto } from "./dto/nlp-request.dto";
import { NlpFeedbackDto } from "./dto/nlp-feedback.dto";

@Controller()
export class NlpController {
  constructor(private readonly nlpService: NlpService) {}

  @Post("query")
  getQuery(@Body() body: NlpRequestDto): Promise<NlpResponseDto> {
    return this.nlpService.query(body);
  }

  @Post("feedback")
  async saveFeedbckDto(
    @Body() body: NlpFeedbackDto
  ): Promise<{ message: string }> {
    await this.nlpService.addFeedbackToQuery(body.queryId, body);
    return { message: "ok" };
  }
}
