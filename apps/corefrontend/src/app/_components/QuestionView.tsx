// component which visually shows a chatmessage

import { ChatMessage, NlpRequest } from "../types";
import { ChatBubble } from "./ChatBubble";

// this component is used in the chatbox component
interface QuestionViewProps {
  request: NlpRequest;
}
export function QuestionView(props: QuestionViewProps) {
  const { request } = props;
  return <ChatBubble transmission="sender">{request.query}</ChatBubble>;
}
