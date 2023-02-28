import React, {useState} from "react";


const CategoryList = (props) => {
    console.log(props)
    return(
        <div>
            <ul>
                {props.categories.categories.map((category) => {
                    return(
                        <li>
                            <>
                            {category.name}
                            <img src={category.image}/>
                            </>
                        
                    </li>
                    )
                    
                })}
            </ul>
        </div>
            
        
    )
}

export default CategoryList