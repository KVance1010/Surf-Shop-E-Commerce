import React from 'react'
import AddItemForm from '../components/admin/AddItemForm'
import 'bootstrap/dist/css/bootstrap.min.css';


const Admin = () => {



    return(
        <div>
            <h1>
                Add new item:  
            </h1>
            <AddItemForm />
        </div>
    )
}

export default Admin