import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_ITEM_BY_ID } from '../utils/queries';
import { QUERY_ITEM_BY_NAME } from '../utils/queries';
import { useCartContext } from '../utils/cartContext';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';

const Item = () => {
	const { item } = useParams({});

	const { cart, addItem, setCart } = useCartContext();
	// const {loading, data} = useQuery(QUERY_ITEM_BY_ID, {
	//     variables: {_id: item}
	// })
	const { loading, data } = useQuery(QUERY_ITEM_BY_NAME, {
		variables: { name: item },
	});
	const itemData = data?.itemByName || {};
	const addToCart = () => {
		addItem({ name: item });
		setCart({ ...cart });
		localStorage.setItem('cart', JSON.stringify(cart));
	};

	return (
		<div className="container">
			{loading ? (
				<div>...loading</div>
			) : (
				// <Card sx={{ maxWidth: 800 }}>
				// 	<CardContent>
				// 		<Typography gutterBottom variant="h5" component="div">
				// 			Name: {itemData.name}
				// 		</Typography>
				// 		<CardMedia
				// 			sx={{ height: 500 }}
				// 			image={itemData.image}
				// 			alt={item.name}
				// 			className="img-fluid"
				// 			title={item.name}
				// 			component="div"
				// 		/>

				// 		<Typography variant="body2" color="text.secondary">
				// 			{itemData.description}
				// 		</Typography>
				// 		<Typography variant="body2" color="text.secondary">
				// 			Price: ${itemData.price}
				// 		</Typography>
				// 	</CardContent>
				// 	<CardActions>
				// 		<Button size="small" onClick={addToCart}>
				// 			Add to Cart!
				// 		</Button>
				// 	</CardActions>
				// </Card>

				<div className="row col-6">
					<div>
						<h1>Name: {itemData.name}</h1>
						{itemData.brand ? <h1>Brand: {itemData.brand}</h1> : <></>}
						{itemData.saleItem ? <h4>On Sale!!</h4> : <></>}
						{itemData.newArrival ? <h4>New Arrival!!</h4> : <></>}
						{itemData.bestSeller ? <h4>Best Seller!!</h4> : <></>}
						<img src={itemData.image} alt={item.name} className="img-fluid" />
						<p>{itemData.description}</p>
						<h1>Price: ${itemData.price}</h1>

						<div className="btn btn-success" onClick={addToCart}>
							Add to Cart!
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default Item;
