import React, { Component } from "react";
import style from 'styled-components'
import { Link } from 'react-router-dom'
import { ProductConsumer } from '../context'

export default class Product extends Component {
  render() {
    const { id, title, img, price, inCart } = this.props.product
    console.log(img)
    return (
      <ProductWrapper className='col-9 col-md-6 col-lg-3 mx-auto my-3'>
        <div className="card">
          <div className="img-container p-5">
            <Link to='/detail'>
              <img alt='product' src={img} className='card-img-top'/>
            </Link>
          </div>
        </div>
      </ProductWrapper>
    );
  }
}

const ProductWrapper = style.div`

`
