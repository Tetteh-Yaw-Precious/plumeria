import React from "react";

function AboutComponentOne({ heading, textInfo, Image }) {
	return (
		<div className="flex w-[55%]  min-h-[4rem] justify-center gap-16 about-component">
			<div className="img-ct w-[40%]">
				<img src={Image} alt="wedding-images" className="w-[100%]" />
			</div>
			<div className={`info w-[50%] flex flex-col gap-2 py-4`}>
				<h1 className="text-xl font-bold">{heading}</h1>
				<p className="text-base font-light">{textInfo}</p>
			</div>
		</div>
	);
}

export default AboutComponentOne;
