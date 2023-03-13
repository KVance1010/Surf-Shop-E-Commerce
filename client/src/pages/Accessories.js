import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import '../css/Accessories.css';
import { accessoriesCategory } from '../utils/categoryList';

const Accessories = () => {
	const categoryList = accessoriesCategory.categories;
	return (
		<div className="categoryList">
			<ImageList sx={{ width: 1500 }}>
				<ImageListItem key="Subheader" cols={6} />
				{categoryList.map((item) => (
					<ImageListItem 
          sx={{ backgroundColor: 'white'}}
          key={item.image1}>
						<img
							src={`${item.image1}?w=248&fit=crop&auto=format`}
							srcSet={`${item.image1}?w=248&fit=crop&auto=format&dpr=2 2x`}
							alt={item.alt}
							loading="lazy"
						/>
						<ImageListItemBar
							title={item.name}
							actionIcon={
								<IconButton
									sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
									aria-label={`info about ${item.title}`}
								>
									<InfoIcon />
								</IconButton>
							}
						/>
					</ImageListItem>
				))}
			</ImageList>
		</div>
	);
};

export default Accessories;
