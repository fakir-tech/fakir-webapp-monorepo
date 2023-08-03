export type Transmission = "sender" | "receiver";

export interface ChatMessage {
  id: number;
  message: string;
  timestamp: Date;
  sender: string;
  transmission: Transmission;
  meta: any;
}

export interface NlpRequest {
  query: string;
}
export interface NlpResponse {
  query: {
    _id: string
  }
  response: {
    text: string;
    sources?: string[];
  }
  // ...
}
