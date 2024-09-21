import React from 'react'
import './Popular.css'
import data_products from '../../assets/data'
import Item from '../Item/Item'
function Popular() {
  return (
    <div className='popular'> 
      <h1>Popular in women</h1>
      <hr />
      <div className="popular_item">
        {
          data_products.map((item, index) => {
            return(
              <div className="content">
                  <Item key={index} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
              </div>
              
            )})
        }
      </div>
    </div>
  )
}

export default Popular
