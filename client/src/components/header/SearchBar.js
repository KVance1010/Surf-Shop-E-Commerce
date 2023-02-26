import React, { useState, useEffect, useRef } from 'react';
import '../../css/SearchBar.css';

const SearchBar = () => {
	const [display, setDisplay] = useState(false);
	const [items, setItems] = useState(['shirt', 'shoes', 'hats', 'board']);
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
				<svg
					className="searchIcon"
					width="28"
					height="28"
					viewBox="0 0 28 28"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M20.591 17.4189H19.3306L18.8838 16.9914C19.8809 15.8419 20.6096 14.4878 21.0178 13.0262C21.426 11.5645 21.5036 10.0314 21.2451 8.53645C20.4952 4.13478 16.7938 0.619779 12.3266 0.0814461C10.7561 -0.115733 9.16096 0.0462512 7.66323 0.555004C6.1655 1.06376 4.80489 1.90579 3.68552 3.01668C2.56615 4.12757 1.71768 5.47786 1.20504 6.96424C0.692402 8.45061 0.529181 10.0337 0.727866 11.5923C1.27031 16.0256 4.81216 19.6989 9.24745 20.4431C10.7538 20.6997 12.2986 20.6227 13.7715 20.2176C15.2443 19.8125 16.6087 19.0893 17.767 18.0998L18.1978 18.5431V19.7939L24.9784 26.5231C25.6325 27.1723 26.7014 27.1723 27.3556 26.5231C28.0097 25.8739 28.0097 24.8131 27.3556 24.1639L20.591 17.4189ZM11.0184 17.4189C7.04576 17.4189 3.83895 14.2364 3.83895 10.2939C3.83895 6.35145 7.04576 3.16895 11.0184 3.16895C14.991 3.16895 18.1978 6.35145 18.1978 10.2939C18.1978 14.2364 14.991 17.4189 11.0184 17.4189Z"
						fill="#D5C67A"
					/>
				</svg>
			</label>
			{display && (
				<div className="">
					{items
						.filter((item) => item.indexOf(search.toLowerCase()) > -1)
						.map((value, i) => {
							return (
								<div
									onClick={() => updateSearch(value)}
									className=""
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
