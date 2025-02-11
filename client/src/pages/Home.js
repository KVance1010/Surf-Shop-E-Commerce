import React from 'react';
import Hero from '../components/home/Hero';
import Apparel from '../components/home/ApparelHome';
import SurfBoard from '../components/home/SurfBoardHome';
import Accessories from '../components/home/AccessoriesHome';
import { useQuery } from '@apollo/client';
import { QUERY_USERS } from '../utils/queries';
import {
	mensApparelCategory,
	womensApparelCategory,
} from '../utils/categoryList.js';
import '../css/home/Home.css';

const Home = () => {

	const { loading, data } = useQuery(QUERY_USERS);
	const users = data?.users || [];
	// const accessories = false;
	return (
		<div className="heroContainer">
			<Hero />
			<div className="carouselGroup">
				<Apparel categories = {womensApparelCategory} />
				<Apparel categories = {mensApparelCategory} />
			</div>
			<SurfBoard />
			<Accessories/>
		</div>
	);
};
export default Home;
