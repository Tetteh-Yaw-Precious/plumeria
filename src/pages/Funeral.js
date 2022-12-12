import React from "react";
import WImageOne from "../assets/w-1.jpg";
import WImageTwo from "../assets/w-2.jpg";
import WImageThree from "../assets/w-3.jpg";
import WImageFour from "../assets/w-4.jpg";

const Funeral = () => {
	return (
		<div className=" min-w-[15%] grid grid-cols-2 grid-4 min-h-[10rem] pb-8">
			<div>
				<img src={WImageOne} alt="weddingOne" />
			</div>
			<div>
				<img src={WImageTwo} alt="weddingOne" />
			</div>
			<div> 
				<img src={WImageThree} alt="weddingOne" />
			</div>
			<div>
				<img src={WImageFour} alt="weddingOne" />
			</div>
		</div>
	);
};

export default Funeral;
