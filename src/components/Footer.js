import React from "react";
import Logo from "../assets/logo.svg";
import {
	AiFillFacebook,
	AiFillInstagram,
	AiFillTwitterSquare,
} from "react-icons/ai";

function Footer() {
	return (
		<div className="min-h-[20rem]  bg-plumeria-500 py-12 flex flex-col gap-12">
			<div className="logo-container w-[100%] flex justify-center">
				<img src={Logo} alt="plumeria Logo" className="W-[100%]" />
			</div>
			<div className="flex w-full px-[10%]">
				<div className="w-[30%] border-r-2 border-white">
					<h1 className="text-2xl font-bold">
						Contact Us let’s make <br /> magic happen{" "}
					</h1>
				</div>
				<div className="w-[30%] border-r-2 border-white px-8">
					<h5 className="font-medium text-gray-700">Location</h5>
					<h1 className="text-2xl font-bold">
						12 Chantan Street,
						<br />
						GA-462-6579
					</h1>
				</div>
				<div className="w-[30%] px-8">
					<h5 className="font-medium text-gray-700">Contact Us</h5>
					<h1 className="text-2xl font-bold flex h-[70%] items-center gap-4">
						<AiFillFacebook size="52" />
						<AiFillInstagram size="52" />
						<AiFillTwitterSquare size="52" />
					</h1>
				</div>
			</div>
		</div>
	);
}

export default Footer;
