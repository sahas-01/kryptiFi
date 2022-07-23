import React, { useEffect, useState } from "react";

import ProfileCover from './../creatorprofile/sections/ProfileCover/ProfileCover.jsx'
import Sidebar from './../creatorprofile/sections/Sidebar/Sidebar.jsx'
import Navbar from './../creatorprofile/sections/Navbar/Navbar.jsx'
import Footer from './../creatorprofile/sections/Footer/Footer.jsx'
import UNavbar from "../UNavbar";
import Creatorcard from "../Creatorcard";
import { ethers } from "ethers";
import axios from "axios";
import Web3Modal from "web3modal";
import { creatorAddress } from "../../config";
import CreatorNFT from "../../blockchain/artifacts/contracts/CreatorNFT.sol/CreatorNFT.json";

function home() {
	const [nfts, setNfts] = useState([]);
	const [clickeddata, setClickedData] = useState(null);
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
		<div className="">
			{
				clickeddata === null ? (
					<div>
			<UNavbar />
			<div>
				<section className="pb-10">
					<div className="grid lg:grid-cols-3 grid-cols-1 md:px-4">
						{nfts.map((nft, i) => (
							<div className="w-full ">
      <div className="my-4 md:mx-4 shadow p-6 rounded-md bg-white group hover:shadow-md">
        <div className="relative mb-6 w-full h-56 bg-purple-200 rounded-md overflow-hidden">
          <img
            src={nft.image}
            alt="creatorImage"
            className="w-full h-full object-cover object-center transform group-hover:scale-125 group-hover:rotate-6 transition duration-200"
          />
        </div>
        <h3>
          <a
            onClick={() => setClickedData(nft)}
            className="block text-lg font-medium text-gray-800 hover:text-purple-600 mb-2"
          >
            {nft.name}
          </a>
        </h3>
        <p className="text-gray-400">{nft.description}</p>
      </div>
    </div>
						))}
					</div>
				</section>
			</div>
		</div>
				) : (
						<main className="min-h-screen relative bg-gray-50 pb-10">
      <ProfileCover />
      <div className="container px-4">
        <div className="flex flex-wrap px-4">
          <div className="w-full lg:w-1/3 ">
            <Sidebar clickeddata={clickeddata} />
          </div>
          <div className="w-full lg:w-2/3 ">
            <Navbar />
          </div>
        </div>
      </div>
      <Footer />
    </main>
				)
			}
			</div>
		
	);
}

export default home;
