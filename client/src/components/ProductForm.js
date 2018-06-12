import React from 'react';

class ProductForm extends React.Component {
  state = { name: '', quantity: '' }

  manageChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  manageSubmit = (e) => {
    e.preventDefault()
    const { name, quantity } = this.state
    this.props.addProduct(name, quantity )
    this.setState({ name: '', quantity: '' })
  }

  render() {
    const { name, quantity } = this.state
    return (
      <form onSubmit={this.manageSubmit}>
        <input
          name="name"
          placeholder="Add a Product"
          required
          value={name}
          onChange={this.manageChange}
        />
        <input 
          name="quantity"
          placeholder="How many?"
          required
          value={quantity}
          onChange={this.manageChange}
        />
        <button className="btn">Submit</button>
      </form>
    )
  }
}
 
export default ProductForm;