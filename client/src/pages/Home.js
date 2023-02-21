import React from 'react';
import { useQuery } from '@apollo/client';

import { QUERY_USERS } from '../utils/queries';

const Home = () => {
const { loading, data } = useQuery(QUERY_USERS)
const users = data?.users || []

return (
    <div>
       Home Page
    </div>
)
}
export default Home