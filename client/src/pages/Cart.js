import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_ITEMS_BY_NAMES } from '../utils/queries';
import { useCartContext } from '../utils/cartContext';
import '../css/cart.css';
import { Link } from 'react-router-dom';
import Auth from '../utils/auth';

const Cart = () => {
	const { cart, setCart} =
		useCartContext();

	const itemNameList = [];
	for (let key in cart) {
		itemNameList.push(key);
	}

	const { loading, data } = useQuery(QUERY_ITEMS_BY_NAMES, {
		variables: { names: itemNameList },
	});

	const items = data?.itemsByNames || [];

	let total = 0;
	for (let i = 0; i < items.length; i++) {
		total += items[i].price * cart[items[i].name];
	}
	return (
		<div>
			{loading ? (
				<div>...Loading</div>
			) : (
				<div className='cartItemsContainer'>
					{items.length > 0 ? (
						<>
							<h1 className="cartTitle">Order</h1>
							<table className="cartTable">
								<tr className="cartTableHead">
									<th>Item</th>
									<th>Image</th>
									<th>Price</th>
									<th>Quantity</th>
									<th>Total</th>
									<th>Remove</th>
								</tr>
								{items.map((item, index) => (
									<tr key={index} className="">
										<td>{`${item.name}`}</td>
										<td>
											<img
												src={item.image}
												alt={item.name}
												className="cart_item_image"
											/>
										</td>
										<td>{`$${item.price}`}</td>
										<td>{`${cart[item.name]}`}</td>
										<td>{`$${item.price * cart[item.name]}`}</td>
										<td className='cartRemove'
											onClick={() => {
												let newCart = cart;
												delete newCart[item.name];
												setCart({ ...newCart });
												localStorage.setItem('cart', JSON.stringify(newCart));
											}}
										>
											Remove
										</td>
									</tr>
								))}
								<tr>
									<td></td>
									<td></td>
									<td></td>
									<td></td>
									<td>{`Grand Total: $${total}`}</td>
								</tr>
								<tr>
									<td></td>
									<td></td>
									<td></td>
									<td></td>
									<td>
										<Link to={Auth.loggedIn() ? '/checkout' : '/login'}>
											Checkout
										</Link>
									</td>
								</tr>
							</table>
						</>
					) : (
						<div className="emptyCartContainer">
							<p className="emptyCart">Your Cart is Empty.</p>
						</div>
					)}
				</div>
			)}
		</div>
	);
};

export default Cart;
// 		<div className="cartContainer">
// 			{items.length > 0 ? (
// 				<div>
// 					<ul>
// 						{items.map((item, index) => (
// 							<li key={index} className= "cartItemsContainer">
// 								<h3>{`${item.name}`}</h3>
// 								<img
// 									src={item.image}
// 									alt={item.name}
// 									className="cart_item_image"
// 								/>
// 								<h3>{`Price: $${item.price}`}</h3>
// 								<h3>{`Quantity: ${cart[item.name]}`}</h3>
// 								<h3>{`Total = $${item.price * cart[item.name]}`}</h3>

// 								<button
// 									onClick={() => {
// 										let newCart = cart;
// 										delete newCart[item.name];
// 										setCart({ ...newCart });
// 										localStorage.setItem('cart', JSON.stringify(newCart));
// 									}}
// 								>
// 									Romove Item
// 								</button>
// 							</li>
// 						))}
// 					</ul>
// 					<h3>{`Grand Total: ${total}`}</h3>
// 					<Link to={Auth.loggedIn() ? '/checkout' : '/login'}>
// 						<button>Checkout</button>
// 					</Link>
// 				</div>
// 			) : (
// 				<div className='emptyCartContainer'>
// 					<p className="emptyCart">Your Cart is Empty.</p>
// 				</div>
// 			)}
// 		</div>
