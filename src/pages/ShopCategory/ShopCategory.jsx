import React from 'react'
import './ShopCategory.css'
import {useContext} from 'react'
import {ShopContext} from '../../context/ShopContext'
import Item from '../../components/Item/Item'

function ShopCategory(props) {
  const {all_products} = useContext(ShopContext)
  return (
    <div className='shop_category'>
      <img src={props.banner} alt="" />
      <div className="shop_category_sort">
        <div className="sort">
            <select name="" id="">
              <option value="default">Default</option>
              <option value="price_low">Price: Low to High</option>
              <option value="price_high">Price: High to Low</option>
            </select>
            <div className="showing">
              <p><span>Showing 1-12</span> out of 36 products</p>
            </div>
        </div>

       
        <div className="show_category_sort">
          {
            all_products.map((product) => {
              if(product.category === props.category){
                return(
                  <Item key={product.id} id={product.id} image={product.image} name={product.name} new_price={product.new_price} old_price={product.old_price} />
                )
              }
              else{
                return null
              }
            })
          }
        </div>
      </div>
      
    </div>
  )
}

export default ShopCategory
