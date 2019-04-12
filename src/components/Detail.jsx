import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {CartButton} from '../styles/Button'
import ProductContext from '../context'

export default class Detail extends Component {
  componentDidMount() {
    this.context.getItem(this.props.match.params.id)
  }
  render() {
    const { detailProduct } = this.context
    if (!detailProduct) return <div>Loading...</div>
    if (detailProduct.length === 0) return <div>No data found...</div>
    const { title, company, img, price, info, inCart } = detailProduct

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
            <img src={`${window.location.origin}/${img}`} alt="img product" className="img-fluit"/>
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
            <p className="text-muted">
              {info}
            </p>
            <div className="d-flex">
              <Link to="/">
                <CartButton>
                  back to products
                </CartButton>
              </Link>
              <CartButton cart>
                {inCart? "in cart" : 'add to cart'}
              </CartButton>
            </div>
            
          </div>
        </div>
      </div>
    )
  }
}

Detail.contextType = ProductContext