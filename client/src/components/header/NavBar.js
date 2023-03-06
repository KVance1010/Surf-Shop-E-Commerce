import React from 'react';
import { Link } from 'react-router-dom';
import cartIcon from '../../images/cartIcon.svg';
import '../../css/NavBar.css';
import { useCartContext } from '../../utils/cartContext';


const Links = ({ currentPage, handlePageChange }) => {

	const { cart, cartTotal } = useCartContext()

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
					<img src={cartIcon} alt='cart icon' />
					
				</Link>
			</li>
		</>
	);
};

export default Links;
