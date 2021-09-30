import React from 'react'
import ProductItem from './ProductItem'

function OrderList() {
  return (
    <div className="col-md-8 cart">
      <div className="title">
        <div className="row">
          <div className="col">
            <h4>
              <b>Shopping Cart</b>
            </h4>
          </div>
          <div className="col align-self-center text-right text-muted">
            3 items
          </div>
        </div>
      </div>
      {/*  */}
      <ProductItem />
      {/*  */}
      <div className="back-to-shop">
        <a href="#/">←</a>
        <span className="text-muted">Back to shop</span>
      </div>
    </div>
  )
}

export default OrderList
