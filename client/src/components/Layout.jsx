import './layout.css';
import Webcam from 'react-webcam';
import React, { useEffect, useState } from 'react';
import logo from '../assets/logo.png';
import { data } from './data';
import { Outlet, Link } from 'react-router-dom';
import { useRef } from 'react';

export default function Layout() {

    const [currentIndex, setCurrentIndex] = useState(0);
    const [result, setResult] = useState('Waiting....');
    const [timeElapsed, setTimeElapsed] = useState(0);

    const webcamRef = useRef(null);

    const speakText = (text) => {
        const synth = window.speechSynthesis;
        const utterance = new SpeechSynthesisUtterance(text);
        synth.speak(utterance);
    };


    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes} minutes ${remainingSeconds} seconds`;
    };


    useEffect(() => {
        const intervalId = setInterval(() => {
            if (currentIndex < data.length) {
                speakText(data[currentIndex]);
                setResult(data[currentIndex])
                setCurrentIndex(prevIndex => prevIndex + 1);
                setTimeElapsed(0);

            } else {
                clearInterval(intervalId);
            }
        }, 2000);

        const timerId = setInterval(() => {
            setTimeElapsed(prevTime => prevTime + 1);
        }, 1000);

        return () => {
            clearInterval(intervalId);
            clearInterval(timerId);
        };
    }, [currentIndex]);


    return (
        <div>
            <div className="flex">
                <div className="left">
                    <Webcam
                        audio={false}
                        ref={webcamRef}
                        screenshotFormat="image/jpeg"
                        className="webcam"
                    />
                    <div className="result">
                        <div style={{ textAlign: "center", color: "blue" }}>
                            Time Elapsed: {formatTime(timeElapsed)} seconds - 2 mins</div>
                    </div>
                    <div style={{ color: 'red', textAlign: 'center', fontSize: '20px' }}>{result}</div>
                </div>


                <div className="right">
                    <img className="image" src={logo} alt="Logo" />
                    <img className="image" src={logo} alt="Logo" />
                    <img className="image" src={logo} alt="Logo" />
                    <img className="image" src={logo} alt="Logo" />
                    <img className="image" src={logo} alt="Logo" />
                    <img className="image" src={logo} alt="Logo" />
                </div>
            </div>

            <div style={{ textAlign: 'center' }}>

                <Link to="/" className='End'><button className='btn'>End</button></Link>


                <Outlet />
            </div>
        </div>
    );
}