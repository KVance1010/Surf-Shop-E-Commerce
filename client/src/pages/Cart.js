import React, {useState} from "react";
import { useQuery } from "@apollo/client";
import { QUERY_ITEMS_BY_NAMES } from "../utils/queries";
import { useCartContext } from "../utils/cartContext";
import '../css/cart.css'
import { Link } from "react-router-dom";
import Auth from '../utils/auth'

const Cart = () => {
    
    const { cart, setCart, clearCart, addItem, removeItem, cartTotal} = useCartContext()

    const itemNameList = []
    for(let key in cart){
        itemNameList.push(key)
    }

    const {loading, data} = useQuery(QUERY_ITEMS_BY_NAMES, {
        variables: {names: itemNameList}
    })

    const items = data?.itemsByNames || []

    let total = 0
    for(let i = 0; i < items.length; i++){
        total += items[i].price * cart[items[i].name]
    }
    return(
        <div>
            {loading ? (
                <div>
                    ...Loading
                </div>
            ) : (
                <div>
                    {items.length > 0 ? (
                        <div>
                        <ul>
                            {items.map((item, index) => 
                                
                                <div key={index}>
                                    <h3>
                                    {`${item.name}`}
                                    </h3>
                                    <img src={item.image} alt={item.name} className='cart_item_image'/>
                                    <h3>
                                        {`Price: ${item.price}`}
                                    </h3>
                                    <h3>
                                        {`Quantity: ${cart[item.name]}`}
                                    </h3>
                                    <h3>
                                        {`Total = ${item.price * cart[item.name]}`}
                                    </h3>
                                    
                                    <button onClick={()=> {
                                        let newCart = cart
                                        delete newCart[item.name]
                                        setCart({...newCart})
                                        localStorage.setItem('cart', JSON.stringify(newCart))   
                                    }}>
                                        Romove Item
                                    </button>
                                </div>
                                
                            )}
                        </ul>
                        <h3>
                            {`Grand Total: ${total}`}
                        </h3>
                        <Link to={Auth.loggedIn() ? '/checkout' : '/login'}>           
                            <button>Checkout</button>
                        </Link>
                    </div>
                    ) : (
                        <h1>
                            Your Cart is Empty
                        </h1>
                    )}
                    
                </div>
            )}

        </div>
    )
}

export default Cart