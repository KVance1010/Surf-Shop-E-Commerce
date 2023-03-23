import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import {
	mensApparelCategory,
	womensApparelCategory,
} from '../utils/categoryList';

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
					<img className = 'accessoriesPageImg' src={item.image} alt={item.alt} />
					<p className="accessoriesPageTitle">{item.name}</p>
				</Link>
			))}
		</div>
	);
};

export default CategoryList;
