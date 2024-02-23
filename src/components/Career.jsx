import React from 'react';
import Card from './Card';

const Career = ({blogPostData}) => {
  const filterData =blogPostData.filter((item)=>item.category === "Career")

  return (
    <div class="container">
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 mt-4 mb-4 g-4">
        {
          filterData.map((item, index) => {
            return (
              <>
                <Card index={index} item={item}/>
              </>
            )
          })
        }
      </div>
    </div >
  );
};
export default Career;