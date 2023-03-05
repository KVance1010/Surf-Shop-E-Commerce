import React, { useState, useEffect, useRef } from 'react';
import searchIcon from '../../images/searchIcon.svg';
import '../../css/SearchBar.css';

const SearchBar = () => {
	const [display, setDisplay] = useState(false);
	const [items, setItems] = useState([
		'Women - Boardshorts',
		'Women - Shirts',
		'Women - Shorts',
		'Women - Hoodies',
		'Women - Footwear',
		'Women - Hats',
		'Women - Shades',
		'Women - Wetsuits',
		'Women - Shoes',
		'Men - Boardshorts',
		'Men - Shirts',
		'Men - Shorts',
		'Men - Hoodies',
		'Men - Footwear',
		'Men - Hats',
		'Men - Shades',
		'Men - Wetsuits',
		'Men - Shoes',
		'Surfboards - Shortboards',
		'Surfboards - Longboards',
		'Surfboards - Hybrids',
		'Surfboards - Guns',
		'Accessories - Leashes',
		'Accessories - wax',
		'Accessories - sunscreen',
		'Accessories - fins',
		'Accessories - ding repair',
		'Accessories - rashguards',
		'Accessories - earplugs',
		'Accessories - tail pads',
		'Accessories - helmets',
		'Accessories - watches',
		'Accessories - towels',
		'Accessories - bags',
	]);
	const [search, setSearch] = useState('');
	const wrapperRef = useRef(null);

	useEffect(() => {
		window.addEventListener('mousedown', handleClickOutside);
		return () => {
			window.removeEventListener('mousedown', handleClickOutside);
		};
	});

	const handleClickOutside = (event) => {
		const { current: wrap } = wrapperRef;
		if (wrap && !wrap.contains(event.target)) {
			setDisplay(false);
		}
	};

	const updateSearch = (item) => {
		setSearch(item);
		setDisplay(false);
	};

	return (
		<div ref={wrapperRef} className="">
			<label className="searchBox" onClick={() => setDisplay(!display)}>
				<input
					id="auto"
					className="searchInput"
					value={search}
					onChange={(event) => setSearch(event.target.value)}
				/>
				<img src={searchIcon} alt='shopping cart icon'className="searchIcon"/>
			</label>
			{display && (
				<div className="dropDownMenu">
					{items
						.filter((item) => item.indexOf(search.toLowerCase()) > -1)
						.map((value, i) => {
							return (
								<div
									onClick={() => updateSearch(value)}
									className="dropDownSearch"
									key={i}
									tabIndex="0"
								>
									<span>{value}</span>
								</div>
							);
						})}
				</div>
			)}
		</div>
	);
};

export default SearchBar;
