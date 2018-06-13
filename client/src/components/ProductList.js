import React from 'react';
import Product from './Product';

const ProductList = ({ products, deleteProduct, updateProduct }) => (
  <div className="row">
    { products.map( product => 
      <Product
        key={product.id}
        updateProduct={ updateProduct }
        deleteProduct={ deleteProduct }
        {...product}
      />
    )
  }
  </div>
)

export default ProductList