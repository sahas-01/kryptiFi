import React, { Component } from "react";
import { Switch, Route, Redirect, Link } from "react-router-dom";

// Styling
import "./App.css";
import home from "./components/home/home";
import Login from "./components/Login/login";
import CreatorLogin from "./components/Login/creatorLogin";
import SignupForm from "./components/Login/creatorLoginForm";
import Dashboard from "./components/Dashboard/Dashboard";
import Common from "./Common";
import creatorNFTMint from "./components/creatorNFTMint";
import AdminItems from "./components/AdminItems";

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
					{/* <Route path="/creator/:id" component={creatorprofile} /> */}
					<Route path="/dashboard" component={Dashboard} />
					<Route path="/dashboard" component={Dashboard} />
					<Route path="/nftmint" component={creatorNFTMint} />
					<Route path="/adminitems" component={AdminItems} />
				</Switch>
			</div>
		);
	}
}
export default App;
