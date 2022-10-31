import { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { animated } from "react-spring";
import AppContext from "../contexts/AppContext";
import "./styles/ErrorNotFound.css";

const ErrorNotFound = () => {
  const navigate = useNavigate();
  const { hueRotation } = useContext(AppContext);

  return (
    <div className='ErrorNotFound'>
      <div className='content-ctr'>
        <h1>404 Not Found</h1>
        <p>
          Sorry, but that resource wasn't found.
          <span className='emoji'>🙁</span>
        </p>
        <p>
          There will soon be a contact form here to provide details of what
          might've led you here. There are also some projects that have a
          linking structure which is currently WIP.
        </p>
        <p></p>
      </div>
      <animated.button style={hueRotation} onClick={() => navigate(-1)}>
        Go Back
      </animated.button>
      <animated.button style={hueRotation} onClick={() => navigate("/landing")}>
        Go To Landing
      </animated.button>
    </div>
  );
};

export default ErrorNotFound;
