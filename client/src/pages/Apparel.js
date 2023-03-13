import React from 'react';
import { Link } from 'react-router-dom';
import { mensApparelCategory, womensApparelCategory } from '../utils/categoryList';
import mikePic from '../../src/images/mike_cropped.jpg';
import '../css/Apparel.css';

const Apparel = () => {
    return (
        <div className='apparelContainer'>
            <div className='apparel'>
                <Link  
                to={`/apparel/${mensApparelCategory.pathName}`}>
                <img src={mikePic} alt="male surfer in the tube"/>
                    <p className='apparelTag'>Shop Mens Apparel</p>
                </Link>
            </div>
            <div className='apparel'>
                <Link to={`/apparel/${womensApparelCategory.pathName}`} 
                >
                <img src="https://images.unsplash.com/photo-1584444363979-f54a9fa5409f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1228&q=80" alt="female surfer"/>
                
                    <p className='apparelTag'>Shop Woman's Apparel</p>
                </Link>
            </div>
        </div>
    )
}

export default Apparel;
