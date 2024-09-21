import React from 'react'
import './RelatedProducts.css'
import data_product from '../../assets/data'
import Item from '../Item/Item'
function RelatedProducts() {
  return (
    <div className='related'>
        <h1>Related Products</h1>
        <div className="related_products">
            {
                data_product.map((product) => {
                    return(
                    <div className="content">
                        <Item key={product.id} id={product.id} name={product.name} new_price={product.new_price} old_price={product.old_price} image={product.image } />
                    </div>
                    )
                })

            }
        </div>
      
    </div>
  )
}

export default RelatedProducts
