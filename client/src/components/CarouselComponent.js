import React from 'react';
import Carousel from 'react-multi-carousel';
import {Link} from 'react-router-dom';
import 'react-multi-carousel/lib/styles.css';

const CarouselComponent = (props) => {
  const items = props.items;
  const classes = '' + props.className;
  let type;
  if (props.type.indexOf(' ') > -1) {
    let cat = props.type.substring(props.type.indexOf(' ') +1).toLowerCase();
    let sex = props.type.substring(0, props.type.indexOf(' ')).toLowerCase();
    type = `${cat}/${sex}`;
  }else{
    type = `${props.type}/${props.type}`;
  }
  const responsive = {
		desktop: {
			breakpoint: { max: 4000, min: 1024 },
			items: items[0],
		},
		mobile: {
			breakpoint: { max: 1100, min: 0 },
			items: items[1],
		},
	};
  
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
        <Link to={`/${type}/${item.name.toLowerCase()}`}>
          {props.accessories?
          (<img src={item.image1} />):
          (<img src={item.image} />)}
          <h4>{item.name}</h4>
        </Link>
      </div>
    ))}
  </Carousel>
  )
}

export default CarouselComponent