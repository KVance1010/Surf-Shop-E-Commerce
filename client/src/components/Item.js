import React from 'react'
import { useQuery } from '@apollo/client'
import { QUERY_ITEM_BY_NAME } from '../utils/queries'
import { useParams } from 'react-router-dom'

const Item = () => {

    const {item} = useParams({})

    const {loading, data} = useQuery(QUERY_ITEM_BY_NAME, {
        variables: {name: item}
    })

    const itemData = data?.itemByName || {}

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
                        
                        <div className='btn btn-success'>
                            Add to Cart!
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Item