import { Button } from "@mui/material";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";

import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";
interface MessageProps {
  onSubmit: (value: string) => void;
}
export function FeedbackPanel(props: MessageProps) {
  return (
    <>
      <Button variant="text" onClick={() => props.onSubmit("1")}>
        <ThumbUpOffAltIcon></ThumbUpOffAltIcon>
      </Button>
      <Button variant="text" onClick={() => props.onSubmit("0")}>
        <ThumbDownOffAltIcon></ThumbDownOffAltIcon>
      </Button>
    </>
  );
}
