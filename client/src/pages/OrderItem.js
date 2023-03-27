import React from 'react';

const OrderItem = (props) => {
    let classes = '' + props.className;
  return (
            <div className={classes}>
                <img
                    style={{ width: '200px' }}
                    src={props.image}
                    alt={props.name}
                />
                <div>
                    <p>{props.name}</p>
                    <p>
                    {`$${
                        props.price
                    } X ${props.quantity} = ${
                        props.price *
                        props.quantity
                    }`}
                    </p>
                </div>
            </div>
  )
}

export default OrderItem;