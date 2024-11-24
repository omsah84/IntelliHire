import './layout.css'
import Webcam from 'react-webcam';
import { useEffect, useState } from 'react';
import { useRef } from 'react';
import logo from '../assets/logo.png'
export default function Layout () {

    const [timeElapsed, setTimeElapsed] = useState(0);

    useEffect(() => {

        const timerId = setInterval(() => {
            setTimeElapsed(prevTime => prevTime + 1);
        }, 1000);

        return () => {
            clearInterval(timerId);
        };
    }, []);

    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes} minutes ${remainingSeconds} seconds`;
    };

const webcamRef = useRef(null);

 return (

    <>
    <div className="flex">
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
            
                        <img classname='image' src= {logo} />
                        <img className='image' src= {logo} />
                        <img className='image' src= {logo} />
                        <img className='image' src= {logo} />
                        <img className='image' src= {logo} />
                        <img className='image' src= {logo} />
                        

                </div>
    </div>
    <div style={{textAlign:"center"}}>
    <button className="btn"> END </button>
    </div>
    
  
   


    
    
    
    
    </>
 )

}