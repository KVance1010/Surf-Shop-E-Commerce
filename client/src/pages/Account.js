import { useQuery, useMutation } from '@apollo/client';
import React, { useState } from 'react';
import Auth from '../utils/auth';
import { GET_ORDERS_BY_EMAIL } from '../utils/queries';
import { DELETE_ORDER } from '../utils/mutations';
import '../css/OrderList.css';
import { Link } from 'react-router-dom';
import OrderItem from './OrderItem';

const Account = () => {
	if (!Auth.loggedIn()) {
		window.location.replace('/login');
	}
	const logout = () => {
		Auth.logout();
		window.location.replace('/');
	};

	const { loading, data } = useQuery(GET_ORDERS_BY_EMAIL, {
		variables: {
			email: localStorage.getItem('email'),
		},
		fetchPolicy: 'cache-and-network', //gets most updated data
	});

	const orders = data?.ordersByEmail || [];

	const [deleteOrder, { deleteOrderError, deleteOrderData }] =
		useMutation(DELETE_ORDER);

	function formatDate(dateNumber) {
		const date = new Date(dateNumber);
		const year = date.getFullYear();
		const month = String(date.getMonth() + 1).padStart(2, '0');
		const day = String(date.getDate()).padStart(2, '0');
		let hours = String(date.getHours()).padStart(2, '0');
		const minutes = String(date.getMinutes()).padStart(2, '0');

		let ampm;
		if (hours >= 12) {
			hours -= 12;
			ampm = 'pm';
		} else {
			ampm = 'am';
		}
		if (hours < 1) {
			hours = 12;
		}
		return `${month}/${day}/${year} ${hours}:${minutes}${ampm}`;
	}

	const handleDeleteOrder = (id) => {
		const confirmDelete = window.confirm(
			'Are you sure you want to delete this Order?  It will be permanantly lost'
		);
		if (confirmDelete) {
			deleteOrder({
				variables: {
					id: id,
				},
			});
			window.location.reload();
		}
	};

	// THIS WORKS
	const [classes, setClasses] = useState('displayNone');
	const handleDisplayOrder = (e) => {
		console.log(e.target.nextElementSibling.className);
		let currentClass = e.target.nextElementSibling.className;
		if (currentClass === 'displayNone') {
			setClasses('orderList');
		} else {
			setClasses('displayNone');
		}
	};

	

	return (
		<div>
            <div className='titleLogoutContainer'>
			<h1>Order History</h1>
            <Link onClick={logout}>Logout</Link>
            </div>
			<div>
				{orders.length > 0 ? (
					<ul >
						{orders.map((order, index) => {
							let total = 0;
							return (
								<li key={index} className='order'>
									<p onClick={(index) => handleDisplayOrder(index)}>
										{`Date: ${formatDate(parseInt(order.createdAt))}`}{' '}
										<span className="hideOrderIcon">^</span>
									</p>
									{order.itemNames.map((item, index) => {
										total +=
											order.itemPrices[index] * order.itemQuantities[index];
										let itemKey = index + item;
										return (
											<OrderItem 
												key={itemKey}
												className={classes}
												price={order.itemPrices[index]}
												name={order.itemNames[index]}
												image={order.itemImages[index]}
												quantity={order.itemQuantities[index]}
											/>
										);
									})}
									<h3>{`Total: ${total}`}</h3>
									<div className="deleteOrder"
										onClick={() => {
											handleDeleteOrder(order._id);
										}}
									>
										Delete Order
									</div>
								</li>
							);
						})}
					</ul>
				) : (
					<h1>You have no orders to display</h1>
				)}
			</div>
		</div>
	);
};

export default Account;

