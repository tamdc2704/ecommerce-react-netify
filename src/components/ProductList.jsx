import React, { Component } from "react";

import { ProductConsumer } from "../context";
import Product from "./Product";
import Title from "./Title";

export default class ProductsList extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="py-5">
          <div className="container">
            <Title name="our" title="producks" />
            <div className="row">
              <ProductConsumer>
                {store => {
                  return store.products.map(product => (
                    <Product product={product} />
                  ));
                }}
              </ProductConsumer>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
