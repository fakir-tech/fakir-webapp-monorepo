// component which visually shows a chatmessage

import { Button } from "@mui/material";
import { NlpResponse } from "../types";
import { FeedbackPanel } from "./feedbackPanel";
import { __values } from "tslib";
import { saveFeedback } from "../api/saveFeedback";
import { useState } from "react";



// import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
// this component is used in the chatbox component
interface MessageProps {
  response: NlpResponse;
}
export function ResponseWidget(props: MessageProps) {
  
  const { response } = props;

  const [feedbackSend, setFeedbackSend] = useState<boolean>(false);

  const handleFeedback = (value: string) => {
    setFeedbackSend(true);
    saveFeedback(response.query._id, value);
  };


  return (
    <div className="message">
      <div className="message__message">{response.response.text}</div>
      <div className="message__timestamp">
        {feedbackSend ? "Thank you for your feedback!" : ""}
        {!feedbackSend ? <FeedbackPanel onSubmit={(value) => handleFeedback(value)}/> : ""}        
      </div> 
    </div>
  );
}
