import React from "react";
import AboutComponentOne from "./AboutComponentOne";
import WImage from "../assets/WeddingImg.jpg";
import CEvents from "../assets/coporateImg.jpg";
import FImage from "../assets/FuneralImg.jpg";

function AboutUsSection() {
	return (
		<div className="min-h-[20rem] flex flex-col items-center py-[8rem]">
			<div className="flex flex-col items-center min-h-[3rem] gap-2 w-[50%] pb-[8rem]">
				<h1 className="font-bold text-2xl">
					Making Lasting Memories💐🌹💍
				</h1>
				<p className=" text-center text-lg text-gray-700 font-normal">
					It is a long established fact that a reader will be
					distracted by the readable content of a page when looking at
					its layout. The point of using Lorem Ipsum is that it has a
					more-or-less normal distribution of letters, as opposed to
					using 'Content here, content here', making it look like
					readable English
				</p>
			</div>
			<div className="flex gap-24 items-center cards-container">
				<AboutComponentOne
					Image={WImage}
					heading={
						<>
							Weddings & Engagement
							<br /> Ceremonies💍
						</>
					}
					textInfo={
						<>
							It is a long established fact that a reader will be
							distracted by the readable content of a page when
							looking at its layout. The point of using Lorem
							Ipsum is that it has a more-or-less normal
							distribution of letters, as opposed to using
							'Content here, content here', making it look like
							readable English
						</>
					}
				/>
				<AboutComponentOne
					Image={CEvents}
					heading={<>Corporate Events</>}
					textInfo={
						<>
							It is a long established fact that a reader will be
							distracted by the readable content of a page when
							looking at its layout. The point of using Lorem
							Ipsum is that it has a more-or-less normal
							distribution of letters, as opposed to using
							'Content here, content here', making it look like
							readable English
						</>
					}
				/>
				<AboutComponentOne
					Image={FImage}
					heading={<>Funerals</>}
					textInfo={
						<>
							It is a long established fact that a reader will be
							distracted by the readable content of a page when
							looking at its layout. The point of using Lorem
							Ipsum is that it has a more-or-less normal
							distribution of letters, as opposed to using
							'Content here, content here', making it look like
							readable English
						</>
					}
				/>
			</div>
		</div>
	);
}

export default AboutUsSection;
