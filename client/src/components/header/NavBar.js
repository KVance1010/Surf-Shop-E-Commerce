import React from 'react';
import { Link } from 'react-router-dom';
import cartIcon from '../../images/cartIcon.svg';
import '../../css/header/NavBar.css';
import PersonIcon from '@mui/icons-material/Person';
import { useCartContext } from '../../utils/cartContext';
import Auth from '../../utils/auth'

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
					to="/surfboards/surfboards"
					className="navLink"
					onClick={(event) => handlePageChange(event.target.value)}
				>
					Surfboards
				</Link>
			</li>
			<li>
				<Link
					to="/accessories/accessories"
					className="navLink"
					onClick={(event) => handlePageChange(event.target.value)}
				>
					Accessories
				</Link>
			</li>
			<li className='cartLi'>
				<Link
					to="/cart"
					className="navLink"
					onClick={(event) => handlePageChange(event.target.value)}
				>
					<img src={cartIcon} className="cartIcon" alt="cart icon" />
					<div className='cartTotal'>{cartTotal()}</div>
					{console.log('logged in',Auth.loggedIn())}
				</Link>
				
			</li>
			<li>
				<PersonIcon />
			</li>
			{Auth.loggedIn() ? (
				<li>
					<Link className='navLink' onClick={Auth.logout}>logout</Link>
				</li>
			) : (
				<>
					<li >
						<Link to={'/login'} className='navLink'>login</Link>
					</li>
					<li><Link to={'/signup'} className='navLink'>Signup</Link></li>
				</>
			)}
		</>
	);
};

export default Links;
