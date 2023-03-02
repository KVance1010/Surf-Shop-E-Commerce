import {Link} from 'react-router-dom'
import { useParams } from "react-router-dom";
import { mensApparelCategory, womensApparelCategory, accessoriesCategory, surfboardsCategory, surfAccessoriesCategory } from '../utils/categoryList';


const CategoryList = ({ categories, handleCurrentTags,  }) => {

    const {categoryName} = useParams({})
    let currentCategory

    switch(categoryName) {
        case 'mens-apparel':
            currentCategory = mensApparelCategory
            break
        case 'womens-apparel':
            currentCategory = womensApparelCategory
            break
        case 'accessories':
            currentCategory = accessoriesCategory
            break
        case 'surfboards':
            currentCategory = surfboardsCategory
            break
        case 'surf-accessories':
            currentCategory = surfAccessoriesCategory
            break
        default:{}
    }

    return(
        <div>
            <ul>
                {currentCategory.categories.map((category) => {
                    return(
                        <li key={category.name}>
                            <Link to=''>
                                <div>
                                {category.name}
                                <img src={category.image} alt={`${category.name} `}/>
                                </div>
                            </Link>
                        </li>
                    )  
                })}
            </ul>
        </div>   
    )
}

export default CategoryList