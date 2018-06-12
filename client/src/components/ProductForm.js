import React from 'react';

class ProductForm extends React.Component {
  state = { productName: '', productQty: '' }

  manageChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  render() {
    const { productName, productQty } = this.state
    return (
      <form>
        <input
          name="productName"
          placeholder="Add a Product"
          required
          value={productName}
          onChange={this.manageChange}
        />
        <input 
          name="productQty"
          placeholder="How many?"
          required
          value={productQty}
          onChange={this.manageChange}
        />
        <button className="btn">Submit</button>
      </form>
    )
  }
}
 
export default ProductForm;