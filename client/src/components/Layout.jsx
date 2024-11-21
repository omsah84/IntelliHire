import React, { useState, useEffect } from 'react';
import logo from '../assets/logo.png'
import Webcam from 'react-webcam';
import { useRef } from 'react';
import "./layout.css"
export default function Layout() {
    const [timeElapsed, setTimeElapsed] = useState(0);

    useEffect(()=>{
        
        const timerId = setInterval(() => {
            setTimeElapsed(e => e + 1);
        }, 1000);

       return () => {
        clearInterval(timerId);
    };
    },[]);

    const webcamRef = useRef(null);

    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes} minutes ${remainingSeconds} seconds`;
    };
    
    return (
        <div>
            <div className="container">
                <div className="left">
                <Webcam
                            audio={false}
                            ref={webcamRef}
                            screenshotFormat="image/jpeg"
                            className='webcam'
                        />
                        <div className='result'>
                        <div>Time Elapsed:  {formatTime(timeElapsed)} seconds - 2 mins</div>
                        
                </div>

                </div>
                <div className="right">
                <img className="pic" src= {logo} alt="" />
                <img className="pic" src= {logo} alt="" />
                <img className="pic" src= {logo} alt="" />
                <img className="pic" src= {logo} alt="" />
                <img className="pic" src= {logo} alt="" />
                </div>
            </div>
            <div style={{textAlign:"center"}}>
                <button className="btn">End</button>
            </div>
        </div>
    )
}
