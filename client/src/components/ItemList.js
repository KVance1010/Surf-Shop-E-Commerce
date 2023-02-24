import React from "react";
import { useMutation, useQuery } from "@apollo/client";
import { QUERY_ITEMS_BY_TAGS } from "../utils/queries";

const ItemList = (props) => {
   const {loading, data } = useQuery(QUERY_ITEMS_BY_TAGS, {
    variables: {tags: props.tags}
   })
   const items = data?.itemsByCategory || []
   console.log(data, items)
   return ( 
    <div>
        {loading ? (
            <div>
            ...loading
            </div>
        ) : (
            <ul>
                {items.map((item) => 
                    <li key={item._id}>
                         {item.name}
                    </li>
                )}
            </ul>
        )}
   </div>
   )
    
}

export default ItemList