// component which visually shows a chatmessage

import { ChatMessage } from "../types";
import { ChatBubble } from "./ChatBubble";

// this component is used in the chatbox component
interface MessageProps {
  message: ChatMessage;
}
export function Message(props: MessageProps) {
  const { message } = props;
  return (
    <ChatBubble transmission={message.transmission}>
      <div className="message">
        <div className="message__sender">{message.sender}:</div>
        <div className="message__message">{message.message}</div>
      </div>
    </ChatBubble>
  );
}
