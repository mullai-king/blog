import React from 'react';

const Card = ({item,index}) => {
  return (
    <div class="col" key={index}>
      <div class="card h-100">
        <img src={item.image} style={{ "height": "250px" }} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">{item.heading}</h5>
          <p class="card-text">{item.subHeading}</p>
          <p class="fw-bolder text-success">{`Read>>`}</p>
        </div>
        <hr />
        <div class="p-1">
          <p>{item.postDate}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;