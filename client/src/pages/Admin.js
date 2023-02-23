import React from 'react'
import AddItemForm from '../components/admin/AddItemForm'
import {useQuery, useMutation} from '@apollo/client'
import { QUERY_ITEMS, QUERY_ITEMS_BY_TAGS  } from '../utils/queries'


const Admin = () => {
    const { loading, data } = useQuery(QUERY_ITEMS);
    const items = data?.items || [];

    const { itemsByTagLoading, itemsByTagData} = useQuery(QUERY_ITEMS_BY_TAGS)
    const itemsByTag =itemsByTagData?.itemsByTag || []


    const handleTagSubmit = async (event) => {
        event.preventDefault()
        
    }
    return(
        <div>
            <h1>
                Add new item:  
            </h1>
            <AddItemForm />
            {/* {query all items test} */}
            <div>
                {loading ? (
                    <div>
                        ...loading
                    </div>
                ) : (
                    <ul>
                    {items.map((item) => 
                      
                            <li>
                                {item.name}
                            </li>
                   
                    )}
                </ul>
                )}
               
            </div>
            <form onSubmit={handleTagSubmit}>
                <div className="form-group">
                    <label >tag 1</label><br/>
                    <input type="text" className="form-control" id="tag1" />
                </div>
                <div className="form-group">
                    <label>tag 2</label><br/>
                    <input type="text" className="form-control" id="tag2" />
                </div>
                <div className="form-group">
                    <label>tag 3</label><br/>
                    <input type="text" className="form-control" id="itemDescription" />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default Admin