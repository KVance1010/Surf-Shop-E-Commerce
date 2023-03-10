import React from 'react';
import { surfboardsCategory } from '../utils/categoryList';
import '../css/Surfboards.css';

const Surfboards = () => {
	const surfboards = surfboardsCategory.categories;
	return (
		<div className="surfboardsContainer">
			{surfboards.map((item) => (
				<div className="boardContent" key={item.name}>
					<img src={item.image} alt={item.name} />
					<div className="boardTypeTitle">{item.name}</div>
				</div>
			))}
		</div>
	);
};

export default Surfboards;
