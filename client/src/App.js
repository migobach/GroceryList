import React, { Component } from 'react';
import ProductForm from './components/ProductForm';
import ProductList from './components/ProductList';

class App extends Component {
  state = { products: [] }

  componentDidMount() {
    fetch('/api/products')
    .then( res => res.json() )
    .then( products => this.setState({ products }) )  
  }

  addProduct = (name, quantity) => {
    const product = { name, quantity }
    fetch('/api/products', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(product)
    }).then( res => res.json() )
      .then( product => {
        const { products } = this.state
        this.setState({ products: [...products, product] })
      })
  }

  updateProduct = (id) => {
    fetch(`/api/products/${id}`, { method: 'PUT' })
    .then( res => res.json() )
    .then( product => {
      const products = this.state.products.map( t => {
        if (t.id === id)
          return {...t, purchase: !t.purchase}
        return t 
      })

      this.setState({ products })
    })
  }

  deleteProduct = (id) => {
    fetch(`/api/products/${id}`, { method: 'DELETE' })
    .then( () => {
      const { products } = this.state
      this.setState({ products: products.filter( t => t.id !== id ) })
    })
  }

  render() {
    console.log(this.state.products)
    return (
      <div className="container">
        <ProductForm addProduct={this.addProduct}/>
        <ProductList
          products={this.state.products}
          deleteProduct={this.deleteProduct}
          updateProduct={this.updateProduct}
        />
      </div>
      
    );
  }
}

export default App;
