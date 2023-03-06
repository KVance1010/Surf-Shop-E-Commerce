import React from 'react';
import '../../css/SurfBoardHome.css';
import SurfBoards from '../../images/surfboards.jpg';

const SurfBoardMain = () => {
  return (
    <div className="surfBoardAdContainer">
				<img className="surfBoardAd" src={SurfBoards} alt= 'old waterlogged surfboards lined up in the background'/>
				<div className="surfBoardOverLay">
					<p className="surfBoardAdTitle">It's time for a new board...We got you covered</p>
					<p className="surfBoardAdButton">Explore</p>
				</div>
			</div>
  )
}

export default SurfBoardMain