import React, { useState, useEffect } from 'react'

function Summary({ totalAmount, totalPrice }) {
  const [deliveryOption, setDeliveryOption] = useState(0)
  const [payment, setPayment] = useState(totalPrice + deliveryOption)

  useEffect(() => {
    // guard 無商品時
    if (!totalPrice) setDeliveryOption(0)

    // 每次更新時 更新payment
    setPayment(+deliveryOption + totalPrice)
  }, [deliveryOption, totalPrice])

  return (
    <div className="col-md-4 summary">
      <div>
        <h5>
          <b>Summary</b>
        </h5>
      </div>
      <hr />
      <div className="row">
        <div className="col col-style">ITEMS {totalAmount}</div>
      </div>
      {/*  */}
      <div className="row row-style">
        <div className="col">PRICE</div>
        <div className="col text-right mb-2">&euro; {totalPrice}</div>
        {/*  */}
        <select
          value={deliveryOption}
          onChange={(e) => {
            setDeliveryOption(e.target.value)
          }}
        >
          {/* 第一個值會用state的初始值 */}
          <option value={0} disabled>
            請選擇運送方式
          </option>
          <option value={200}>郵局</option>
          <option value={250}>快遞</option>
          <option value={120}>超商</option>
        </select>

        <div className="col">DELIVERY FEE</div>
        <div className="col text-right mb-2">&euro; {deliveryOption}</div>
      </div>
      {/*  */}
      <div className="row row-style">
        <div className="col">TOTAL PRICE</div>
        <div className="col text-right">&euro; {payment}</div>
      </div>
      <button className="btn">CHECKOUT</button>
    </div>
  )
}

export default Summary
