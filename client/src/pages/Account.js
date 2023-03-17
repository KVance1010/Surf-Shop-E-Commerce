import { useQuery, useMutation } from '@apollo/client'
import React from 'react'
import Auth from '../utils/auth'
import {Link} from 'react-router-dom'

const Account = () => {
    if(!Auth.loggedIn()){
        window.location.assign('/login')
    }

    const logout = () => {
        Auth.logout()
        window.location.assign('/')
    }

    return (
        <>
            <Link onClick={logout}>
                Logout 
            </Link>
            <br/>
            <br/>
            <Link to={'/order-history'}>
                Order History
            </Link>
            <Link></Link>
        </>
    )
}

export default Account

