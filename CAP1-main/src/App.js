import React from "react";
import { Route, Switch } from "react-router-dom";
import Menu from "./components/Menu";
import Instructions from "./components/Instructions";
import Levels from "./components/Levels";
import Easy from "./components/Easy";
import Normal from "./components/Normal";
import Hard from "./components/Hard";
import FinishMenu from "./components/FinishMenu";
import NotFound from "./components/NotFound";
import "./App.css";

const App = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Menu} />
        <Route exact path="/instructions" component={Instructions} />
        <Route exact path="/levels" component={Levels} />
        <Route exact path="/easy" component={Easy} />
        <Route exact path="/normal" component={Normal} />
        <Route exact path="/hard" component={Hard} />
        <Route exact path="/finishmenu/:status/:score" component={FinishMenu} />
        <Route exact path="*" component={NotFound} />
      </Switch>
    </>
  );
};

export default App;
