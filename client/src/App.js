import React, { Component } from 'react';
import ProductForm from './components/ProductForm';
import ProductList from './components/ProductList';
// import Product from './components/Product'; 

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

  updateProduct() {
    //update the item, whether purchased or not
  }

  deleteItem() {
    //delete the item from the list
  }

  render() {
    console.log(this.state.products)
    return (
      <div className="container">
        <ProductForm addProduct={this.addProduct}/>
        <ProductList
          products={this.state.products}
        />
      </div>
      
    );
  }
}

export default App;
