import React from "react";
import { useQuery } from "@apollo/client";
import { QUERY_ITEMS_BY_NAMES } from "../utils/queries";
import { useCartContext } from "../utils/cartContext";

const Cart = () => {
    const { cart, setCart, clearCart, addItem, removeItem, cartTotal} = useCartContext()

    return(
        <div>
            <ul>
                
            </ul>
        </div>
    )
}

export default Cart