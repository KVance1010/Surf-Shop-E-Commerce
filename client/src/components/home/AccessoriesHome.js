import * as React from 'react';
import { accessoriesCategory } from '../../utils/categoryList.js';
import Carousel from '../CarouselComponent';
import '../../css/AccessoriesHome.css';

const AccessoriesHome = () => {
	const categoryList = accessoriesCategory.categories;
	const accessories = true;
	const items = 4;
	return (
		<div className="accessoriesContainer">
			<div className="accessoriesContent">
				<h3>hello</h3>
				<p>
					this is just a couple lined to see how text will look in this section
				</p>
			</div>
			<div className="accessoryImageContainer">
				<div className="imageContainer">
				<Carousel categories={categoryList} className='accessoryCarrouselContainer backgoundButtons' accessories={accessories} items = {items}/>
				</div>
				<h2 className="accessoriesTitle">Accessories for every need</h2>
			</div>
		</div>
	);
};

export default AccessoriesHome;
