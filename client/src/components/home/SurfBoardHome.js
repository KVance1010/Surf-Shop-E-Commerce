import React from 'react';
import '../../css/home/SurfBoardHome.css';
import SurfBoards from '../../images/surfboards.jpg';

const SurfBoardMain = () => {
  return (
    <div className="surfBoardAdContainer">
				<img className="surfBoardAd" src={SurfBoards} alt= 'old waterlogged surfboards lined up in the background'/>
				<div className="surfBoardOverLay">
					<p className="surfBoardAdTitle">Time for a new board</p>
					<p className="surfBoardAdButton">Explore</p>
				</div>
			</div>
  )
}

export default SurfBoardMain