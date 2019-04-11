import React, { Component } from "react";
import style from 'styled-components'
import { Link } from 'react-router-dom'
import { ProductConsumer } from '../context'

export default class Product extends Component {
  render() {
    const { id, title, img, price, inCart } = this.props.product
    return (
      <ProductWrapper className='col-9 col-md-6 col-lg-3 mx-auto my-3'>
        <div className="card">
          <div className="img-container p-5">
            <Link to='/detail'>
              <img alt='product' src={img} className='card-img-top'/>
            </Link>
            <button
              className="cart-btn"
              disabled={inCart}
            >
              {
                inCart ? <p className="text-capitalize">in cart</p> : <i className="fas fa-cart-plus"/>
              }
            </button>
          </div>
          <div className="card-footer d-flex justify-content-between">
            <p className="align-self-center mb-0">{title}</p>
            <h5 className="text-blue font-italic mb-0">
              <span className="mr-1">$</span>
              {price}
            </h5>
          </div>
        </div>
      </ProductWrapper>
    );
  }
}

const ProductWrapper = style.div`
  .card {
    border-color: transparent;
    transition: all 0.5s linear;
  }
  .card-footer {
    background: transparent;
    border-top: transparent;
    transition: all 0.5s linear;
  }
  &:hover {
    .card {
      border: 0.04rem solid rgba(0, 0, 0, 0.2);
      box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.2);
    }
    .card-footer {
    overflow: hidden;
      background: rgba(247, 247, 247);
    }
  }

  .img-container {
    overflow: hidden;
    position: relative;
  }

  .card-img-top {
    transition: all 0.5s linear
  }

  .img-container:hover .card-img-top {
    transform: scale(1.2)
  }

  .cart-btn {
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 0.2rem 0.4rem;
    background: var(--lightBlue);
    color: var(--mainWhite);
    border: none;
    font-size: 1.4rem;
    border-radius: 0.5rem 0 0 0;
    transform: translate(100%, 100%);
    transition: all 0.5s linear;
  }

  .img-container:hover .cart-btn {
    transform: translate(0,0)
  }

  .cart-btn:hover {
    color: var(--mainBlue);
    cursor: pointer;
  }
`
