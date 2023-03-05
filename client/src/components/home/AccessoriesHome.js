import React from 'react';
import { accessoriesCategory } from '../../utils/categoryList.js';
import '../../css/AccessoriesHome.css';

const AccessoriesHome = () => {
	const categoryList = accessoriesCategory.categories;
	return (
		<div className="accessoriesContainer">
			<div className="accessoriesContent">
				<h3>hello</h3>
				<p>
					this is just a couple lined to see how text will look in this section
				</p>
			</div>
			<div className="accessoryImageContainer">
        <div className='imageContainer'>
					{categoryList.map((accessory) => (
						<div key={accessory.name}>
							<img src={accessory.image1} alt={accessory.alt} />
							<p>{accessory.name}</p>
						</div>
					))}
          </div>
				<h2 className="accessoriesTitle">Accessories for every need</h2>
			</div>
		</div>
	);
};

export default AccessoriesHome;
