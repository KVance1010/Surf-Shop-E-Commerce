import React from 'react';
import { surfboardsCategory } from '../utils/categoryList';
import {Link} from 'react-router-dom';
import '../css/Surfboards.css';

const Surfboards = () => {
	const surfboards = surfboardsCategory.categories;
	return (
		<div className="surfboardsContainer">
			{surfboards.map((item) => (
				<Link className="boardContent" key={item.name} to={`/surfboards/${item.name.toLocaleLowerCase()}`}>
					<img src={item.image} alt={item.name} />
					<div className="boardTypeTitle">{item.name}</div>
				</Link>
			))}
		</div>
	);
};

export default Surfboards;
