import React from 'react';
import { Link } from 'react-router-dom';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import '../../css/header/NavBar.css';
import PersonIcon from '@mui/icons-material/Person';
import { useCartContext } from '../../utils/cartContext';
import Auth from '../../utils/auth';

const Links = ({ currentPage, handlePageChange }) => {
	const { cart, cartTotal } = useCartContext();

	return (
		<>
			<li>
				<Link
					to="/apparel"
					className="navLink"
					onClick={(event) => handlePageChange(event.target.value)}
				>
					Apparel
				</Link>
			</li>
			<li>
				<Link
					to="/surfboards"
					className="navLink"
					onClick={(event) => handlePageChange(event.target.value)}
				>
					Surfboards
				</Link>
			</li>
			<li>
				<Link
					to="/accessories"
					className="navLink"
					onClick={(event) => handlePageChange(event.target.value)}
				>
					Accessories
				</Link>
			</li>
			<li className="cartLi">
				<Link
					to="/cart"
					className="navLink"
					onClick={(event) => handlePageChange(event.target.value)}
				>
					<ShoppingCartCheckoutIcon sx={{ fontSize: 32 }}/>
					<div className="cartTotal">{cartTotal()}</div>
					{console.log('logged in', Auth.loggedIn())}
				</Link>
			</li>
			<li>
				<Link to={Auth.loggedIn() ? '/account' : '/login'}>
					<PersonIcon />
				</Link>
			</li>
		</>
	);
};

export default Links;
