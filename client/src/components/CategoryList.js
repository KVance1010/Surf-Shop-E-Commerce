import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import {
	mensApparelCategory,
	womensApparelCategory,
} from '../utils/categoryList';
import '../css/categoryList.css';

const CategoryList = ({}) => {
	const { categoryName } = useParams({});
	let currentCategory;

	switch (categoryName) {
		case 'mens':
			currentCategory = mensApparelCategory;
			break;
		case 'womens':
			currentCategory = womensApparelCategory;
			break;
			default:
				break;
	}

	return (
		<div className="categoryList">
			{currentCategory.categories.map((item) => (
				<Link
					className="imageCard"
					key={item.name}
					to={`/apparel/${categoryName}/${item.name.toLocaleLowerCase()}`}
				>
					<img className = 'categoryListImg' src={item.image} alt={item.alt} />
					<p className="categoryListTitle">{item.name}</p>
				</Link>
			))}
		</div>
	);
};

export default CategoryList;
