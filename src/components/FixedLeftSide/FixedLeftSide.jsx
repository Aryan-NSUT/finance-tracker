import React from "react";
import classes from "./FixedLeftSide.module.css";
import { Button } from "@mui/material";
import { Typography } from "@mui/material";
const FixedLeftSide = ({onClickShow}) => {
  return (
    <div className={classes.LeftSideBox}>
      <div className={classes.leftSideGoalsBorder}>
        <Typography className={classes.welcomeText} gutterBottom>
          Welcome!
          <br />
          Here are some of the financial goals you have set for yourself!
        </Typography>
        {/* <hr width="100%"/> */}
        <div className={classes.leftSideGoalsPosition}>
          <Button
            variant="outlined"
            className={classes.leftSideGoals}
            fullWidth
            onClick={onClickShow}
          >
            Goal 22
          </Button>
          <Button
            variant="outlined"
            className={classes.leftSideGoals}
            fullWidth
          >
            Goal 1
          </Button>
          <Button
            variant="outlined"
            className={classes.leftSideGoals}
            fullWidth
          >
            Goal 1
          </Button>
          <Button
            variant="outlined"
            className={classes.leftSideGoals}
            fullWidth
          >
            Goal 1
          </Button>
          <Button
            variant="outlined"
            className={classes.leftSideGoals}
            fullWidth
          >
            Goal 1
          </Button>
          <Button
            variant="outlined"
            className={classes.leftSideGoals}
            fullWidth
          >
            Goal 1
          </Button>
          <Button
            variant="outlined"
            className={classes.leftSideGoals}
            fullWidth
          >
            Goal 1
          </Button>
          <Button
            variant="outlined"
            className={classes.leftSideGoals}
            fullWidth
          >
            Goal 1
          </Button>
          <Button
            variant="outlined"
            className={classes.leftSideGoals}
            fullWidth
          >
            Goal 1
          </Button>
          <Button
            variant="outlined"
            className={classes.leftSideGoals}
            fullWidth
          >
            Goal 1
          </Button>
          <Button
            variant="outlined"
            className={classes.leftSideGoals}
            fullWidth
          >
            Goal 1
          </Button>
          <Button
            variant="outlined"
            className={classes.leftSideGoals}
            fullWidth
          >
            Goal 1
          </Button>
          <Button
            variant="outlined"
            className={classes.leftSideGoals}
            fullWidth
          >
            Goal 1
          </Button>
        </div>
      </div>
      <div>
        <Typography
          className={classes.welcomeText}
          gutterBottom
          style={{ marginTop: "10px" }}
        >
          Here are some of the financial goals you have achieved!
        </Typography>
        <div className={classes.leftSideGoalsAchievedPosition}>
          <Button
            variant="outlined"
            className={classes.leftSideGoalsAchieved}
            fullWidth
          >
            Goal 1
          </Button>
          <Button
            variant="outlined"
            className={classes.leftSideGoalsAchieved}
            fullWidth
          >
            Goal 1
          </Button>
          <Button
            variant="outlined"
            className={classes.leftSideGoalsAchieved}
            fullWidth
          >
            Goal 1
          </Button>
          <Button
            variant="outlined"
            className={classes.leftSideGoalsAchieved}
            fullWidth
          >
            Goal 1
          </Button>
          <Button
            variant="outlined"
            className={classes.leftSideGoalsAchieved}
            fullWidth
          >
            Goal 1
          </Button>
          <Button
            variant="outlined"
            className={classes.leftSideGoalsAchieved}
            fullWidth
          >
            Goal 1
          </Button>
          <Button
            variant="outlined"
            className={classes.leftSideGoalsAchieved}
            fullWidth
          >
            Goal 1
          </Button>
          <Button
            variant="outlined"
            className={classes.leftSideGoalsAchieved}
            fullWidth
          >
            Goal 1
          </Button>
          <Button
            variant="outlined"
            className={classes.leftSideGoalsAchieved}
            fullWidth
          >
            Goal 1
          </Button>
          <Button
            variant="outlined"
            className={classes.leftSideGoalsAchieved}
            fullWidth
          >
            Goal 1
          </Button>
          <Button
            variant="outlined"
            className={classes.leftSideGoalsAchieved}
            fullWidth
          >
            Goal 1
          </Button>
          
        </div>
      </div>
    </div>
  );
};

export default FixedLeftSide;
