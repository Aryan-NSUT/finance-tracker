import Navbar from "./components/navbar/Navbar";
import FixedLeftSide from "./components/FixedLeftSide/FixedLeftSide";
import FixedRightSide from "./components/FixedRightSide/FixedRightSide";
import AddModal from "./components/Modal/AddModal";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import IncompleteModal from "./components/Modal/IncompleteModal"
import { useState } from "react";
const App = () => {
  const [addGoals, setAddGoals] = useState(false);
  const [viewIncompleteGoal, setViewIncompleteGoal] = useState(false)
  const addGoalsIsShownHandler = () => {
    setAddGoals(true);
  };

  const addGoalsIsHiddenHandler = () => {
    setAddGoals(false);
  };

  const viewIncompleteGoalIsShownHandler = () => {
    setViewIncompleteGoal(true);
  };

  const viewIncompleteGoalIsHiddenHandler = () => {
    setViewIncompleteGoal(false);
  };
  return (
    <>
      {addGoals && <AddModal onClose={addGoalsIsHiddenHandler} />}
      {viewIncompleteGoal && <IncompleteModal onClose={viewIncompleteGoalIsHiddenHandler}/>}
      <Navbar onClickShow={addGoalsIsShownHandler}/>
      {/* Two Section : Left for static info which is to be fetched and one for adding new finance */}
      <div className="disp">
        <FixedLeftSide onClickShow={viewIncompleteGoalIsShownHandler} />
        <FixedRightSide  />
      </div>
    </>
  );
};

export default App;
