import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import '../../css/CarouselHome.css';

const CarouselPage = ({ categories}) => {
	const responsive = {
		desktop: {
			breakpoint: { max: 4000, min: 1024 },
			items: 1,
		},
		mobile: {
			breakpoint: { max: 768, min: 0 },
			items: 1,
		},
	};
	return (
	
				<div className="carousel">
					<div className="categoryGender">{categories.name}</div>
					<Carousel
						arrows={true}
						responsive={responsive}
						infinite={true}
						swipeable={true}
						draggable={true}
						keyBoardControl={true}
						removeArrowOnDeviceType={['tablet', 'mobile']}
					>
						{categories.map((item) => (
							<div key={item.name} className="containerWhiteSpace">
								<div >
									<img src={item.image} alt=""/>
									<div className="categoryName">{item.name}</div>
								</div>
							</div>
						))}
					</Carousel>
				</div>
	);
};

export default CarouselPage;
