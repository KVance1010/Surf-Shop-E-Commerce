import React from "react";
import { useMutation, useQuery } from "@apollo/client";
import { QUERY_ITEMS_BY_TAGS } from "../utils/queries";
import { Link } from 'react-router-dom'
import { BSONValue } from 'bson-objectid';

const ItemList = () => {

    let hrefSplit = window.location.href.split('/')
    let tags = []
    let itemTag = (hrefSplit[hrefSplit.length-1])
    if(itemTag){
        tags.push(itemTag)
    }
    let categoryTag = (hrefSplit[hrefSplit.length-2])
    if(categoryTag){
        tags.push(categoryTag)
    }
    let pageTag = (hrefSplit[hrefSplit.length-1])
    if(pageTag){
        tags.push(pageTag)
    }
 
    
   const {loading, data } = useQuery(QUERY_ITEMS_BY_TAGS, {
    variables: {tags: tags}
   })
   const items = data?.itemsByCategory || []

   return ( 
    <div>
        {loading ? (
            <div>
            ...loading
            </div>
        ) : (
            <ul>
                {items.map((item, index) => 
                    <li key={index}>
                        {console.log(item)}
                        <Link to={`${item.name}`}>
                            {item.name}
                        </Link>
                    </li>
                )}
            </ul>
        )}
   </div>
   )
    
}

export default ItemList