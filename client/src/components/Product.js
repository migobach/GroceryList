import React from 'react';

const styles = {
  complete: {
    textDecoration: 'line-through', 
    color: 'grey',
  },
  pointer: { cursor: 'pointer' },
}

const Product = ({
  id, 
  productName,
  quantity,
  category,
  purchase,
  updateProduct,
  deleteProduct,
}) => (
  <div className="col s12">
    <div className="col s8">
      <div 
        style ={ purchase ? styles.complete : {} }
        className="center"
      >
      {productName}
    </div>
    </div>
      <div className="col s2">
        <input 
          id={`item=${id}`}
          type="checkbox"
          defaultChecked={purchase}
          onClick={() => updateProduct(id)}
        />
        <label htmlFor={`item-${id}`}>Purchased?</label>
      </div>
      <div
        className="col s2"
        style={styles.pointer}
        onClick={() => deleteProduct(id)}
      >
      X
      </div>
  </div>
)

export default Product;
