import { ChatMessage } from "./types";

export const sampleChatHistory: ChatMessage[] = [
    {
      id: 1,
      message: "What is the answer to life, the universe and everything?",
      timestamp: new Date(),
      sender: "user",
      meta: {},
    },
    {
      id: 2,
      message: "The answer is 42",
      timestamp: new Date(),
      sender: "server",
      meta: {},
    },
  ];