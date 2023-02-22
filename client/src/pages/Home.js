import React from 'react';
import { useQuery } from '@apollo/client';
import { Link } from 'react-router-dom'

import { QUERY_USERS } from '../utils/queries';

const Home = () => {
const { loading, data } = useQuery(QUERY_USERS)
const users = data?.users || []

return (
    <div>
       Home Page
       <Link to={'/admin'}>
            Link to Admin page
       </Link>
    </div>
)
}
export default Home