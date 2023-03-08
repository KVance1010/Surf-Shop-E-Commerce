import React from 'react';
import heroVideo from '../../images/ezgif.com-video-to-gif.mp4';
// import { Link } from 'react-router-dom';
import '../../css/home/Hero.css';

const Hero = () => {
	return (
		<>
			<video loop autoPlay muted src={heroVideo} />
			<div className="heroContent">
				<p className="heroTitle">THE SURF IS CALLING</p>
				<p className="heroAction">TIME TO ANSWER...</p>
				{/* <button className="heroButton">
						<Link to="apparel">Shop</Link>
					</button> */}
			</div>
			<svg
				width="44"
				height="22"
				viewBox="0 0 44 22"
				fill="none"
				className="downArrow"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M44.0009 3.86481L22.2785 21.9082L0.556091 3.86481L4.41182 0.66211L22.2785 15.5028L40.1452 0.66211L44.0009 3.86481Z"
					fill="#F1A208"
				/>
			</svg>
		</>
	);
};

export default Hero;
