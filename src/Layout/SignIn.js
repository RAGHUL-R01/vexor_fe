import React, { useState } from 'react'
import './Styles/SIgnIn.scss';
import TextField from '@mui/material/TextField';
import CloseIcon from '@mui/icons-material/Close'
import GoogleIcon from '@mui/icons-material/Google'
import EmailIcon from '@mui/icons-material/Email'
import { Button, Space } from 'antd';
export default function SignIn({ Sign_in_page}) {
    return (
        <div>
            <div className='glass'></div>
            <div className='pos776'>
                <div className='th7fge7'>
                    <div className='flx_al_7546'>
                        <div style={{ fontSize: "20px", fontWeight: "600" }}>Get Started</div>
                        <div className='Mve_right' onClick={Sign_in_page}><CloseIcon /></div>
                    </div>
                    <div>
                        <div className='cwg88'><GoogleIcon sx={{ verticalAlign: "-6px" }} className="ic_mv361" />Continue with Google</div>
                        <div className='cwg88'><EmailIcon sx={{ verticalAlign: "-6px" }} className="ic_mv36" />Continue with email</div>
                    </div>
                    <div>OR</div>
                    <div>
                        <form>
                            <div style={{ marginTop: "20px" }}><TextField id="outlined-basic" label="User name" variant='outlined' /></div>
                            <div style={{ marginTop: "15px" }}> <TextField id="outlined-password-input" label="Password" type='password' /></div>
                        </form>
                    </div>
                    <Space wrap>
                        <Button className='btn_align998' type='primary' >Submit</Button>
                    </Space>
                    <div style={{ marginTop: "50px", fontSize: "13px" }}>I agree to the Terms & Conditions & Privacy Policy</div>
                </div>
            </div>
        </div>
    )
}
