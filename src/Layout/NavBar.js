import React, { useState } from 'react'
import './Styles/NavBar.scss';
import Logo from '../Assets/Vexor.png';
import { SearchOutlined } from '@ant-design/icons';
import { Button, Input } from 'antd';
import MenuIcon from '@mui/icons-material/Menu';
import SignIn from './SignIn';
import states from '../Data/States.json';
import Menu from './Menu';

export default function () {
    const [Style_state, set_style_state] = useState(
        { menu: "hide_", glass: "none", sin: "hide_" });
    const menu_toggle = (e) => {
        e.preventDefault();
        if (Style_state.menu === "hide_") {
            set_style_state((state) => ({
                ...state,
                menu: "Menu_config_",
                glass:"glass"
            }));
        }
        if (Style_state.menu === "Menu_config_") {
            set_style_state((state) => ({
                ...state,
                menu: "hide_",
                glass:"none"
            }));
        }
    }
    const Sign_in_page = (e) => { 
        e.preventDefault();
        if (Style_state.sin === "hide_") {
            set_style_state((state) => ({
                ...state,
                sin:"show"
            }));
        }
        if (Style_state.sin === "show") {
            set_style_state((state) => ({
                ...state,
                sin:"hide_"
            }));
        }
    }
    return (<div>
        <div className='nav_bg'>
            <div className='nav'>
                <div className='str_1'>
                    <div className='cont_1'>
                        <div className='Ind_1'>
                            <div><img src={Logo} alt='Logo' className='Logo' /></div>
                            <div style={{ minWidth: "60%", maxWidth: '90%', borderRadius: "55px" }}>
                                <Input.Group className='flx'>
                                    <Input className='input_b' placeholder="Search for Movies, Events, Plays, Sports and Activities" />
                                    <Button className='search_btn' title='Search'>
                                        <SearchOutlined className='search_icon' />
                                    </Button>
                                </Input.Group>

                            </div>
                        </div>
                        <div className='Ind_2'>
                            <div style={{padding:"0px 10px"}}>
                                {states.map(val => {
                                    return <select className='drop_'>
                                        <option className='opt_'>{val.States[0]}</option>
                                        <option className='opt_'>{val.States[1]}</option>
                                        <option className='opt_'>{val.States[2]}</option>
                                        <option className='opt_'>{val.States[3]}</option>
                                        <option className='opt_'>{val.States[4]}</option>
                                    </select>
                                })}
                            </div>
                            <div style={{ padding: "0px 10px" }}>
                                <button className='sign_in' title='Sign in' onClick={Sign_in_page}>Sign in</button></div>
                            <div className='menu_' title='Menu' style={{ padding: "0px 10px" }} onClick={menu_toggle}>
                                <MenuIcon color="white" sx={{fontSize:"30px"}}/></div>
                        </div>
                    </div>
                </div>
                <div className='str_2'>
                    <div className='flx'>
                        <div className='Ind_1 fs_'>
                            <div className='fs_h'>Movie</div>
                            <div className='fs_h'>Streams<div className='pow'>New</div></div>
                            <div className='fs_h'>Plays</div>
                            <div className='fs_h'>News</div>
                            <div className='fs_h'>Sports</div>
                            <div className='fs_h'>Bus</div>
                        </div>
                        <div className='Ind_1 fs_2'>
                            <div className='fs_h'>List Your shows</div>
                            <div className='fs_h'>Offers</div>
                            <div className='fs_h'>Gift Cards</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={Style_state.glass} onClick={menu_toggle}></div>
            <div className={Style_state.menu}><Menu menu_toggle={menu_toggle} /></div> 
            <div className={Style_state.sin}><SignIn Sign_in_page={Sign_in_page} /></div> 
        </div>
    </div>
    )
}

// correct dropdown with spacing