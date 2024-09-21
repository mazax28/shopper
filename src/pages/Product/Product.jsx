import React from 'react';
import './Product.css';
import { useContext } from 'react';
import { ShopContext } from '../../context/ShopContext';
import { useParams } from 'react-router-dom';
import Breadcrums from '../../components/Breadcrums/Breadcrums';
import ProductDisplay from '../../components/ProductDisplay/ProductDisplay';
import RelatedProducts from '../../components/RelatedProducts/RelatedProducts';

function Product() {
  const { all_products } = useContext(ShopContext);
  const { id } = useParams();
  
  // Busca el producto por ID, asegurándote de comparar correctamente
  const product = all_products.find((product) => product.id === Number(id));

  // Verifica si el producto existe
  if (!product) {
    return <div>Producto no encontrado</div>; // Mensaje si no se encuentra el producto
  }

  return (
    <div className='product'>
      <Breadcrums product={product} />
      <ProductDisplay product={product} />
      <RelatedProducts/>
    </div>
  );
}

export default Product;