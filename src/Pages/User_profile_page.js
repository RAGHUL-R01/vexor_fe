import React, { useState } from 'react';
import './Styles/_User_profile.scss';
import User_Menu from '../Layout/User_Menu';
import Personal_details from '../Layout/Personal_details';
export default function User_profile_page() {
    const [UPP_state, setUPP_state] = useState(<Personal_details/>)

    return (
        <div style={{display:"flex",marginRight:"20px"}}>
            <div className='men88'>
                <User_Menu setUPP_state={setUPP_state} /></div>
            <div className='Post67T'>{UPP_state}</div>
        </div>
    )
}
