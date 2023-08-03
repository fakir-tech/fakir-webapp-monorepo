import Button from "@mui/material/Button";

import TextField from "@mui/material/TextField";
import { useState } from "react";

interface QuestioninputProps {
  onSubmit: (query: string) => void;
}

export default function Questioninput(props: QuestioninputProps) {
  const [query, setQuery] = useState("");

  const submit = () => {
    //TODO Vlaidation
    props.onSubmit(query);
  };
  const handleChange = (event: React.KeyboardEvent<HTMLDivElement>) => {
    const value = (event.target as HTMLInputElement).value;
    if (event.key === "Enter") {
      event.preventDefault();
      submit();
    }
    setQuery(value);
  };

  return (
    <div>
      <TextField
        id="outlined-basic"
        onKeyDown={(ev) => handleChange(ev)}
        label="Outlined"
        variant="outlined"
      />
      <Button onClick={(ev) => submit()} variant="text">
        Ask
      </Button>
    </div>
  );
}
