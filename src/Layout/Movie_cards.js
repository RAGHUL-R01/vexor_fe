import React,{useEffect} from 'react'
import Data from '../Data/Movie_API_data.json';
import './Styles/Movie_card.scss';
import { useDispatch } from "react-redux";
import { AddDataToStore } from '../Redux/Action';
import { useNavigate } from "react-router-dom";

export default function Movie_cards() {
    const dispatch = useDispatch();
    let navigate = useNavigate();
    return (
        <div>
            <div className='card_container'>
                <div className='flx head_cont' style={{ justifyContent: "space-between" }}>
                    <div className='rec_'>Recommended Movies</div>
                    <div className='see_all'>See All</div></div>
                <div className='flx card_'>{Data.map(value => {
                    const Data_val = {
                        "Id": value.Id,
                        "Movie_name": value.Movie_name,
                        "Image": value.Image,
                        "Ratingsandvotes": {
                            "Rating": value.Ratingsandvotes.Rating,
                            "Votes": value.Ratingsandvotes.Votes
                        },
                        "Screen": value.Screen,
                        "Language": value.Language,
                        "Details": {
                            "Time": value.Details.Time,
                            "Type": value.Details.Type,
                            "Certificate": value.Details.Certificate,
                            "Release_date": value.Details.Release_date,
                            "About": value.Details.About
                        }
                    }
                    const Action_dispatching_in_cards = (temp) => {
                        dispatch(AddDataToStore(temp));
                        navigate('/Card_page')
                    }
                    return <div className='flx' onClick={()=>Action_dispatching_in_cards(Data_val)} style={{ flexDirection: "column", paddingRight: "30px", cursor: "pointer" }}>
                        <img src={value.Image} className='card_img' />
                        <div className='flx review_'>{value.Ratingsandvotes.Rating + " " + value.Ratingsandvotes.Votes}</div>
                        <div className='nam_44'>{value.Movie_name}</div>
                        <div className='Cat_44'>{value.Details.Type[0]+" / "+value.Details.Type[1]}</div>
                    </div>
                })}</div>
            </div>
        </div>
    )
}
