import React from 'react'
import AddItemForm from '../components/admin/AddItemForm'
import ItemList from '../components/ItemList'
import {useQuery, useMutation} from '@apollo/client'
import { QUERY_ITEMS, QUERY_ITEMS_BY_TAGS  } from '../utils/queries'
import 'bootstrap/dist/css/bootstrap.min.css';


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

        </div>
    )
}

export default Admin