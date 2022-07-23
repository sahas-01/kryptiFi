import React, { useEffect, useState } from "react";
import { ethers } from "ethers";
import axios from "axios";
import BlogItem from "./BlogItem";
import { marketplaceAddress } from "../../../../blockchain/config";
import NFTMarketplace from "../../../../blockchain/artifacts/contracts/NFTMarketplace.sol/NFTMarketplace.json";

const Blog = ({ wallet_address }) => {
	const [nfts, setNfts] = useState([]);
	useEffect(() => {
		loadNFTs();
	}, []);
	async function loadNFTs() {
		const provider = new ethers.providers.JsonRpcProvider();
		const contract = new ethers.Contract(
			marketplaceAddress,
			NFTMarketplace.abi,
			provider
		);
		console.log(contract);
		const data = await contract.fetchMarketItems();

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
				if (item.wallet_address === wallet_address) return item;
				else return null;
			})
		);
		setNfts(items);
	}
	return (
		<section className="pb-10">
			<div className="flex flex-wrap md:px-4">
				{nfts.map((blog, id) => (
					<BlogItem blog={blog} key={id} />
				))}
			</div>
		</section>
	);
};

export default Blog;
