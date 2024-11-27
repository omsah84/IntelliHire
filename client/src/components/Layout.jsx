import Webcam from "react-webcam"; // Webcam to show the live video feed
import { useRef, useEffect, useState } from "react"; // React hooks for various functionalities
import "./layout.css"; // Importing CSS for styling
import { Link } from "react-router"; // Link for navigation between pages
import { data } from "./data"; // Importing data (text array) to display and speak
import Image from "../assets/img.jpg"; // Importing an image for display

export default function Layout() {
  // States to manage app data
  const [currentIndex, setCurrentIndex] = useState(0); // Current text index
  const [result, setResult] = useState("Waiting...."); // Text currently shown
  const [time, setTime] = useState(0); // Timer for how long the current text is displayed

  const webcamRef = useRef(null); // To control the webcam component

  // Function to make the browser speak the given text
  const speakText = (text) => {
    const synth = window.speechSynthesis; // Speech synthesizer from the browser
    const utterance = new SpeechSynthesisUtterance(text); // Prepare the text to be spoken
    synth.speak(utterance); // Speak the text
  };

  // Function to format the time into minutes and seconds
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60); // Calculate minutes
    const seconds = time % 60; // Calculate remaining seconds
    return `${minutes} minutes ${seconds} seconds`; // Return readable time
  };

  // Automatically update the text and timer every 2 minutes
  useEffect(() => {
    // Change the text every 2 minutes
    const changeTextInterval = setInterval(() => {
      if (currentIndex < data.length) {
        speakText(data[currentIndex]); // Speak the current text
        setResult(data[currentIndex]); // Update the text on the screen
        setCurrentIndex((prevIndex) => prevIndex + 1); // Move to the next text
        setTime(0); // Reset the timer
      } else {
        clearInterval(changeTextInterval); // Stop when all text is done
      }
    }, 120000); // 2 minutes = 120,000 milliseconds

    // Update the timer every second
    const timerInterval = setInterval(() => {
      setTime((prevTime) => prevTime + 1); // Increment the timer
    }, 1000);

    // Cleanup intervals when the component is removed
    return () => {
      clearInterval(changeTextInterval);
      clearInterval(timerInterval);
    };
  }, [currentIndex]);

  return (
    <div>
      <div className="container">
        <div className="left">
          {/* Webcam view */}
          <Webcam
            audio={false}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            className="webcam"
          />
          {/* Timer display */}
          <div style={{ textAlign: "center", color: "blue" }}>
            Time Elapsed: {formatTime(time)} seconds - 2 mins
          </div>
          {/* Current text result */}
          <div style={{ color: "red", textAlign: "center" }}>{result} </div>
        </div>

        {/* Right side - showing images */}
        <div className="right">
          <img
            src={Image}
            alt="Sample"
            style={{ height: "100%", width: "100%" }}
          />
          <img
            src={Image}
            alt="Sample"
            style={{ height: "100%", width: "100%" }}
          />
          <img
            src={Image}
            alt="Sample"
            style={{ height: "100%", width: "100%" }}
          />
          <img
            src={Image}
            alt="Sample"
            style={{ height: "100%", width: "100%" }}
          />
          <img
            src={Image}
            alt="Sample"
            style={{ height: "100%", width: "100%" }}
            className="no"
          />
          <img
            src={Image}
            alt="Sample"
            style={{ height: "100%", width: "100%" }}
            className="no"

          />
        </div>
      </div>

      {/* Button to go back */}
      <div style={{ textAlign: "center" }}>
        <Link to="/">
          <button className="btn">End</button>
        </Link>
      </div>
    </div>
  );
}
