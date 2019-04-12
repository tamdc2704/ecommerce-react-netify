import React, { Component } from 'react'
import { storeProducts, detailProduct } from './data'
import produce from 'immer'

const ProductContext = React.createContext()

class ProductProvider extends Component {
  state = {
    products: storeProducts,
    detailProduct
  }

  addToCart = () => {
    console.log('add to cart')
  }

  getItem = id => {
    const nextState = produce(draft => {
      const rs = this.state.products.find(e => e.id === parseInt(id))
      draft.detailProduct = rs ? rs : []
    })
    this.setState(nextState)
  }

  handleDetail = () => {
    console.log('handle Detail')
  }

  render() {
    return (
      <ProductContext.Provider value={{
        ...this.state,
        getItem: this.getItem,
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

export default ProductContext
