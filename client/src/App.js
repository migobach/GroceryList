import React, { Component } from 'react';
import ProductForm from './components/ProductForm';
import ProductList from './components/ProductList';

class App extends Component {
  state = { products: [] }

  componentDidMount() {
    // fill in for when the database gets the information
  }

  addProduct() {
    //add product to list
  }

  updateProduct() {
    //update the item, whether purchased or not
  }

  deleteItem() {
    //delete the item from the list
  }

  render() {
    return (
      <div className="container">
        <ProductForm addProduct={this.addProduct}/>
      </div>
      
    );
  }
}

export default App;
