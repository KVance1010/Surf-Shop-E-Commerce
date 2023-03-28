import { useQuery } from '@apollo/client';
import React from 'react';
import Auth from '../utils/auth';
import { GET_ORDERS_BY_EMAIL } from '../utils/queries';
import '../css/OrderList.css';
import { Link } from 'react-router-dom';
import Order from './Order';


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
							return (<Order key={index} order= {order} index = {index} total ={total}/>)
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
