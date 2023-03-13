import React from 'react';
import Carousel from '../CarouselComponent';
import '../../css/home/ApparelHome.css';

const ApparelHome = ({ categories }) => {
	const accessories = false;
	const items = [1,1];
	return (
		<div className="carousel">
			<div className="categoryGender">{categories.name}</div>
			<Carousel className="containerWhiteSpace" categories={categories.categories} accessories={accessories} items = {items} type= {categories.name}/>
		</div>
	);
};

export default ApparelHome;
