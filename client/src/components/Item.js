import React, {useContext} from 'react'
import { useParams } from 'react-router-dom'
import { useQuery } from '@apollo/client'
import { QUERY_ITEM_BY_ID } from '../utils/queries'
import  {QUERY_ITEM_BY_NAME}  from '../utils/queries'
import { useCartContext } from '../utils/cartContext'



const Item = () => {    
    
    const {item} = useParams({})
    
    const { cart, addItem, clearCart, setCart, cartTotal } =  useCartContext()
    console.log(cart)
    console.log(cartTotal())
     // const {loading, data} = useQuery(QUERY_ITEM_BY_ID, {
    //     variables: {_id: item}
    // })
    const {loading, data} = useQuery(QUERY_ITEM_BY_NAME, {
        variables:{ name: item }
    })
    const itemData = data?.itemByName || {}
    console.log(itemData)
    return(
        
            
            <div className='container'>
                {loading ? (
                    <div>
                        ...loading
                    </div>
                ) : (
                    <div className='row col-6'>
                        <div>
                            <h1>
                                Name: {itemData.name}
                            </h1>
                            {itemData.brand? (
                                <h1>
                                Brand: {itemData.brand}
                                </h1>
                            ) : (<></>)}
                            {itemData.saleItem? (
                                    <h4>
                                        On Sale!!
                                    </h4>
                                ) : <></>}
                            {itemData.newArrival? (
                                    <h4>
                                        New Arrival!!
                                    </h4>
                                ) : <></>}
                            {itemData.bestSeller? (
                                    <h4>
                                        Best Seller!!
                                    </h4>
                                ) : <></>}
                            <img src={itemData.image} alt={item.name} className='img-fluid'/>
                            <p>
                                {itemData.description}
                            </p>
                            <h1>
                                Price: ${itemData.price}
                            </h1>
                            
                            <div className='btn btn-success' onClick={() => {
                                addItem({name: item})
                                let newCart = cart
                                console.log(newCart)
                                setCart({...newCart})
                            }   
                            }>
                                Add to Cart!
                            </div>
                        </div>
                    </div>
                )}
            </div>
          
    )
}

export default Item