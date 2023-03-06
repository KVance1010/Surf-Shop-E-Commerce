import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const CarouselComponent = (props) => {
  const items = props.items;
  const responsive = {
		desktop: {
			breakpoint: { max: 4000, min: 1024 },
			items: items,
		},
		mobile: {
			breakpoint: { max: 768, min: 0 },
			items: items,
		},
	};
  let classes = '' + props.className;
  return (
    <Carousel
    arrows={true}
    responsive={responsive}
    infinite={true}
    swipeable={true}
    draggable={true}
    keyBoardControl={true}
    // containerClass="container"
    removeArrowOnDeviceType={['tablet', 'mobile']}
  >
    {props.categories.map((item) => (
      <div key={item.name} className={classes}>
        <div >
          {props.accessories?
          (<img src={item.image1} />):
          (<img src={item.image} />)}
          
          <h4 className="categoryName">{item.name}</h4>
        </div>
      </div>
    ))}
  </Carousel>
  )
}

export default CarouselComponent