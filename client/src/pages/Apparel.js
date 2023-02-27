import React from "react";
import { Link } from 'react-router-dom';
import CategoryList from "../components/CategoryList";
const Apperal = () => {
    return (
        <div>
            <div>
                <img src="https://images.unsplash.com/photo-1459745930869-b3d0d72c3cbb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80" alt="male surfer in the tube"/>
                <Link to={'/apparel/mens'}>
                    Shop Mens Apparel
                </Link>
            </div>
            <div>
                <img src="https://images.unsplash.com/photo-1584444363979-f54a9fa5409f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1228&q=80" alt="female surfer"/>
                <h1>
                    Shop Mens Apparel
                </h1>
            </div>
        </div>
    )
}

export default Apperal