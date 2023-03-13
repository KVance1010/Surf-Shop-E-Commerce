import React, { createContext, useContext, useState} from 'react'

const CartContext = createContext()

export const useCartContext = () => useContext(CartContext)

export const CartProvider = ({children}) => {

    const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')))
    if(!cart){
        setCart({})
    }
    const[currentUser, setCurrentUser] = useState('')

    const addItem = (item) => {
        let newCart = cart
        if(newCart[item.name]){
            newCart[item.name] +=1
        }else{
            newCart[item.name] = 1
        }
        setCart(newCart)
        localStorage.setItem('cart', JSON.stringify(newCart))
    }
    const removeItem = (item) => {
        let newCart = cart
        if(newCart[item.name] > 0){
            newCart[item.name] -= 1
        }
        setCart(newCart)
        localStorage.setItem('cart', JSON.stringify(newCart))
    }
    const clearCart = () => {
        setCart({})
        localStorage.setItem('cart', JSON.stringify({}))
    }
    const cartTotal = () => {
        let total = 0
        for(let key in cart){
            total += cart[key]
        }
        return total
    }
    

    return (
        <CartContext.Provider
            value={{cart, setCart, addItem, removeItem, clearCart, cartTotal, currentUser, setCurrentUser}}>
            {children}
        </CartContext.Provider>

    )

}

