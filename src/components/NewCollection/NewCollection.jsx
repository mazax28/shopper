import React from 'react';
import './NewCollection.css';
import new_collections from '../../assets/new_collections';	
import Item from '../Item/Item';

function NewCollection() {
  return (
    <div className='new_collection'>
      <h1>New Collections</h1>
      <hr />
      <div className="collections">
        {
          new_collections.map((product) => (
            <div key={product.id} className="content">
              <Item 
                id={product.id} 
                name={product.name} 
                new_price={product.new_price} 
                old_price={product.old_price} 
                image={product.image} 
              />
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default NewCollection;