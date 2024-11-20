import Webcam from 'react-webcam';
import { useRef } from 'react';
import "./layout.css"
export default function Layout() {

    const webcamRef = useRef(null);

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
                </div>
                <div className="right">right</div>
            </div>
            <div style={{textAlign:"center"}}>
                <button className="btn">End</button>
            </div>
        </div>
    )
}
