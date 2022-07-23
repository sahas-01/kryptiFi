import React, { Component } from "react";
import { Switch, Route, Redirect, Link } from "react-router-dom";

// Styling
import "./App.css";
import creatorprofile from "./components/creatorprofile/creatorprofile";
import home from "./components/home/home";
import Login from "./components/Login/login";
import CreatorLogin from "./components/Login/creatorLogin";
import Sidebar from "./components/creatorprofile/sections/Sidebar/Sidebar";
import SignupForm from "./components/Login/creatorLoginForm";
import Dashboard from "./components/Dashboard/Dashboard";
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
				    <Route path="/dashboard" component={Dashboard} />

				</Switch>
			</div>
		);
	}
}
export default App;
