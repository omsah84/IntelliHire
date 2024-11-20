import Webcam from 'react-webcam';
import { useRef } from 'react';
import logo from "../assets/logo.png";
import "./layout.css"
export default function layout() {

    const webcamRef = useRef(null);

    return (
        <>

            <div className='flex'>
                <div className='left'>

                    <Webcam
                        audio={false}
                        ref={webcamRef}
                        screenshotFormat="image/jpeg"
                        className='webcam'
                    />
                </div>
                <div className='right'>
                    <img className='pic' src={logo}/>
                    <img className='pic' src={logo}/>
                    <img className='pic' src={logo}/>
                    <img className='pic' src={logo}/>
                    <img className='pic' src={logo}/>
                    <img className='pic' src={logo}/>

                </div>
            </div>

            <div style={{ textAlign: "center" }}>
                <button className='btn'>End</button>
            </div>
        </>

    )
}
