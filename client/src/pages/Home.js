import React from 'react';
import { useQuery } from '@apollo/client';
import { Link } from 'react-router-dom';
import heroVideo from '../images/ezgif.com-video-to-gif.mp4'
import { QUERY_USERS } from '../utils/queries';

const Home = () => {
const { loading, data } = useQuery(QUERY_USERS);
const users = data?.users || [];

return (
    <div className='hero_container'>
       <video loop autoPlay muted src= {heroVideo}/>
    </div>
)
}
export default Home