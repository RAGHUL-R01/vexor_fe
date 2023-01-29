import React, { useState } from 'react'
import './Styles/_Pass_change.scss';

export default function Password_change() {
    const [PC_state, setPC_state] = useState({
        Old: "text", New: "text", Confirm: "text",
        isLoading: false, Status: "",Old_val:"",New_val:"",Confirm_val:""
    })
    //Setting values to states
    const HandleChange = (e) => {
        setPC_state(State => ({
            ...State,
            [e.target.name]: e.target.value
        }))
    }
    //Modifying the password shown and hide
    //we have used [val] because it's decided in runtime
    function View_PC(val) {
        if (PC_state[val] === "text") {
            setPC_state(State => ({
                ...State,
                [val]: "password"
            }))
        }
        else {
            setPC_state(State => ({
                ...State,
                [val]: "text"
            }))
        }
    }
    //by setting the status state empty, because notification should be visible for 4 seconds
    const Status_to_empty = () => {
        console.log("first")
        setPC_state(State => ({
            ...State,
            Status: ""
        }))
    }
    const PC_Submit = (e) => {
        e.preventDefault();
        if (PC_state.New === PC_state.Confirm) {
            // APICALL responce and decide
            if (true) {
                setPC_state(State => ({
                    ...State,
                    Status: "Password has been changed successfully"
                }));
                setTimeout(Status_to_empty, 4000);
            }
            else {
                setPC_state(State => ({
                    ...State,
                    Status: "Server Error! Please try after sometime"
                }));
                setTimeout(Status_to_empty, 4000);
            }
        }
        else {
            setPC_state(State => ({
                ...State,
                Status: "New Password and Confirm password should be same!"
            }));
            setTimeout(Status_to_empty, 4000);
        }
    }
    return (
        <div className='PC909'>
            <div className='Status_PC009'>
                <div className='cont_PC_009'>
                    (i) {PC_state.Status}
                </div>
            </div>
            <form className='CONt_PC009' onSubmit={PC_Submit}>
                <div><label className='lab1PC90'>Old Password</label>
                    <input type={PC_state.Old} name="Old_val" className="PC_input009" value={PC_state.Old_val} onChange={HandleChange} />
                    <span className='PC_PS_009' name="Old" onClick={() => View_PC("Old")}>
                        {PC_state.Old !== "text" ? <span>Show</span> : <span>Hide!</span>}</span></div>
                
                <div><label className='lab2PC90'>New Password</label>
                    <input type={PC_state.New}  name="New_val" className="PC_input009" value={PC_state.New_val} onChange={HandleChange}/>
                    <span className='PC_PS_009' name="New" onClick={() => View_PC("New")}>
                        {PC_state.New !== "text" ? <span>Show</span> : <span>Hide!</span>}</span></div>
                
                <div><label className='lab3PC90'>Confirm Password</label>
                    <input type={PC_state.Confirm}  name="Confirm_val" className="PC_input009" value={PC_state.Confirm_val} onChange={HandleChange}/>
                    <span className='PC_PS_009' name="Confirm" onClick={() => View_PC("Confirm")}>
                        {PC_state.Confirm !== "text" ? <span>Show</span> : <span>Hide!</span>}</span></div>
                <button type='submit' className='btn btn-primary' style={{ marginTop: "25px" }}>Submit</button>
            </form>
        </div>
    )
}
