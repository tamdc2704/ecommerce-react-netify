import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {CartButton} from '../styles/Button'
import {ProductConsumer} from '../context'

export default class Detail extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => {
          const { id, name, title, company, img, price, info, inCart } = value.detailProduct
          return (
            <div className="container">
              {/* title */}
              <div className="row">
                <div className="col-10 mx-auto col-md-6 text-blue my-5 text-center text-slanted">
                  <h1>{title}</h1>
                </div>
              </div>
              {/* end title */}
              <div className="row">
                <div className="row col-10 col-md-6 mx-auto my-3">
                  <img src={img} alt="img product" className="img-fluit"/>
                </div>
                <div className="row col-10 col-md-6 mx-auto my-3 text-capitalize flex-column">
                  <h2>model: {title}</h2>
                  <h4 className="text-blue">
                    made by: <span>{company}</span>
                  </h4>
                  <h4 className="text-blue">
                    <strong>price: <span>$</span>{price}</strong> 
                  </h4>
                  <p className="font-weight-bold mt-3 mb-0">
                    description
                  </p>
                  <p className="text-muted text-lowercase">
                    {info}
                  </p>
                  <div className="d-flex">
                    <Link to="/">
                      <CartButton>
                        back ro products
                      </CartButton>
                    </Link>
                    <CartButton>
                      {inCart? "in cart" : 'add to cart'}
                    </CartButton>
                  </div>
                  
                </div>
              </div>
            </div>
          )
        }}
      </ProductConsumer>
    )
  }
}
