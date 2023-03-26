import React from 'react'
import AddItemForm from '../components/admin/AddItemForm'
import 'bootstrap/dist/css/bootstrap.min.css';
import Auth from '../utils/auth'


const Admin = () => {
    if(!Auth.isAdmin()){
        window.location.replace('/login')
    }

    return(
        <div>
            <AddItemForm />
        </div>
    )
}

export default Admin