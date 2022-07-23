import React, { Component } from "react";
import { Switch, Route , Redirect, Link} from 'react-router-dom';


// Styling
import "./App.css";
import creatorprofile from "./components/creatorprofile/creatorprofile";
import home from "./components/home/home";
import Login from "./components/Login/Login";
import Sidebar from "./components/creatorprofile/sections/Sidebar/Sidebar";

class App extends Component {
  render() {
    return (
      <div className="">
        <Switch>
          <Route exact path="/" component={Login} />
        <Route exact path="/home" component={home} />
        <Route path="/creator" component={creatorprofile} />
      </Switch>
      </div>
      
    );
  }
}
export default App;
