import React from "react";
import { Link } from "react-router-dom";

function HeroSection() {
	return (
		<div className="border h-[74vh] heroBackground flex flex-col gap-2 justify-center px-[10%]">
			<h1 className="text-4xl font-extrabold text-white leading-[100%]">
				Affordable & Authentic Event
				<br /> Planning Services
			</h1>
			<p className="text-xl font-extralight text-gray-100">
				Here at plumeria, we plan and coordinate your events with class,
				utmost <br /> value for your money
			</p>
			<div className="button-ct flex py-8 gap-2">
				<Link
					href="#"
					className="px-10 py-3 border border-white text-white rounded-md text-center"
				>
					Book us now
				</Link>
				`
				<Link
					href="#"
					className="px-8 py-3 bg-plumeria-500 text-gray-800 rounded-md text-center"
				>
					Order a gift
				</Link>
				`
			</div>
		</div>
	);
}

export default HeroSection;
