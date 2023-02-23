import React from 'react';
import Links from './Links';
import '../css/Header.css';

const Header = () => {
	return (
		<div className="header_container">
			<div>SurfShop</div>
			<nav className="">
				<ul className="nav_bar">
					<Links />
				</ul>
			</nav>
		</div>
	);
};

export default Header;
