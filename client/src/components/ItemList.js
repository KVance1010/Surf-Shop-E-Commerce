import React from "react";
import { useQuery } from "@apollo/client";
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
    variables: {tags: tags},
   })
   
   const items = data?.itemsByCategory || []
   console.log(items[0])
   return ( 
    <div>
        {loading ? (
            <div>
            ...loading
            </div>
        ) : (
            <ul className="container col-3 ">
                {items.map((item, index) =>
                    <div className="card container" key={index} data-uuid={item.uuid}>
                        {/* {console.log(mongoose.Types.ObjectId(item._id).toString())} */}
                        <div className="card-body">
                            <h3 className="card-title">
                                {item.name}
                            </h3>
                            {item.brand? (
                                <h4>
                                    By: {item.brand}
                                </h4>
                            ) : <></>}
                            {item.saleItem? (
                                <h4>
                                    On Sale!!
                                </h4>
                            ) : <></>}
                            {item.newArrival? (
                                <h4>
                                    New Arrival!!
                                </h4>
                            ) : <></>}
                            {item.bestSeller? (
                                <h4>
                                    Best Seller!!
                                </h4>
                            ) : <></>}
                            <img src={item.image} alt={item.name} className='card-img-top img-fluid'/>
                            <h4>
                                Price: ${item.price}
                            </h4>
                            <Link to={`${item.uuid}`} className='btn btn-success d-flex justify-content-center'>
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