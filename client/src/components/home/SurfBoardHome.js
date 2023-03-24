import React from 'react';
import '../../css/home/SurfBoardHome.css';
import {Link} from 'react-router-dom';
import SurfBoards from '../../images/surfboards.jpg';

const SurfBoardMain = () => {
  return (
    <div className="surfBoardAdContainer">
		<img className="surfBoardAd" src={SurfBoards} alt= 'old waterlogged surfboards lined up in the background'/>
		<div className="surfBoardOverLay">
			<p className="surfBoardAdTitle">Time for a new board</p>
			<Link to='/surfboards/surfboards' className="surfBoardAdButton">Explore</Link>
		</div>
	</div>
  )
}

export default SurfBoardMain