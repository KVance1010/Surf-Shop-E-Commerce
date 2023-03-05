import React from 'react';
import { useQuery } from '@apollo/client';
import { Link } from 'react-router-dom';
import heroVideo from '../images/ezgif.com-video-to-gif.mp4';
import { QUERY_USERS } from '../utils/queries';
import Carousel from '../components/CarouselPage';
import {
	mensApparelCategory,
	womensApparelCategory,
} from '../utils/categoryList.js';
import SurfBoards from '../images/surfboards.jpg';
import '../css/Home.css';

const Home = ({ handleCurrentTags }) => {
	const { loading, data } = useQuery(QUERY_USERS);
	const users = data?.users || [];

	return (
		<>
			<div className="heroContainer">
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
			</div>
			<div className="carouselGroup">
				<Carousel apparel={womensApparelCategory} />
				<Carousel apparel={mensApparelCategory} />
			</div>
			<div className="surfBoardAdContainer">
				<img className="surfBoardAd" src={SurfBoards} />
				<div className="surfBoardOverLay">
					<p className="surfBoardAdTitle">A Board for Every Occasion</p>
					<p className="surfBoardAdButton">Discover</p>
				</div>
			</div>
		</>
	);
};
export default Home;
