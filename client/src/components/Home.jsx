import { Link } from "react-router"; // Importing Link for navigation
import "./Home.css"; // Importing the CSS file for styling

export default function Home() {
  return (
    <>
      {/* Main container for the Home component */}
      <div className="home">
        {/* Header text for the home page */}
        <h1 style={{ fontSize: "50px" }}>This is Intelihire</h1>

        {/* Link for navigation to the "/start" page */}
        <Link to="/start">
          {/* Button for starting the process */}
          <button className="btn">Start</button>
        </Link>
      </div>
    </>
  );
}
