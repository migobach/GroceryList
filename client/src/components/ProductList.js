import React from 'react';
import Product from './Product';

const ProductList = ({ products }) => (
  <div className="row">
    { products.map( product => {
      return <Product
        key={product.id}
        // updateProduct={updateProduct}
        // deleteProduct={deleteProduct}
        {...product}
      />
    })
  }
  </div>
)

export default ProductList