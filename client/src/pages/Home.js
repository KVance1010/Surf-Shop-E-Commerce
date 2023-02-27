import React from 'react';
import { useQuery } from '@apollo/client';
import { Link } from 'react-router-dom';
import heroVideo from '../images/ezgif.com-video-to-gif.mp4'
import { QUERY_USERS } from '../utils/queries';
import '../css/Home.css';

const Home = () => {
const { loading, data } = useQuery(QUERY_USERS);
const users = data?.users || [];

return (
    <div className='heroContainer'>
       <video  loop autoPlay muted src= {heroVideo}/>
       <div className='heroContent'>
        <p className='heroTitle'>THE SURF IS CALLING</p>
        <p className='heroAction'>TIME TO ANSWER...</p>
        <button className='heroButton'><Link to= 'apperal'>Shop</Link></button>
       </div>
    </div>
)
}
export default Home