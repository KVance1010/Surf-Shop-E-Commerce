import React from "react";



const CategoryList = (props) => {
    return(
        <div>
            <ul>
                {props.categories.categories.map((category) => {
                    return(
                        <li>
                        {category.name}
                        </li>
                    )
                    
                })}
            </ul>
        </div>
            
        
    )
}

export default CategoryList