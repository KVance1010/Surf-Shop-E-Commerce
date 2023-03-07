import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import {searchItems} from '../../utils/searchCategories';
import '../../css/header/SearchBar.css';

const SearchBar = () => {
	return (
		<Autocomplete
			// disablePortal
			id="combo-box-demo"
            className='searchInput'
			options={searchItems}
			sx={{ width: 250 }}
			renderInput={(params) => <TextField {...params} label="search" />}
		/>
	);
};

export default SearchBar;
