import React, { Component } from 'react'
import { storeProducts, detailProduct } from './data'
const ProductContext = React.createContext()

class ProductProvider extends Component {
  state = {
    products: storeProducts,
    detailProduct
  }

  addToCart = () => {
    console.log('add to cart')
  }

  handleDetail = () => {
    console.log('handle Detail')
  }

  render() {
    return (
      <ProductContext.Provider value={{
        ...this.state,
        addToCart: this.addToCart,
        handleDetail: this.handleDetail
      }}>
        {this.props.children}
      </ProductContext.Provider>
    )
  }
}

const ProductConsumer = ProductContext.Consumer

export {
  ProductProvider,
  ProductConsumer
}
