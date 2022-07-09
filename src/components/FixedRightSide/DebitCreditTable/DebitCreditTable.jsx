import React from "react";
import classes from "./DebitCreditTable.module.css";
import { Input, Button, Typography } from "@mui/material";
const DebitCreditTable = ({option}) => {
    const activity = option.text;
    const option1 = option.option1;
    const option2 = option.option2;
  return (
    <div>
      <div className={classes.topDiv}>
        <Input
          placeholder="Amount (in $)"
          type="text"
          className={classes.inputAmount}
          sx={{ width: "0.412" }}
        />
      </div>
      <div className={classes.heading}>
        <Typography variant="h5" gutterBottom>
          {activity}
        </Typography>
      </div>
      <div className={classes.menu}>
        <Button
          sx={{
            mx: "5px",
            width: "0.15",
            fontSize: "20px",
            color: "white",
            background: "#5800FF",
          }}
          variant="contained"
          size="large"
        >
          {option1}
        </Button>
        <Button
          sx={{
            mx: "5px",
            width: "0.15",
            fontSize: "20px",
            color: "white",
            background: "#5800FF",
          }}
          variant="contained"
          size="large"
        >
          {option2}
        </Button>
      </div>
      <div className={classes.submit}>
        <Button
          type="submit"
          
          sx={{
            "&:hover": { backgroundColor: "#D3ECA7", color: "black" },
            mx: "5px",
            width: "0.15",
            fontSize: "20px",
            color: "white",
            background: "#5800FF",
            borderRadius : "55px"
          }}
        >
          Enter
        </Button>
      </div>
    </div>
  );
};

export default DebitCreditTable;
