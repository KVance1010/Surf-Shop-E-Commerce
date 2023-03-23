import * as React from 'react';
import { Link } from 'react-router-dom';
import '../css/Accessories.css';
import { accessoriesCategory } from '../utils/categoryList';

const Accessories = () => {
	const categoryList = accessoriesCategory.categories;
	return (
		<div className="categoryList">
			{categoryList.map((item) => (
				<Link
					className="imageCard"
					key={item.name}
					to={`/accessories/${item.name.toLocaleLowerCase()}`}
				>
					<img className = 'accessoriesPageImg' src={item.image1} alt={item.alt} />
					<p className="accessoriesPageTitle">{item.name}</p>
				</Link>
			))}
		</div>
	);
};

export default Accessories;
