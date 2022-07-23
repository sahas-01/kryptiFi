import React, { useEffect, useState } from "react";
import image1 from "./../../images/blog/blog-01.jpg";
import image2 from "./../../images/blog/blog-01.jpg";
import image3 from "./../../images/blog/blog-01.jpg";
import image4 from "./../../images/blog/blog-01.jpg";
import UNavbar from "../UNavbar";
import Creatorcard from "../Creatorcard";
import { ethers } from "ethers";
import axios from "axios";
import Web3Modal from "web3modal";
import { creatorAddress } from "../../config";
import CreatorNFT from "../../blockchain/artifacts/contracts/CreatorNFT.sol/CreatorNFT.json";

function home() {
	const [nfts, setNfts] = useState([]);
	useEffect(() => {
		loadNFTs();
	}, []);
	async function loadNFTs() {
		const provider = new ethers.providers.JsonRpcProvider();
		const contract = new ethers.Contract(
			creatorAddress,
			CreatorNFT.abi,
			provider
		);
		console.log(contract);
		const data = await contract.fetchMarketItems();
		
		const items = await Promise.all(
			data.map(async (i) => {
				const tokenUri = await contract.tokenURI(i.tokenId);
				const meta = await axios.get(tokenUri);
				let price = ethers.utils.formatUnits(i.price.toString(), "ether");
				let item = {
					price,
					tokenId: i.tokenId.toNumber(),
					seller: i.seller,
					owner: i.owner,
					image: meta.data.image,
					name: meta.data.name,
					description: meta.data.description,
				};
				return item;
			})
		);
		setNfts(items);
	}
	return (
		<div>
			<UNavbar />
			<div>
				<section className="pb-10">
					<div className="grid lg:grid-cols-3 grid-cols-1 md:px-4">
						{nfts.map((nft, i) => (
							<Creatorcard nft={nft} key={i} />
						))}
					</div>
				</section>
			</div>
		</div>
	);
}

export default home;
