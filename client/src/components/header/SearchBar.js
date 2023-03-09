import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { useNavigate } from 'react-router-dom';
import { searchItems } from '../../utils/searchCategories';
import '../../css/header/SearchBar.css';

const SearchBar = () => {
	let navigate = useNavigate();

	const handleSearchInput = (e) => {
		if (e.target.textContent) {
			const category = e.target.textContent;
			let link;
			let item = category
				.substring(category.lastIndexOf(' ') + 1)
				.toLowerCase();
			let cat = category.substring(0, category.indexOf(' ')).toLowerCase();
			if (cat.includes('men')) {
				cat = `apparel/${cat}`;
			} else {
				cat = `${cat}/${cat}`
			}
			link = `/${cat}/${item}`;
			navigate(link, { replace: true });
		}
	};

	return (
		<Autocomplete
			// disablePortal
			id="combo-box-demo"
			onChange={handleSearchInput}
			// onKeyDown={handleSearchInput}
			className="searchInput"
			options={searchItems}
			sx={{ width: 250 }}
			renderInput={(params) => <TextField {...params} label="search" />}
		/>
	);
};

export default SearchBar;
