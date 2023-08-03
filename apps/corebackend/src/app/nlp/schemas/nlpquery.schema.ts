import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type NlpQueryDocument = HydratedDocument<NlpQuery>;

@Schema()
export class QueryFeedback {
  @Prop()
  value: string;

  @Prop()
  comment?: string;
}
const queryFeedbackSchema = SchemaFactory.createForClass(QueryFeedback);
    

@Schema()
export class NlpQuery {
  
  @Prop()
  query: string;

  @Prop()
  querytime: Date;

  @Prop({ type: queryFeedbackSchema })
  feedback?: QueryFeedback;
}

export const NlpQuerySchema = SchemaFactory.createForClass(NlpQuery);
