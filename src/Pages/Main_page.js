import React,{useState} from 'react';
import '../Pages/Styles/Mainpage.scss';
import NavBar from '../Layout/NavBar';
import Movie_cards from '../Layout/Movie_cards';
import Quote from '../Layout/Quote';
import Slider from '../Layout/Slider';
import Card_page from './Card_page';
import Content_card from '../Layout/Content_card';
import Footer from '../Layout/Footer';
export default function Main_page() {
  // const [first, setfirst] = useState("menu__")
  // console.log(first)
  return (<div >
    <div><NavBar/></div>
    <div><Slider /></div>
    <div style={{ backgroundColor: "white" }}><Movie_cards /></div>
    <div style={{backgroundColor:"white"}}><Quote/></div>
    <div><Content_card /></div>
    <div><Footer/></div>
 
 
  </div>
  )
}
