
import { NlpQueryDto } from "./nlp-query.dto";

// syncornize with client;
export interface NlpResponseData {
    text: string;
    sources?: string[];
    // ...
};

export interface NlpResponseDto {
    query: NlpQueryDto;
    response: NlpResponseData;
    // TODO: source;
    processingTime: number;
    
}