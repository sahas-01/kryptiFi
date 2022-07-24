import React from "react";
import { useState, useEffect } from "react";
import { ethers } from "ethers";
import logo from "../../logo.svg";

function Login() {
	const [haveMetamask, sethaveMetamask] = useState(true);
	const [accountAddress, setAccountAddress] = useState("");
	const [accountBalance, setAccountBalance] = useState("");
	const [isConnected, setIsConnected] = useState(false);

	const { ethereum } = window;
	const provider = new ethers.providers.Web3Provider(window.ethereum);

	useEffect(() => {
		const { ethereum } = window;
		const checkMetamaskAvailability = async () => {
			if (!ethereum) {
				sethaveMetamask(false);
			}
			sethaveMetamask(true);
			localStorage.setItem("haveMetamask", true);
			localStorage.setItem("address", accountAddress);
			// window.location.href = '/home';
		};
		checkMetamaskAvailability();
	}, []);

	const connectWallet = async () => {
		try {
			if (!ethereum) {
				sethaveMetamask(false);
			}
			const accounts = await ethereum.request({
				method: "eth_requestAccounts",
			});
			let balance = await provider.getBalance(accounts[0]);
			let bal = ethers.utils.formatEther(balance);
			setAccountAddress(accounts[0]);
			localStorage.setItem('accountAddress', accounts[0]);

			setAccountBalance(bal);
			setIsConnected(true);
		} catch (error) {
			setIsConnected(false);
		}
	};
	return (
		<header className="App-header">
			{haveMetamask ? (
				<div className="App-header text-black">
					{isConnected ? (
						<div className="card">
							<div className="card-row">
								<h3 className="text-black">Wallet Address:</h3>
								<p className="text-black">
									{accountAddress.slice(0, 4)}...
									{accountAddress.slice(38, 42)}
								</p>
							</div>
							<div className="card-row">
								<h3 className="text-black">Wallet Balance:</h3>
								<p className="text-black">{accountBalance}</p>
							</div>
							<button className="bg-blue-500 text-xl hover:bg-blue-700 text-white mx-5 font-bold py-2 px-4 rounded" onClick={() => window.location.href = '/home'}>Explore</button>

						</div>
					) : (
						<img src={logo} className="App-logo" alt="logo" />
					)}
					{isConnected ? (
						<p className="info text-black">🎉 Connected Successfully</p>
					) : (
						<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 text-xl rounded" onClick={connectWallet}>
							Connect
						</button>
					)}
				</div>
			) : (
				<p>Please Install MataMask</p>
			)}
		</header>
	);
}

export default Login;
