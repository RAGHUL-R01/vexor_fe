import React from 'react';
import Logo from '../Assets/Vexor.png';
import './Styles/_User_Menu.scss';
import PersonIcon from '@mui/icons-material/Person';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import PaymentIcon from '@mui/icons-material/Payment';
import SettingsIcon from '@mui/icons-material/Settings';
import Password_change from './Password_change';
import Payment from './Payment';
import Personal_details from './Personal_details';
import { useNavigate } from 'react-router-dom';
export default function User_Menu({ setUPP_state }) {
  let navigate = useNavigate();
  const Func_009 = (Val) => {
    if (Val === "Persdet")
    {
      setUPP_state(<Personal_details />);
     } 
    else if (Val === "PassChange") {
      setUPP_state(<Password_change/>)
    }
    else if (Val === "Paym") {
      setUPP_state(<Payment />)
    }
    else if (Val === "Settings") {
      setUPP_state(<Password_change/>)
    }
    else if (Val === "Home") {
      navigate("/")
    }
  }
  return (
    <div className='flx00098'>
      <div className='logo_alt32'><img src={Logo} alt="Logo" style={{ height: "100px", width: "200px" }} /></div>
      <div className='Cont5565'>
        <button className='indvig66' style={{ paddingRight: "28px" }} name="Persdet" onClick={()=>Func_009("Persdet")}>
          <span className='spn0005'><PersonIcon sx={{ verticalAlign: "-5px" }} /></span>
          <span>Personal details</span>
        </button>
        <button className='indvig66' style={{ paddingRight: "15px" }} name="PassChange" onClick={()=>Func_009("PassChange")}>
          <span className='spn0005'><RestartAltIcon sx={{ verticalAlign: "-5px" }} /></span>
          <span>Password change</span>
        </button>
        <button className='indvig66' style={{ paddingRight: "70px" }} name="Paym" onClick={()=>Func_009("Paym")}>
          <span className='spn0005'><PaymentIcon sx={{ verticalAlign: "-5px" }} /></span>
          <span>Payments</span> </button>
        <button className='indvig66' style={{ paddingRight: "81px" }} name="Settings" onClick={()=>Func_009("Settings")}>
          <span className='spn0005'><SettingsIcon sx={{ verticalAlign: "-5px" }} /></span>
          <span>Settings</span> </button>
        <button className='indvig66' style={{ paddingRight: "95px" }} name="Home" onClick={()=>Func_009("Home")}>
          <span className='spn0005'><SettingsIcon sx={{ verticalAlign: "-5px" }} /></span>
          <span>Home</span> </button>
      </div>
    </div>
  )
}
