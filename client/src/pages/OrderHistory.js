import React from 'react'
import { useQuery } from '@apollo/client'
import { GET_ORDERS_BY_EMAIL } from '../utils/queries'

const OrderHistory = () => {

    const {loading, data } = useQuery(GET_ORDERS_BY_EMAIL, {
        variables: {
            email: localStorage.getItem('email')
        }
    })

    const orders = data?.ordersByEmail || []
    console.log(orders)
    return(
        <ul>
            {orders.map((order, index) => 
                <>
                    <h1>
                        {`Date: ${order.createdAt}`}
                    </h1>
                    {order.itemNames.map((item, index) => 
                        <>
                            <h3>
                                {`${order.itemNames[index]} X ${order.itemQuantities[index]}` }
                            </h3>
                        </>
                    )}
                </>
            )}
        </ul>
    )
}

export default OrderHistory