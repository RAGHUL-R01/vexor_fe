import './Styles/Ticket_booking.scss';
import PhoneIcon from '@mui/icons-material/Phone';
import QR from '../Services/QR_generator';
import { CloseOutlined } from '@ant-design/icons';
import Pdf from "react-to-pdf";
import React, {useEffect} from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const ref = React.createRef();
export const BookingID = () => {
    var result = '';
    var characters = 'ABCDEFGHJKLMNOPQRSTUVWXYZ0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < 7; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}
export default function Ticket_booking() {
    let navigate = useNavigate();
    const Booking_ID = BookingID();
    const Store_ = useSelector(store => store.Reducer[0]);
    const Store_details = useSelector(store => store.Reducer_Tic[0]);
    useEffect(() => {
        if (!Store_.Movie_name) navigate('/main');
      }, [Store_.Movie_name,navigate]);
    return (
        <div >
            <div ref={ref} className='container-fluid box bg_align45746'>
                <div className='ticket_container'>
                    <div className='Movie_details_2920'>
                        <div style={{ paddingRight: "20px" }}><img src={Store_.Image} alt="Movie" style={{height:"160px"}}/></div>
                        <div>
                            <div className='topic_3267'>{Store_.Movie_name +" ("+Store_.Details.Certificate+")"}</div>
                            <div style={{ padding: "5px 0",fontSize:"13px",fontWeight:"500" }}>
                                <div style={{padding:"5px 0"}}>{ Store_details.Language+", "+Store_details.Picture}</div>
                                <div style={{padding:"5px 0"}}>{ Store_details.Date+" | "+ Store_details.Timer}</div>
                                <div style={{padding:"5px 0"}}>{ Store_details.Theater}</div>
                                
                            </div>
                        </div>
                    </div>
                    <div className='mid_circ' style={{ display: "flex", justifyContent: "space-between" }}>
                        <div className='circ'></div><div className='circ circ2'></div></div>
                    <div className='dott_line'></div>
                    <div className='Movie_details_2920' style={{ margin: "15px 15px 0 15px", padding: "10px", backgroundColor: "#efefef", borderRadius: "15px" }}>
                        <div > <QR Value={Store_.Movie_name+"_"+Booking_ID+"_"+Store_details.Date+"_"+Store_details.Timer} /></div>
                        <div style={{ textAlign: "center", width: "100%",fontWeight:"500" }}>
                            <div style={{fontSize:"14px",paddingBottom:"5px"}}>1 Ticket(s)</div>
                            <div style={{fontSize:"15px"}}>SCREEN 1</div>
                            <div>Dress C1 - F7</div>
                            <div>
                                <span>Booking ID: </span>
                                <span style={{ fontWeight: "700" }}> { Booking_ID}</span></div>
                            <div style={{ fontSize: "12px", paddingTop: "10px" }}>Tap to see more{BookingID}</div>
                        </div>
                    </div>
                    <div style={{ padding: "20px", textAlign: "center" }}>A Confirmation is sent on e-mail/SMS/WhatsApp within 15 minutes of booking.</div>
                    <div className="box" style={{ justifyContent: "space-around", marginTop: "0" }}>
                        <div className='box' style={{ flexDirection: "column", marginTop: "0" }}>
                            <CloseOutlined style={{ fontSize: "30px", justifyContent: "center" }} />
                            <div>Cancel booking</div></div>
                        <div className='box' style={{ flexDirection: "column", marginTop: "0" }}>
                            <PhoneIcon sx={{ fontSize: "30px", justifyContent: "center" }} />
                            <div>Contact support</div></div>
                    </div>
                    <div className='end_amount_5678'>
                        <div>Total Amount</div>
                        <div>Rs. 150.00</div>
                    </div>
                </div>
            </div>
            <div className='flx4544'>
                <Pdf targetRef={ref} x={-150} y={30} scale={5} filename={Store_.Movie_name+"_"+Booking_ID+"_"+Store_details.Date+"_"+Store_details.Timer} style={{ display: "flex" }}>
                    {({ toPdf }) => <button onClick={toPdf} className="btn btn-primary">Download Ticket</button>}
                </Pdf>
            </div>
        </div>)
}
