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
const blogData = [
	{
		id: 1,
		image: image1,
		title: "Name",
		description:
			"Prototyping Tool Prototyping is a process that enables faster creativity and effective team.",
	},
	{
		id: 2,
		image: image2,
		title: "Name",
		description:
			"Wanna decorate your blog with photos? But don't have any photographic skills or fees to pay for photos?",
	},
	{
		id: 3,
		image: image3,
		title: "Name",
		description:
			"A landing page is a page designed to turn visitors into leads. It is separate from other pages on your...",
	},
	{
		id: 4,
		image: image4,
		title: "Name",
		description:
			"There is no doubt about the importance of Scalable Vector Graphics illustration today.",
	},
];

function home() {
	const [nfts, setNfts] = useState([]);
	useEffect(() => {
		loadNFTs();
	}, []);
	async function loadNFTs() {
		/* create a generic provider and query for unsold market items */
		const provider = new ethers.providers.JsonRpcProvider();
		const contract = new ethers.Contract(
			creatorAddress,
			CreatorNFT.abi,
			provider
		);
		console.log(contract);
		const data = await contract.fetchMarketItems();
		/*
		 *  map over items returned from smart contract and format
		 *  them as well as fetch their token metadata
		 */
		const items = await Promise.all(
			data.map(async (i) => {
				const tokenUri = await contract.tokenURI(i.tokenId);
				const meta = await axios.get(tokenUri);
				console.log(meta.data);
				let price = ethers.utils.formatUnits(i.price.toString(), "ether");
				let item = {
					price,
					tokenId: i.tokenId.toNumber(),
					seller: i.seller,
					owner: i.owner,
					image: meta.data.image,
					name: meta.data.name,
					description: meta.data.description,
					wallet_address: meta.data.wallet_address,
					email_id: meta.data.email_id,
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
