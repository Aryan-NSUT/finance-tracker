import React from "react";
import classes from "./FixedRightSide.module.css";
import { Typography, Button } from "@mui/material";
import DebitCreditTable from "./DebitCreditTable/DebitCreditTable";
import {useState} from "react"
const FixedRightSide = () => {
  const [option, setOption] = useState({
    text : null,
    option1 : null,
    option2 : null
  });
  const debitHandler = () =>{
    setOption({
      text : "Spent on useful utility?",
      option1 : "Yes",
      option2 : "No",
    })
  }

  const creditHandler = () =>{
    setOption({
      text : "Source?",
      option1 : "Main Income",
      option2 : "Side Income",
    })
  }  
  return (
    <div className={classes.rightSideBox}>
      <Typography variant="h2" gutterBottom align="center" sx={{ mt: 3 }}>
        EXPENCE TRACKER
      </Typography>
      <div className={classes.expense}>
        <Button
          sx={{
            mx : "5px",
            "&:hover": { backgroundColor: "green", color: "white" },
            width: "0.22",
            fontSize: "20px",
          }}
          color="success"
          variant="text"
          size="large"
        >
          {" "}
          Balance $400{" "}
        </Button>
        <Button
          sx={{
            mx : "5px",
            "&:hover": { backgroundColor: "red", color: "white" },
            width: "0.22",
            fontSize: "20px",
          }}
          color="error"
          variant="text"
          size="large"
        >
          {" "}
          Expence $50{" "}
        </Button>
      </div>

      {/* Add Credit/Debit */}
      <div className={classes.debitCredit}>

        {/* CREDIT */}
        <Button
          sx={{
            mx : "17px",
            "&:hover": { backgroundColor: "green", color: "white" },
            width: "0.19",
            fontSize: "15px",
          }}
          color="success"
          variant="contained"
          size="large"
          onClick={creditHandler}
        >
          {" "}
          Add Credit{" "}
        </Button>

        {/* DEBIT */}
        <Button
          sx={{
            mx : "17px",
            "&:hover": { backgroundColor: "red", color: "white" },
            width: "0.19",
            fontSize: "15px",
          }}
          color="error"
          variant="contained"
          size="large"
          onClick={debitHandler}
        >
          {" "}
          Add Debit{" "}
        </Button>
      
      
      </div>
      <DebitCreditTable option={option}/>
    </div>
  );
};

export default FixedRightSide;
