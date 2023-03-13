import * as React from 'react';
// import ImageList from '@mui/material/ImageList';
// import ImageListItem from '@mui/material/ImageListItem';
// import ImageListItemBar from '@mui/material/ImageListItemBar';
// import IconButton from '@mui/material/IconButton';
// import InfoIcon from '@mui/icons-material/Info';
import { Link } from 'react-router-dom';
import '../css/Accessories.css';
import { accessoriesCategory } from '../utils/categoryList';

const Accessories = () => {
	const categoryList = accessoriesCategory.categories;
	return (
		<div className="categoryList">
			{categoryList.map((item) => (
				<Link
					className="imageCard"
					key={item.name}
					to={`/accessories/${item.name.toLocaleLowerCase()}`}
				>
					<img className = 'accessoriesPageImg' src={item.image1} alt={item.alt} />
					<p className="accessoriesPageTitle">{item.name}</p>
				</Link>
			))}
		</div>
	);
};

export default Accessories;

{
	/* <div className="categoryList">
			<ImageList className='imageList' sx={{ width: '100vw', padding: '20px 60px' }}>
				<ImageListItem key="Subheader"  cols={3} /> 
				{categoryList.map((item) => (
					<ImageListItem sx={{ backgroundColor: 'white' }} key={item.image1}>
						<img
							// src={`${item.image1}?w=248&fit=crop&auto=format`}
							src={`${item.image1}`}
							// srcSet={`${item.image1}?w=248&fit=crop&auto=format&dpr=2 2x`}
							srcSet={`${item.image1}`}
							alt={item.alt}
							loading="lazy"
							sx= {{objectFit: 'contain'}}
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
		</div> */
}
