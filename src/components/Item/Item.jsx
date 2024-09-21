import React from 'react';
import './Item.css';
import { Link } from 'react-router-dom';

function Item(props) {
  const id = Number(props.id);
  return (
    <div id={props.id} className='item'>
      {/* Usa backticks para interpolar el id correctamente */}
      <Link to={`/product/${id}`}>
        <img onClick={window.scrollTo(0,0)} src={props.image} alt={props.name} />
      </Link>
      <p>{props.name}</p>
      <div className="prices">
        <p className='new'>${props.new_price}</p>
        <p className='old'>${props.old_price}</p>
      </div>
    </div>
  );
}

export default Item;