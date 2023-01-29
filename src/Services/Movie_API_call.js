import React, { useEffect,useState } from 'react'
import axios from 'axios';
import XMLParser from 'react-xml-parser';

export default function Movie_API_call() {
    const [first, setfirst] = useState("");
    const [second, setsecond] = useState("");
    useEffect(() => {
        let a = axios.get("https://cdn.animenewsnetwork.com/encyclopedia/api.xml?anime=90",
            {
                "Content-Type": "application/xml; charset=utf-8"
            })
            .then(res => {
                const jsonDataFromXml = new XMLParser().parseFromString(res.data);
                console.log(jsonDataFromXml.children[0]);
            })

    }, [])

    return (
        <div>
            <img src={first} /><img src={second} /></div>
    )
}
