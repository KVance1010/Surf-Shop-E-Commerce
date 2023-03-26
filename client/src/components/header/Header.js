import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import NavBar from './NavBar';
import SearchBar from './SearchBar';
import '../../css/header/Header.css';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import PersonIcon from '@mui/icons-material/Person';
import Auth from '../../utils/auth';
import { CartProvider } from '../../utils/cartContext';
import { useCartContext } from '../../utils/cartContext';


const Header = ({ currentPage, handlePageChange }) => {
	const { cart, cartTotal } = useCartContext();
	const [dropDown, setDropdown] = useState(false);
	const [activeState, setActiveState] = useState('');
	const handleDropDown = () => {
		setDropdown((dropDown) => !dropDown);
		if (activeState === 'active') {
			setActiveState('');
		} else {
			setActiveState('active');
		}
	};
	return (
		<header className="headerContainer">
			<Link to="/" className="logoLink">
				SurfShop
			</Link>
			<nav className="navContainer">
				<ul className="navList">
					<SearchBar />
					<NavBar
						currentPage={currentPage}
						handlePageChange={handlePageChange}
					/>
				</ul>
				<div className={`hamburger ${activeState}`} onClick={handleDropDown}>
					<span className="bar"></span>
					<span className="bar"></span>
					<span className="bar"></span>
					{dropDown ? (
						<ul className="navbarDropdown">
							<NavBar
								currentPage={currentPage}
								handlePageChange={handlePageChange}
							/>
						</ul>
					) : (
						<span></span>
					)}
				</div>
				<Link to="/cart" className="navLinkIcon navLink">
					<ShoppingCartCheckoutIcon className="navIcon"  sx={{ fontSize: 32 }} />
					<div className="cartTotal">{cartTotal()}</div>
				</Link>

				<Link className="navLinkIcon" to={Auth.loggedIn() ? '/account' : '/login'}>
					<PersonIcon className="navIcon" sx={{ fontSize: 32, color: '#d5c67a' }} />
				</Link>
			</nav>
		</header>
	);
};

export default Header;
