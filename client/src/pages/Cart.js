import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_ITEMS_BY_NAMES } from '../utils/queries';
import { useCartContext } from '../utils/cartContext';
import '../css/cart.css';
import { Link } from 'react-router-dom';
import Auth from '../utils/auth';
import Wave from 'react-wavify';

const Cart = () => {
	const { cart, setCart } = useCartContext();

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
				<div className="cartContainer">
					<h2 className="cartTitle">Cart</h2>
					{items.length > 0 ? (
						<div>
							<ul className="cartItems">
								{items.map((item, index) => (
									<li key={index} className="cartItem">
										<h3>{`${item.name}`}</h3>
										<img
											src={item.image}
											alt={item.name}
											className="cartItemImage"
										/>
										<h3>{`Price: $${item.price}`}</h3>
										<h3>{`Quantity: ${cart[item.name]}`}</h3>
										<h3>{`Total = $${(item.price * cart[item.name]).toFixed(
											2
										)}`}</h3>

										<div
											className="cartRemoveBtn"
											onClick={() => {
												let newCart = cart;
												delete newCart[item.name];
												setCart({ ...newCart });
												localStorage.setItem('cart', JSON.stringify(newCart));
											}}
										>
											Remove Item
										</div>
									</li>
								))}
							</ul>
							<h3 className="cartGrandTotal">{`Grand Total: $${total.toFixed(
								2
							)}`}</h3>
							<Link
								className="checkoutBtn"
								to={Auth.loggedIn() ? '/checkout' : '/login'}
							>
								<button>Checkout</button>
							</Link>
						</div>
					) : (
						<div className="emptyCartContainer">
							<div>
								<p className="emptyCart">Your Cart is Empty</p>
							</div>
							<div>
								<Wave mask="url(#mask)" fill="#1277b0">
									<defs>
										<linearGradient
											id="gradient"
											gradientTransform="rotate(90)"
										>
											<stop offset="0" stopColor="white" />
											<stop offset="0.5" stopColor="black" />
										</linearGradient>
										<mask id="mask">
											<rect
												x="0"
												y="0"
												width="800"
												height="400"
												fill="url(#gradient)"
											/>
										</mask>
									</defs>
								</Wave>
							</div>
						</div>
					)}
				</div>
			)}
		</div>
	);
};

export default Cart;
