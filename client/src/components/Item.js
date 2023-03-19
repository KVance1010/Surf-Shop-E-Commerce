import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_ITEM_BY_UUID } from '../utils/queries';
import { useCartContext } from '../utils/cartContext';
import CardHeader from '@mui/material/CardHeader';
import Card from '@mui/material/Card';
import { styled } from '@mui/material/styles';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import '../css/Item.css';
import Auth from '../utils/auth'
import { Link } from 'react-router-dom';

const ExpandMore = styled((props) => {
	const { expand, ...other } = props;
	return <IconButton {...other} />;
})(({ theme, expand }) => ({
	transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
	marginLeft: 'auto',
	transition: theme.transitions.create('transform', {
		duration: theme.transitions.duration.shortest,
	}),
}));

const Item = () => {
	console.log(Auth.isAdmin())
	const { item } = useParams({});
	console.log('hello')
	console.log(item)
	const [expanded, setExpanded] = React.useState(false);
	const handleExpandClick = () => {
		setExpanded(!expanded);
	};

	const { cart, addItem, setCart } = useCartContext();
	const { loading, data } = useQuery(QUERY_ITEM_BY_UUID, {
		variables: { uuid: item},
	});
	
	const itemData = data?.itemByUUID || {}; 
	const addToCart = () => {
		addItem({ name: itemData.name });
		setCart({ ...cart });
		localStorage.setItem('cart', JSON.stringify(cart));
	};
	const storeItem = () => {
		localStorage.setItem('item',JSON.stringify(itemData))
	}

	return (
		<div className="itemContainer" style={{}}>
			{loading ? (
				<div>...loading</div>
			) : (
				<Card className="itemCard">
					<CardHeader title={itemData.name} />
					<CardMedia
						sx={{ height: 350, objectFit: 'scale-down' }}
						image={itemData.image}
						alt={item.alt}
						className="imgFluid"
						title={item.name}
						component="img"
					/>
					<CardActions>
						<Typography variant="body5">Price: ${itemData.price}</Typography>
						<ExpandMore aria-label="show more" onClick={handleExpandClick}>
							{' '}
							Description
							<ExpandMoreIcon expand={expanded} aria-expanded={expanded} />
						</ExpandMore>
						<Button size="small" onClick={addToCart}>
							Add to Cart!
						</Button>
					</CardActions>
					<Collapse in={expanded} timeout="auto" unmountOnExit>
						<CardContent>
							<Typography variant="body2" color="black">
								{itemData.description}
							</Typography>
						</CardContent>
					</Collapse>
				</Card>
			)}
			{Auth.isAdmin() ? (
				<>
					<Link onClick={storeItem} to={`/update/${itemData.uuid}`}>
						<button>
							update tiem
						</button>
					</Link>
					<Link>
						<button>
							Delete tiem
						</button>
					</Link>
				</>
			) : (
				<>
					
				</>
			)}
			
		</div>
	);
};

export default Item;

/* This was the Second Layout w/out bootstrap and normal card*/
// const Item = () => {
// 	const { item } = useParams({});

// 	const { cart, addItem, setCart } = useCartContext();
// 	// const {loading, data} = useQuery(QUERY_ITEM_BY_ID, {
// 	//     variables: {_id: item}
// 	// })
// 	const { loading, data } = useQuery(QUERY_ITEM_BY_NAME, {
// 		variables: { name: item },
// 	});
// 	const itemData = data?.itemByName || {};
// 	const addToCart = () => {
// 		addItem({ name: item });
// 		setCart({ ...cart });
// 		localStorage.setItem('cart', JSON.stringify(cart));
// 	};

// 	return (
// 		<div className="itemContainer" style= {{}}>
// 			{loading ? (
// 				<div>...loading</div>
// 			) : (
// 				<Card sx={{  maxWidth: 1000, }}>
// 					<CardContent>
// 						<Typography gutterBottom variant="h5" component="div">
// 							 {itemData.name}
// 						</Typography>
// 						<CardMedia
// 							sx={{ height: 400, objectFit: 'scale-down'}}
// 							image={itemData.image}
// 							alt={item.name}
// 							className="img-fluid"
// 							title={item.name}
// 							component="img"
// 						/>

// 						<Typography variant="body2" color="text.secondary">
// 							{itemData.description}
// 						</Typography>
// 						<Typography variant="body2" color="text.secondary">
// 							Price: ${itemData.price}
// 						</Typography>
// 					</CardContent>
// 					<CardActions>
// 						<Button size="small" onClick={addToCart}>
// 							Add to Cart!
// 						</Button>
// 					</CardActions>
// 				</Card>


/* This was the first Layout with bootstrap */
				// <div className="row col-6">
				// 	<div>
				// 		<h1>Name: {itemData.name}</h1>
				// 		{itemData.brand ? <h1>Brand: {itemData.brand}</h1> : <></>}
				// 		{itemData.saleItem ? <h4>On Sale!!</h4> : <></>}
				// 		{itemData.newArrival ? <h4>New Arrival!!</h4> : <></>}
				// 		{itemData.bestSeller ? <h4>Best Seller!!</h4> : <></>}
				// 		<img src={itemData.image} alt={item.name} className="img-fluid" />
				// 		<p>{itemData.description}</p>
				// 		<h1>Price: ${itemData.price}</h1>

				// 		<div className="btn btn-success" onClick={addToCart}>
				// 			Add to Cart!
				// 		</div>
				// 	</div>
				// </div>
// 			)}
// 		</div>
// 	);
// };

// export default Item;
