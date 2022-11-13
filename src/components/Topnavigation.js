import React from "react";
import Logo from "../assets/Logo.png";
import { Link } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";

function Topnavigation() {
	return (
		<div className="min-h-[25vh] flex flex-col sticky top-0 w-[100%] bg-white b--shadow">
			<div className="h-[50%] border-b-4 border-primary-700 flex justify-center py-8 border-plumeria-500 bg-white">
				<img src={Logo} alt="Logo" />
			</div>
			<div className="h-[50%] border border-primary-700 px-[10%] flex items-center justify-between">
				<ul className="flex w-[30%] justify-between py-6">
					<li key="1">
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="#">Order gift</Link>
					</li>
					<li>
						<Link to="#">Book an event</Link>
					</li>
					<li>
						<Link to="/gallery">Gallery</Link>
					</li>
					<li>
						<Link to="#">pricing</Link>
					</li>
				</ul>
				<div className="flex gap-2">
					<input
						type="text"
						placeholder="Search"
						className="px-2 py-2 border-2 border-plumeria-600 w-[20rem] rounded-md"
					/>
					<div className="flex items-center gap-2 px-8 rounded-md bg-plumeria-500">
						<Link href="#">Cart</Link>
						<FiShoppingCart />
					</div>
				</div>
			</div>
		</div>
	);
}

export default Topnavigation;
