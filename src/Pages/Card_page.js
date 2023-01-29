import './Styles/Card_page.scss';
import { useState, useEffect } from 'react';
import StarIcon from '@mui/icons-material/Star';
import ShareIcon from '@mui/icons-material/Share';
import AccountCircleSharpIcon from '@mui/icons-material/AccountCircleSharp';
import StarOutlineSharpIcon from '@mui/icons-material/StarOutlineSharp';
import NavBar from '../Layout/NavBar';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export default function Card_page() {
    let navigate = useNavigate();
    const [scroll, setScroll] = useState(false);
    const [Review, setReview] = useState([]);
    const [count, setcount] = useState(0);
    async function API_CALL() {
        let response = await fetch('https://jsonplaceholder.typicode.com/comments');
        let data_ = await response.json();
        setReview(data_);
    }
    console.log(count)
    const Notif = (e) => {
        e.preventDefault();
        alert("ref")
    }
    useEffect(() => {
        API_CALL();
        if (!Store_.Movie_name) navigate('/main');
        
    }, []);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 500) setScroll(true);
            else setScroll(false);
            console.log(window.scrollY)
        });
    }, []);

    const Store_ = useSelector(store => store.Reducer[0]);
    const Store_details = useSelector(store => store.Reducer[0].Details);

    console.log(Store_)
    console.log(Store_details)
    return (
        <div>
            <div><NavBar /></div>
            <div className='Header_card bg_clr_card_header' >
                <div className='Img_content'>
                    <div><img src={Store_.Image} className="Img_in_Card_page" alt="Movie image" /></div>
                    <div className='cont_page_567'>
                        <div style={{ fontSize: "33px", fontWeight: 700 }}>{Store_.Movie_name}</div>
                        <div><span ><StarIcon sx={{ color: "red", fontSize: 40 }} className='icon_align_carspage' /></span>
                            <span style={{ fontSize: "20px", fontWeight: 600 }}>{Store_.Ratingsandvotes.Rating}</span>
                            <span style={{ fontSize: "15px", fontWeight: 400 }}> {Store_.Ratingsandvotes.Votes}</span>
                        </div>
                        <div className='flx_c667'>
                            <div>
                                <div style={{ fontSize: "18px", fontWeight: 600 }}>Add your rating & review</div>
                                <div style={{ fontSize: "15px", fontWeight: 500, color: "rgb(186, 186, 186)" }}>Your ratings matter</div>
                            </div>
                            <div className='tyu_77'>
                                <button className='btn btn-light'>Rate now</button>
                            </div>
                        </div>
                        <div className='info_card_678'>{Store_.Screen}</div>
                        <div className='info_card_678'>{Store_.Language}</div>
                        <div style={{ fontSize: "18px", fontWeight: "600" }}>
                            <span>{Store_details.Time + "  *  "}</span>
                            <span>{Store_details.Certificate + " * "}</span>
                            <span>{Store_details.Release_date}</span>
                        </div>
                        <div><button className='btn btn-danger px-5 py-2.5' style={{ padding: "10px 0" }} onClick={() => navigate('/Ticket_Selecting')}>Book tickets</button></div>
                    </div>
                </div>

                <div className='share_card_678' >
                    <div><ShareIcon sx={{ fontSize: 40, color: 'white' }} /></div>
                    <div className='share_txt_card'> Share</div>
                </div>
            </div>

            <div className={scroll ? "fix_hdr9365" : "dis_non"}>
                <div>
                    <div style={{ fontSize: "22px", fontWeight: "700" }}>{Store_.Movie_name}</div>
                    <div>
                        <span style={{ fontWeight: "600" }}>{Store_.Ratingsandvotes.Rating} </span>
                        <span style={{ fontSize: "12px" }}>{Store_.Ratingsandvotes.Votes}</span>
                    </div>
                </div>
                <div className='btn btn-primary'>Book tickets</div>
            </div>
            <div className='bg_uio'>
                <section className='Header_card abt_uj ' style={{marginTop:"0px"}}>
                    <div style={{ fontSize: "20px", fontWeight: 700, padding: "10px 0" ,marginTop:"10px"}}>About the movie</div>
                    <div>{Store_details.About}</div>
                </section>
                <section className='Header_card abt_uj' >
                    <div style={{marginTop:"20px",marginBottom:"15px"}}>
                        <span style={{ fontSize: "18px", fontWeight: 700, padding: "20px 0" }}>Top reviews</span>
                    </div>
                    <div style={{display:"flex",overflowX:"scroll",overflowY:"hidden",width:"110%",justifyContent:"flex-start"}}>
                    {Review.map((Elem, index) => {
                        return <div> {index<5 ? <div className='flx_614246_oi' style={{backgroundColor:"#328c4f",marginRight:"15px",borderRadius:"10px",color:"white"}}>
                            <div className='flx_614246_oi Fl8753'>
                                <div className='flx_614246_oi yt644'>
    
                                    <div><AccountCircleSharpIcon sx={{fontSize:"50px"}}/></div>
                                    <div style={{paddingLeft:"5px"}}>
                                        <div style={{fontWeight:"600"}}>{Elem.email}</div>
                                        <div style={{fontSize:"12px"}}>Booked on Vortex</div>
                                    </div>
                                    <div style={{marginLeft:"100px"}}><StarOutlineSharpIcon sx={{verticalAlign:"-4.5px"}}/>{Math.floor(Math.random() * 5) + 5}/10</div>
                                </div>
                                <div>{Elem.body}</div>
                            </div>
                        </div>:null}</div>
                    })}
                    </div>
                </section>
            </div>
        </div>
    )
}
