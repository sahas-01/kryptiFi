import React, { Component } from "react";
import { Switch, Route, Redirect, Link } from "react-router-dom";

// Styling
import "./App.css";
import home from "./components/home/home";
import Login from "./components/login/login";
import CreatorLogin from "./components/login/creatorLogin";
import SignupForm from "./components/login/creatorLoginForm";
import Dashboard from "./components/Dashboard/Dashboard";
import Common from "./Common";
import creatorNFTMint from "./components/creatorNFTMint";
import AdminItems from "./components/AdminItems";
import UserNFT from "./components/UserNFT";

class App extends Component {
	render() {
		return (
			<div className="">
				<Switch>
					<Route exact path="/" component={Common} />
					<Route exact path="/loginuser" component={Login} />
					<Route exact path="/logincreator" component={CreatorLogin} />
					<Route exact path="/signupform" component={SignupForm} />
					<Route exact path="/home" component={home} />
					{/* <Route path="/creator/:id" component={creatorprofile} /> */}
					<Route path="/dashboard" component={Dashboard} />
					<Route path="/nftmint" component={creatorNFTMint} />
					<Route path="/adminitems" component={AdminItems} />
					<Route path="/usernfts" component={UserNFT} />
				</Switch>
			</div>
		);
	}
}
export default App;
