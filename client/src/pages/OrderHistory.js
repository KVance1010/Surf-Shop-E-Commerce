import React from 'react'
import { useQuery, useMutation } from '@apollo/client'
import { GET_ORDERS_BY_EMAIL } from '../utils/queries'
import { DELETE_ORDER } from '../utils/mutations'

const OrderHistory = () => {

    const {loading, data } = useQuery(GET_ORDERS_BY_EMAIL, {
        variables: {
            email: localStorage.getItem('email')
        },
        fetchPolicy: 'cache-and-network' //gets most updated data
    }, )

    const orders = data?.ordersByEmail || []

    const [deleteOrder, { deleteOrderError, deleteOrderData}] = useMutation(DELETE_ORDER)
    function formatDate(dateNumber) {
        const date = new Date(dateNumber);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        let hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');

        let ampm 
        if (hours >= 12){
            hours -= 12
            ampm = 'pm'
        }else{
            ampm = 'am'
        }if(hours < 1){
            hours = 12
        }
      
        return `${month}/${day}/${year} ${hours}:${minutes}${ampm}`;
      }
    
    const handleDeleteOrder = (id) => {
        const confirmDelete = window.confirm('Are you sure you want to delete this Order?  It will be permanantly lost')
        if(confirmDelete){
            deleteOrder({
                variables: {
                    id: id
                }
            })
            window.location.reload()
        }
        
    }
    return(
        <>
        {loading ? (
            <h1>...loading</h1>
        ) : (
            <>
            {orders.length > 0 ? (
                <ul>
                {orders.map((order, index) => {
                    let total = 0
                    return(
                        <li key={index}>
                            <h1>
                                {`Date: ${formatDate(parseInt(order.createdAt))}`}
                            </h1>
                            {order.itemNames.map((item, index) => {
                                total += order.itemPrices[index] * order.itemQuantities[index]
                                return(
                                    <>
                                        <img style={{'width': '200px'}} src={order.itemImages[index]} alt={order.itemNames[index]}/>
                                        <h3>
                                            {`${order.itemNames[index]}: $${order.itemPrices[index]} X ${order.itemQuantities[index]} = ${order.itemPrices[index] * order.itemQuantities[index]}` }
                                        </h3>
                                    </>
                                )}
                                
                            )}
                            <h3>
                                {`Total: ${total}`}
                            </h3>
                            <button onClick={() => {handleDeleteOrder(order._id)}}>
                                Delete Order
                            </button>
                            <hr/>
                        </li>
                    )})}
                </ul>
            ) : (
                <h1>You have no orders to display</h1>
            )}
            
            </>
        )}
        
        </>
    )
}

export default OrderHistory