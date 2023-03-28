import React from 'react';
import OrderItem from './OrderItem';
import Collapse from '@mui/material/Collapse';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { DELETE_ORDER } from '../utils/mutations';
import { useMutation } from '@apollo/client';

const Order = ({ order, index, total }) => {
	const [deleteOrder] = useMutation(DELETE_ORDER);

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

	const [expanded, setExpanded] = React.useState(false);
	const handleExpandClick = () => {
		setExpanded(!expanded);
	};

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

	return (
		<div className="order" key={index}>
			<CardActions>
				<ExpandMore aria-label="show more" onClick={handleExpandClick}>
					<p>
						{`Date: ${formatDate(parseInt(order.createdAt))}`}{' '}
					</p>
					<ExpandMoreIcon expand={expanded} aria-expanded={expanded} />
				</ExpandMore>
			</CardActions>
			<Collapse in={expanded} timeout="auto" unmountOnExit>
				{order.itemNames.map((item, index) => {
					total +=
						order.itemPrices[index] * order.itemQuantities[index];
					let itemKey = index + item;
					return (
						<CardContent key={itemKey}>
							<OrderItem
								className="j"
								price={order.itemPrices[index]}
								name={order.itemNames[index]}
								image={order.itemImages[index]}
								quantity={order.itemQuantities[index]}
							/>
						</CardContent>
					);
				})}
			</Collapse>
			<h3>{`Total: $${total.toFixed(2)}`}</h3>
			<div
				className="deleteOrder"
				onClick={() => {
					handleDeleteOrder(order._id);
				}}
			>
				Delete Order
			</div>
		</div>
	);
};

export default Order;
