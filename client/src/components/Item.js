import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery, useMutation } from '@apollo/client';
import { QUERY_ITEM_BY_UUID } from '../utils/queries';
import { DELETE_ITEM } from '../utils/mutations';
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
import Auth from '../utils/auth';
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

const Item = ({ displayItem: item }) => {
	console.log(item)
	// mikes changes
	// const Item = () => {
	// 	console.log(Auth.isAdmin())
	// 	const { item } = useParams({});
	const [deleteItemMutation, { error, deleteItemData }] =
		useMutation(DELETE_ITEM);

	// old content
	const [expanded, setExpanded] = React.useState(false);
	const handleExpandClick = () => {
		setExpanded(!expanded);
	};

	const { cart, addItem, setCart } = useCartContext();

	// const { loading, data } = useQuery(QUERY_ITEM_BY_UUID, {
	// 	variables: { uuid: item},
	// });

	// const itemData = data?.itemByUUID || {};
	const addToCart = () => {
		const itemName = item.name
		if(cart[itemName] === item.stock){
			alert(`Sorry, our inventory cannot accommodate the quantity you're trying to specify. We will re-stock soon!`)
		}else{
			addItem({ name: item.name });
			setCart({ ...cart });
			localStorage.setItem('cart', JSON.stringify(cart));
		}
		
	};
	const storeItem = () => {
		localStorage.setItem('item', JSON.stringify(item));
	};
	const deleteItem = async () => {
		const yesDelete = window.confirm(
			'Are you sure you want to delete this item? All data for this item will be lost'
		);
		if (yesDelete) {
			try {
				await deleteItemMutation({
					variables: { uuid: item.uuid },
				});
				
			} catch (error) {
				console.error(error);
			}
			window.location.replace('/');
		}
	};

	return (
		<div className="itemContainer">
			{/* {loading ? (
				<div>...loading</div>
			) : ( */}
			<Card className="itemCard">
				<CardHeader title={item.name} />
				<CardMedia
					sx={{ height: 350, objectFit: 'scale-down' }}
					image={item.image}
					alt={item.alt}
					className="imgFluid"
					title={item.name}
					component="img"
				/>
				{item.brand ? <h4 className='itemBrand'>{item.brand}</h4> : <></>}
				<div className="extraInfoTags">
					{item.saleItem ? <h4>On Sale!!</h4> : <></>}
					{item.newArrival ? <h4>New Arrival!!</h4> : <></>}
					{item.bestSeller ? <h4>Best Seller!!</h4> : <></>}
					{item.stock < 6 && item.stock > 0? <h4>Only {item.stock} left in stock!!</h4> : <></>}
				</div>
				<CardActions>
					<Typography variant="body5">Price: ${item.price}</Typography>
					<ExpandMore aria-label="show more" onClick={handleExpandClick}>
						<span className="dropDownDescription">Description</span>
						<ExpandMoreIcon expand={expanded} aria-expanded={expanded} />
					</ExpandMore>
					{item.stock > 0 ? (
						<Button className= "addToCartBtn" size="small" onClick={addToCart}>
						Add to Cart!
					</Button>
					) : (
						<div style={{"color":"red"}}>
							OUT OF STOCK
						</div>
					)}
					
				</CardActions>
				<Collapse in={expanded} timeout="auto" unmountOnExit>
					<CardContent>
						<Typography>{item.description}</Typography>
					</CardContent>
				</Collapse>
				{Auth.isAdmin() ? (
					<div className="updateDelete">
						<Link onClick={storeItem} to={`/update/${item.uuid}`}>
							Update item
						</Link>
						<span onClick={deleteItem}>Delete item</span>
					</div>
				) : (
					<></>
				)}
			</Card>
		</div>
	);
};

export default Item;
