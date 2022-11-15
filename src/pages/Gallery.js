import React, { useState } from "react";
import { Link } from "react-router-dom";
import Wedding from "./Wedding";
import Corporate from "./Corporate";
import Funeral from "./Funeral";
import Party from "./Party";

function Gallery() {
	const [tabLinks, setTabLinks] = useState([
		{
			id: 1,
			link: "Weddings",
			isClicked: true,
		},
		{
			id: 2,
			link: "Corporate Events",
			isClicked: false,
		},
		{
			id: 3,
			link: "Funerals",
			isClicked: false,
		},
		{
			id: 4,
			link: "Birthdays",
			isClicked: false,
		},
	]);

	const getArrId = (id) => {
		console.log(id);
		if (id === 1) {
			setTabLinks([
				{
					id: 1,
					link: "Weddings",
					isClicked: true,
				},
				{
					id: 2,
					link: "Corporate Events",
					isClicked: false,
				},
				{
					id: 3,
					link: "Funerals",
					isClicked: false,
				},
				{
					id: 4,
					link: "Birthdays",
					isClicked: false,
				},
			]);
		} else if (id === 2) {
			setTabLinks([
				{
					id: 1,
					link: "Weddings",
					isClicked: false,
				},
				{
					id: 2,
					link: "Corporate Events",
					isClicked: true,
				},
				{
					id: 3,
					link: "Funerals",
					isClicked: false,
				},
				{
					id: 4,
					link: "Birthdays",
					isClicked: false,
				},
			]);
		} else if (id === 3) {
			setTabLinks([
				{
					id: 1,
					link: "Weddings",
					isClicked: false,
				},
				{
					id: 2,
					link: "Corporate Events",
					isClicked: false,
				},
				{
					id: 3,
					link: "Funerals",
					isClicked: true,
				},
				{
					id: 4,
					link: "Birthdays",
					isClicked: false,
				},
			]);
		} else if (id === 4) {
			setTabLinks([
				{
					id: 1,
					link: "Weddings",
					isClicked: false,
				},
				{
					id: 2,
					link: "Corporate Events",
					isClicked: false,
				},
				{
					id: 3,
					link: "Funerals",
					isClicked: false,
				},
				{
					id: 4,
					link: "Birthdays",
					isClicked: true,
				},
			]);
		}
		// we can access id now
	};
	return (
		<div className="min-h-[35vh]">
			<div className="border-2 min-h-[10rem] flex items-center px-[10%]  gallery-bg">
				<h1 className="text-2xl font-bold text-white">Our Gallery</h1>
			</div>
			<div className="flex justify-center py-10">
				<div className=" gallery-header min-h-[4rem] flex gap-12 items-center bg-gray-100 px-4 rounded-md">
					{/* <Link
						href="#"
						className="px-8 py-3 text-center text-gray-800 rounded-md tab-shadow"
					>
						Weddings
					</Link> */}

					{tabLinks.map((item) => {
						return (
							<Link
								href="#"
								className={`px-8 py-3 text-center text-gray-800 rounded-md ${
									item.isClicked ? "bg-white tab-shadow" : ""
								}`}
								key={item.id}
								id={item.id}
								onClick={() => {
									getArrId(item.id);
								}}
							>
								{item.link}
							</Link>
						);
					})}
				</div>
			</div>
			<div className=" min-h-[10rem] flex justify-center">
				{tabLinks.map((item) => {
					if (item.isClicked === true && item.link === "Weddings") {
						return <Wedding />;
					} else if (
						item.isClicked === true &&
						item.link === "Corporate Events"
					) {
						return <Corporate />;
					} else if (
						item.isClicked === true &&
						item.link === "Funerals"
					) {
						return <Funeral />;
					} else if (
						item.isClicked === true &&
						item.link === "Birthdays"
					) {
						return <Party />;
					} else {
						return null;
					}
				})}
			</div>
		</div>
	);
}

export default Gallery;
