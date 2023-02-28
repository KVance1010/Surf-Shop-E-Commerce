import React from "react";
import { Link } from 'react-router-dom';
import CategoryList from "../components/CategoryList";
import { mensApparelCategory, womensApparelCategory } from '../utils/categoryList';

const Apperal = ({ handleCurrentCategory}) => {
    return (
        <div>
            <div>
                <Link  onClick={ () => {handleCurrentCategory(mensApparelCategory)}} to={`/category/${mensApparelCategory.pathName}`}>
                <img src="https://images.unsplash.com/photo-1459745930869-b3d0d72c3cbb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80" alt="male surfer in the tube"/>
                    Shop Mens Apparel
                </Link>
            </div>
            <div>
                
                <img src="https://images.unsplash.com/photo-1584444363979-f54a9fa5409f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1228&q=80" alt="female surfer"/>
                <Link to={`/category/${womensApparelCategory.pathName}`} onClick={() =>{handleCurrentCategory(womensApparelCategory)}}>
                    Shop Womens Apparel
                </Link>
            </div>
        </div>
    )
}

export default Apperal