import { Grid, Paper, styled } from "@mui/material";
import React from "react";
import { Transmission } from "../types";

export const ChatText = styled(Paper)<{ transmission: Transmission }>(
    
    ({ theme, transmission }) => ({
      ...theme.typography.body2,
      padding: theme.spacing(1),
      marginTop: theme.spacing(1),
      color: theme.palette.text.secondary,
      borderRadius: "15px",
      borderTopLeftRadius: transmission === "receiver" ? "2px" : undefined,
      borderTopRightRadius: transmission === "sender" ? "2px" : undefined,
    })
  );
  
interface ChatBubbleProps {
    transmission: Transmission;
    children: React.ReactNode;
}
export function ChatBubble({
    transmission,
    children,
  }: ChatBubbleProps) {
    return (
      <Grid xs={8} item>
        <ChatText transmission={transmission}>{children}</ChatText>
      </Grid>
    );
  }