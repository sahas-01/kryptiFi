import React, { Component } from "react";
import { Switch, Route, Redirect, Link } from "react-router-dom";

// Styling
import "./App.css";
import creatorprofile from "./components/creatorprofile/creatorprofile";
import home from "./components/home/home";
import Login from "./components/login/login";
import CreatorLogin from "./components/login/creatorLogin";
import Sidebar from "./components/creatorprofile/sections/Sidebar/Sidebar";
import SignupForm from "./components/login/creatorLoginForm";
import Common from "./Common";

class App extends Component {
	render() {
		return (
			<div className="">
				<Switch>
					<Route path="/common" component={Common} />
					<Route exact path="/" component={Login} />
					<Route exact path="/creatorsignup" component={CreatorLogin} />
					<Route exact path="/signupform" component={SignupForm} />
					<Route exact path="/home" component={home} />
					<Route path="/creator" component={creatorprofile} />
				</Switch>
			</div>
		);
	}
}
export default App;
