import React from "react";
import { useMutation, useQuery } from "@apollo/client";
import { QUERY_ITEMS_BY_TAGS } from "../utils/queries";
import { Link } from 'react-router-dom'


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
            <ul className="container col-3 ">
                {items.map((item, index) =>
                    <div className="card container">
                        <div className="card-body">
                            <img src={item.image} alt={item.name} className='card-img-top img-fluid'/>
                            <Link to={`${item.name}`} className='btn btn-success d-flex justify-content-center'>
                                Learn More
                            </Link>
                        </div>
                    </div>
                )}
            </ul>
        )}
   </div>
   )
    
}

export default ItemList