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
                    <ul>
                        {items.map((item, index) => 
                            
                            <div key={index}>
                                <h3>
                                {`${item.name}`}
                                </h3>
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
                </div>
            )}

        </div>
    )
}

export default Cart