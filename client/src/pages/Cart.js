import React, {useState} from "react";
import { useQuery } from "@apollo/client";
import { QUERY_ITEMS_BY_NAMES } from "../utils/queries";
import { useCartContext } from "../utils/cartContext";

const Cart = () => {
    const { cart, setCart, clearCart, addItem, removeItem, cartTotal} = useCartContext()

    const [update, setUpdate] = useState(true)
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
                    {items.map((item, index) => 
                        
                        <div key={index}>
                            <h3>
                            {`${item.name}: Quantity: ${cart[item.name]}`}
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
            )}

        </div>
    )
}

export default Cart