import React from 'react';
import "./Styles/_Footer.scss";

export default function Footer() {
    return (
        <div className='cont_footer_09'>
            <div className='box76_'>
                <div style={{ padding: "5px 0" }}>Vortex has been created and manintained by R194.</div>
                <div style={{ padding: "5px 0" }}>We respect your privacy, so we are not collectiong any data from you..!</div>
                <div style={{ padding: "5px 0" }}><a href='mailto:zeroexpdevs@gmail.com' className='Thghjm'><u>If you have any queries please let us know here</u></a></div>
            </div>
            <div>
                <div>
                    <div style={{ padding: "10px 0",fontSize:"18px",fontWeight:"600" }}>Some of our other products</div>
                    <li><a style={{textDecoration:"none",color:"white"}} href='https://moonkartz.netlify.app/'><u>Moonkartz</u></a></li>
                    <li><a style={{textDecoration:"none",color:"white"}} href='https://r-redux.netlify.app/'><u>Redux- an introduction</u></a></li>
                    <li><a style={{textDecoration:"none",color:"white"}} href='https://r-redux.netlify.app/'><u>MoonFind</u></a></li>
                </div>
            </div>
        </div>
    )
}
