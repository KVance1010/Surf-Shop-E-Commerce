import React from 'react';


const Carousel = ({apparel}) => {
    const apparelArr = apparel.categories;
  return (
    <>
    <div>{apparel.name}</div>
    {apparelArr.map(item => (<p>{item.name}</p>))}
    </>

  )
}

export default Carousel;