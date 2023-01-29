import React, { useState } from 'react'
import './Styles/Menu.scss';
import { useNavigate } from "react-router-dom";
export default function ({ menu_toggle }) {
  let navigate = useNavigate();
  const Navi907 = () => {
    navigate("/User_profile_page")
  }
  return (
    <div >
      <div className=' cont1'>
        <div className='sep2'>
          <div className='m_items_' style={{ margin: "55px 20px", backgroundColor: "red", fontWeight: "600", color: "white" }} onClick={menu_toggle}>Close</div>
          <div className='m_items_' onClick={Navi907}>User Profile</div>
          <div className='m_items_'>Hello world</div>
          <div className='m_items_'>Hello world</div>
          <div className='m_items_'>Hello world</div>
          <div className='m_items_'>Hello world</div>
          <div className='m_items_'>Hello world</div></div>
      </div></div>
  )
}
