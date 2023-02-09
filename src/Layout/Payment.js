import React from 'react';
import { useState } from 'react';
import './Styles/_Payment.scss'

export default function Payment() {
  const [Bank_card, Set_Bank_card] = useState({
    bank_name: "", card_num: "", valid_end: "", card_type: "", card_prt1: "****", card_prt2: "****"
  });
  const handlechange = (e) => {
    e.preventDefault();
    Set_Bank_card((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }
  return (
    <div className='P_00997'>
      <div className='flx '>
        <div className='crd'>
          <div className='Bank_name_6yh'>{Bank_card.bank_name} Bank</div>
          <div>CHIP</div>
          <div>
            {Bank_card.card_num / 100000000 > 1000 ? <span>{Math.trunc(Bank_card.card_num / 100000000)}</span> : "****"}
            <span> **** </span>
            <span> **** </span>
            {Bank_card.card_num / 100000000000 > 1 ? <span>{Bank_card.card_num % 10000}</span> : "****"}

          </div>
          <div>{Bank_card.valid_end}</div>
          <div>{Bank_card.card_type}</div>
        </div>
      </div>
      <div className='flx' style={{ flexDirection: "column", alignItems: "center" }}>
        <div>
          <label>Bank Name</label>
          <input type="text" name="bank_name" value={Bank_card.bank_name} onChange={handlechange}></input></div>

        <div>
          <label>Card Number</label>
          <input type="number" name="card_num" value={Bank_card.card_num} onChange={handlechange}></input>
        </div>
        <div>
          <label>Validity end date</label>
          <input type="month" name="valid_end" value={Bank_card.valid_end} onChange={handlechange}></input></div>
        <div>
          <label>Card Type</label>
          <select name="card_type" value={Bank_card.card_type} onChange={handlechange}>
            <option>VISA</option>
            <option>MASTERCARD</option>
            <option>OTHER</option>
          </select></div>
      </div>
    </div>
  )
}
