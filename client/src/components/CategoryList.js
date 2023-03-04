import {Link} from 'react-router-dom'
import { useParams } from "react-router-dom";
import { mensApparelCategory, womensApparelCategory, accessoriesCategory, surfboardsCategory } from '../utils/categoryList';
import 'bootstrap/dist/css/bootstrap.min.css';


const CategoryList = () => {

    const {categoryName} = useParams({})
    let currentCategory
    let hrefSplit = window.location.href.split('/')

    let categoryTag = (hrefSplit[hrefSplit.length-1])
    let pageTag = (hrefSplit[hrefSplit.length-2])
    console.log(categoryName)

    switch(categoryName) {
        case 'mens':
            currentCategory = mensApparelCategory
            break
        case 'womens':
            currentCategory = womensApparelCategory
            break
        case 'accessories':
            currentCategory = accessoriesCategory
            break
        case 'surfboards':
            currentCategory = surfboardsCategory
            break
        default:{}
    }

    return(
        <div >
            <div className='g-*'>
                <ul className='category_list container'>
                    {currentCategory.categories.map((category, index) => {
                        return(
                            <div className='row col-sm-3 single_category'>
                                <div className='card container'>
                                    <div className='card-body'>
                                    <img src={category.image} alt={`${category.name} `} className='card-img-top img-fluid'/>
                                    <h3 className='card-title'>{category.name.split('_').join(' ')}</h3>
                                    </div>
                                    <Link to={`/${pageTag}/${categoryTag}/${category.name.toLocaleLowerCase()}`} className='btn btn-success'>
                                        Shop
                                    </Link>
                                </div>
                            </div>
                        )  
                    })}
                </ul>
            </div>
        </div>   
    )
}

export default CategoryList;
