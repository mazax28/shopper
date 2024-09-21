import React from 'react';
import './Breadcrums.css';
import { Link } from 'react-router-dom';

function Breadcrums(props) {
    const { product } = props;
    
    return (
        <div className='breadcrums'>
            <div className="top">
                <p>
                    <Link to='/'>Home</Link> / 
                    <Link to={`/${product.category}`}>{product.category}</Link> / 
                    {product.name}
                </p>
            </div>
        </div>
    );
}

export default Breadcrums;