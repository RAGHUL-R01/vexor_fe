import React, { useEffect, useState } from 'react';
import './Styles/Ticket_selecting_page.scss';
import NavBar from '../Layout/NavBar';
import { DatePicker } from 'antd';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useSelector, useDispatch } from 'react-redux';
import FavoriteSharpIcon from '@mui/icons-material/FavoriteSharp';
import { useNavigate } from 'react-router-dom';
import { AddTicketDetailsToStore } from "../Redux/Action";

export default function Ticket_selecting_page() {
  let navigate = useNavigate();
  let dispatch = useDispatch();
  const Store_ = useSelector(store => store.Reducer[0]);
  const Store_type = useSelector(store => store.Reducer[0].Details.Type);

  useEffect(() => {
    if (!Store_.Movie_name) {
      navigate('/main');
    }
  }, [Store_.Movie_name,navigate]);
  const [Prev_war, set_Prev_war] = useState(null);
  const [Reducer_obj, setReducer_obj] = useState({
    Language: null,
    Picture: null,
    Date: null,
    Time: null,
    Theater: null
  })
  const Theaters = ["INOX: Coimbatore", "Kaveri Theater", "Brooks: Coimbatore", "INOX:Avinasi road", "DOLBY Atmos: Thulasi"]
  const onChange = (date, dateString) => {
    let ds = dateString.split("/")
    console.log(dateString)
    if (ds[0] !== undefined && ds[1] !== undefined) {
      let a = Date().split(" ")
      if (ds[0] < a[2] || ds[1] !== a[1]) set_Prev_war(true)
      else {
        setReducer_obj((state) => ({
          ...state,
          Date: dateString
        }))
      }
    };
  }
  const Next_page = () => {
    navigate('/Ticket_Booking')
  }
  const Lang_change = (e) => {
    setReducer_obj((state) => ({
      ...state,
      Language: e.target.value
    }));
    Dispatcher();
  }
  const Time_theater_change = (Data1, Data2) => {
    setReducer_obj((state) => ({
      ...state,
      Time: Data1,
      Theater: Data2
    }))
    Dispatcher();
  }
  const Picture_change = (e) => {

    setReducer_obj((state) => ({
      ...state,
      Picture: e.target.value
    }))
    Dispatcher();
  }
  const Dispatcher = () => {
    if (Reducer_obj.Date && Reducer_obj.Language && Reducer_obj.Picture && Reducer_obj.Time && Reducer_obj.Theater) {
      console.log("In Dispatcher")
      console.log(Reducer_obj)
      dispatch(AddTicketDetailsToStore(Reducer_obj));
      navigate("/Ticket_Booking");
    }
    else {
      console.log("Not yet d")
    }
  }
  return (
    <div>
      <NavBar />
      <div className={Prev_war ? 'Warning_not_TSP' : 'disP_non'}></div>
      <div className={Prev_war ? 'war_82636' : 'disP_non'}>
        <div>Please Select a valid date. Previous date shouldn't be selected.</div>
        <button className='btn btn-warning' onClick={() => set_Prev_war(false)}>OK</button>
      </div>
      <div className='Movie_title6355'>
        <div className='title665698'>{Store_.Movie_name}</div>
        {Store_type?.map(elements => {
          return <div style={{ display: "inline" }}>
            <span className='jorn6454'>{elements}</span>
          </div>
        })}
      </div>

      <div className='picker53797'>
        <div>
          <DatePicker onChange={onChange} format="DD/MMM/YYYY" style={{ height: "56px" }} />
        </div>
        <div className='tghy7'>
          <div>
            <Box sx={{ maxWidth: 120 }}>
              <FormControl sx={{ m: 1, minWidth: 120, margin: 0, fontSize: "10px", backgroundColor: "white" }} >
                <InputLabel id="demo-simple-select-label" sx={{ fontSize: "15px" }}>Language</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Language"
                  variant="standard"
                  sx={{ height: 40 }} value={Reducer_obj.Language} onChange={Lang_change}>
                  <MenuItem value="English">English</MenuItem>
                  <MenuItem value="Tamil">Tamil  </MenuItem>
                  <MenuItem value="Hindi">Hindi  </MenuItem>
                  <MenuItem value="Telugu">Telugu </MenuItem>
                </Select>
              </FormControl>
            </Box>
          </div>
          <div>
            <Box sx={{ maxWidth: 140, maxHeight: 50 }}>
              <FormControl sx={{ m: 1, minWidth: 100, margin: 0, backgroundColor: "white" }} >
                <InputLabel id="demo-simple-select-label" sx={{ fontSize: "15px" }}>Picture</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Age"
                  sx={{ height: 40 }}
                  variant="standard"
                  value={Reducer_obj.Picture}
                  onChange={Picture_change}
                >
                  <MenuItem value="2D">2D </MenuItem>
                  <MenuItem value="3D">3D </MenuItem>
                  <MenuItem value="3D Screen X">3D Screen X</MenuItem>
                  <MenuItem value="4DX IMAX">4DX IMAX </MenuItem>
                  <MenuItem value="3D with DOLBY">3D with DOLBY</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </div>
          <div className='btn btn-primary btn_arrange56' onClick={Next_page}>Show timings</div>
          <div className='btn btn-primary btn_arrange56'>Price Range</div>
        </div></div>
      {Theaters.map(elem => (
        <div >
          <div className='container box826436'>
            <div className='flx' style={{ justifyContent: "flex-start", padding: "20px 0" }}>
              <div style={{ width: "25%" }}>

                <div style={{ padding: "10px 0", color: "black", fontWeight: "600" }}>
                  <FavoriteSharpIcon sx={{ color: "orangered", margin: "0 10px" }} />
                  <span>{elem}</span>
                </div>
                <div className='flx' style={{ justifyContent: "flex-start", margin: "0 0 0 35px" }}>
                  <div style={{ padding: "0 10px", color: "green", fontWeight: "500" }}>M-Ticket</div>
                  <div style={{ padding: "0 30px", color: "orange", fontWeight: "600" }}>Food & Beverages
                  </div>
                </div>
              </div>
              <div className='flx' style={{ alignItems: "center", color: "rgb(24, 209, 28)", padding: "0 10px" }}>
                <button className='box_time_9545' onClick={() => Time_theater_change("02:20 PM", elem)}>
                  <div>02:20 PM</div>
                  <div style={{ fontSize: "10px" }}>INSIGNIA</div>
                </button>
                <div className='box_time_9545' onClick={() => Time_theater_change({ time: "04:25 PM", theater: `${elem}` })}>
                  <div>04:25 PM</div>
                  <div style={{ fontSize: "10px" }}>INSIGNIA</div>
                </div>
                <div className='box_time_9545' onClick={() => Time_theater_change({ time: "06:10 PM", theater: `${elem}` })}>
                  <div>06:10 PM</div>
                  <div style={{ fontSize: "10px" }}>INSIGNIA</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      <div></div>
    </div>
  )
}
