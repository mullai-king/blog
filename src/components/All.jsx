import React from 'react';
import Card from './Card';

const All = ({ blogPostData }) => {
  const filterData = blogPostData;
  return (
    <div class="container">
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-3 mt-4 mb-4 g-4">
        {
          filterData.map((item, index) => {
            return (
              <>
                <Card item={item} index={index}/>
              </>
            )
          })
        }
      </div>
    </div >
  );
};

export default All;