import React from 'react';
import { Link } from 'react-router-dom';
import cart from '../../images/cartIcon.svg';
import '../../css/NavBar.css';


const Links = ({ currentPage, handlePageChange }) => {
	return (
		<>
			<li>
				<Link to="/apparel" className="navLink" onClick = {(event)=>handlePageChange(event.target.value)}>
					Apparel
				</Link>
			</li>
			<li>
				<Link to="/surfboards/surfboards" className="navLink"
				 onClick = {(event)=>handlePageChange(event.target.value)}>
					Surfboards
				</Link>
			</li>
			<li>
				<Link to="/accessories/accessories" className="navLink"
				 onClick = {(event)=>handlePageChange(event.target.value)}>
					Accessories
				</Link>
			</li>
			<li>
				<Link to="/cart" className="navLink"
				 onClick = {(event)=>handlePageChange(event.target.value)}>
					<img src={cart} alt='cart icon' />
				</Link>
			</li>
		</>
	);
};

export default Links;
