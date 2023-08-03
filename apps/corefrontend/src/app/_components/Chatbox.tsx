

import React from "react";
import Grid from "@mui/material/Grid";

export function ChatBox({ children }: { children: React.ReactNode }) {
    return (
      <Grid container direction="column" spacing={2}>
        {children}
      </Grid>
    );
  }