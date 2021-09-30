import React from 'react'

function Summary() {
  return (
    <div className="col-md-4 summary">
      <div>
        <h5>
          <b>Summary</b>
        </h5>
      </div>
      <hr />
      <div className="row">
        <div className="col col-style">ITEMS 3</div>
      </div>
      <div className="row row-style">
        <div className="col">TOTAL PRICE</div>
        <div className="col text-right">&euro; 137.00</div>
      </div>
      <button className="btn">CHECKOUT</button>
    </div>
  )
}

export default Summary
