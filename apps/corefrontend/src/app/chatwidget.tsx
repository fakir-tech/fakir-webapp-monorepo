import { useState } from "react";
import { Message } from "./_components/message";
import Questioninput from "./_components/questioninput";
import { ChatMessage, NlpRequest, NlpResponse, NlpResponseData } from "./types";
import { sampleChatHistory } from "./mockdata";
import { ResponseWidget } from "./_components/Responsewidget";
import { fetchQuery } from "./api/fetchQuery";
import { ChatBox } from "./_components/Chatbox";
import styled from "@emotion/styled";
import { Paper } from "@mui/material";
import { Color, Palette, PaletteOptions } from "@mui/material";
let id = 3;
import { spacing } from "@mui/system";
import { QuestionView } from "./_components/QuestionView";
export const WidgetWrapper = styled(Paper)<{}>(({ theme }) => ({
  //   padding: spacing(1),
  //   marginTop: spacing(m"),
  //   backgroundColor: theme =>theme.palette.primary.main,
  //   color: theme.palette.text.secondary,
  backgroundColor: "#3388ee",
  width: "300px",
}));

export default function ChatWidget() {
  // State
  const [request, setRequest] = useState<NlpRequest | null>(null);
  const [response, setResponse] = useState<NlpResponse | null>(null);

  const [isLoading, setIsLoading] = useState<boolean>(false);

  // handlers
  const handleSubmit = async (query: string) => {
    setIsLoading(true);
    setResponse(null);
    const request: NlpRequest = {
      query,
    };
    setRequest(request);

    const result = await fetchQuery(query);
    console.log("result", result);
    setResponse(result);
    setIsLoading(false);
  };

  return (
    <WidgetWrapper>
      <h1>Chat Widget</h1>
      <ChatBox>
        {request ? <QuestionView request={request}></QuestionView> : ""}

        {response ? <ResponseWidget response={response}></ResponseWidget> : ""}
      </ChatBox>
      {isLoading && <p>Loading...</p>}
      <Questioninput onSubmit={(query) => handleSubmit(query)}></Questioninput>
    </WidgetWrapper>
  );
}
