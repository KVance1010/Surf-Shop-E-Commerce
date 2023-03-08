import React from "react";
import { useQuery } from "@apollo/client";
import { QUERY_ITEMS_BY_NAMES } from "../utils/queries";
import { useCartContext } from "../utils/cartContext";

const Cart = () => {
    const { cart, setCart, clearCart, addItem, removeItem, cartTotal} = useCartContext()

    const itemNameList = []
    for(let key in cart){
        itemNameList.push(key)
    }
    console.log(itemNameList)

    const {loading, data} = useQuery(QUERY_ITEMS_BY_NAMES, {
        variables: {names: itemNameList}
    })

    const items = data?.itemsByNames || []
    console.log(items)
    console.log('cart', cart)

    return(
        <div>
            {loading ? (
                <div>
                    ...Loading
                </div>
            ) : (
                <ul>
                    {items.map((item) => 
                        <h3>
                            {`${item.name}: Quantity: ${cart[item.name]}`}
                        </h3>
                    )}
                </ul>
            )}

        </div>
    )
}

export default Cart