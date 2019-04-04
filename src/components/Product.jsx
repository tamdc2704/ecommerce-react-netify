import React, { Component } from "react";
import style from 'styled-components'
import { Link } from 'react-router-dom'
import { ProductConsumer } from '../context'

export default class Product extends Component {
  render() {
    const { id, title, img, price, inCart } = this.props
    
    return (
      <ProductWrapper>
        {this.props.product.title}
      </ProductWrapper>
    );
  }
}

const ProductWrapper = style.div`

`
