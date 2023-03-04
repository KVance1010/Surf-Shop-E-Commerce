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
        <div>
            {loading ? (
                <div>
                    ...loading
                </div>
            ) : (
                <div>
                    <h1>
                        Name: {itemData.name}
                    </h1>
                    <h1>
                        Brand: {itemData.brand}
                    </h1>
                    <img src={itemData.image} alt={item.name}/>
                </div>
            )}
        </div>
    )
}

export default Item