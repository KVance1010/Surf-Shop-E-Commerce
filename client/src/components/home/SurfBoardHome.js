import React from 'react';
import '../../css/SurfBoardHome.css';
import SurfBoards from '../../images/surfboards.jpg';

const SurfBoardMain = () => {
  return (
    <div className="surfBoardAdContainer">
				<img className="surfBoardAd" src={SurfBoards} alt= 'old waterlogged surfboards lined up in the background'/>
				<div className="surfBoardOverLay">
					<p className="surfBoardAdTitle">A Board for Every Occasion</p>
					<p className="surfBoardAdButton">Explore</p>
				</div>
			</div>
  )
}

export default SurfBoardMain