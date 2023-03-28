import * as React from 'react';
import { accessoriesCategory } from '../../utils/categoryList.js';
import Carousel from '../CarouselComponent';
import '../../css/home/AccessoriesHome.css';

const AccessoriesHome = () => {
	const categoryList = accessoriesCategory.categories;
	const accessories = true;
	const items = [4,1];
	return (
		<div className="accessoriesContainer">
			<div className="accessoriesContent">
				The ultimate selection of leashes, wax, fins, sunscreen, and more!  You'll always have the best equipment and you'll always be ready to shred!
			</div>
			<div className="accessoryImageContainer">
				<div className="imageContainer">
				<Carousel categories={categoryList} className='accessoryCarrouselContainer backgoundButtons' accessories={accessories} items = {items} type= {accessoriesCategory.name.toLowerCase()}/>
				</div>
				<h2 className="accessoriesTitle">Accessories for every need</h2>
			</div>
		</div>
	);
};

export default AccessoriesHome;
