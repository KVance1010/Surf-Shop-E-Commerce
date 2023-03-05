import React from 'react';
import Hero from '../components/home/Hero';
import Carousel from '../components/home/CarouselHome';
import SurfBoard from '../components/home/SurfBoardHome';
import Accessories from '../components/home/AccessoriesHome';
import { useQuery } from '@apollo/client';
import { QUERY_USERS } from '../utils/queries';
import {
	mensApparelCategory,
	womensApparelCategory,
} from '../utils/categoryList.js';
import '../css/Home.css';

const Home = () => {
	const { loading, data } = useQuery(QUERY_USERS);
	const users = data?.users || [];
	// const accessories = false;
	return (
		<div className="heroContainer">
			<Hero />
			<div className="carouselGroup">
				<Carousel categories = {womensApparelCategory.categories} accessories = {false} />
				<Carousel categories = {mensApparelCategory.categories} 
				accessories = {false}/>
			</div>
			<SurfBoard />
			<Accessories/>
		</div>
	);
};
export default Home;
