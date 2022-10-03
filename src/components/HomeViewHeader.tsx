import { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { animated } from "react-spring";
import StyleContext from "../contexts/StyleContext";
import "./styles/HomeViewHeader.css";
import AppConfig from "../AppConfig.json";

interface Props {
  subtitle: string;
  subEmoji: string;
  gameDevLink: string;
  webDevLink: string;
  currentContent: string;
}

const HomeViewHeader = ({
  subtitle,
  subEmoji,
  gameDevLink,
  webDevLink,
  currentContent,
}: Props) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { hueRotation } = useContext(StyleContext);
  // Valid URL Parameter Options to check against
  let { landingOrHome, category1, gameOrWeb, project } = useParams();
  const param1_Opts = ["landing", "home"];
  const param2_Opts = ["portfolio", "blog", "introduction", "intro"];
  const param3_Opts = ["gamedev", "webdev"];
  const param4_Opts = AppConfig.projectURL_Params;
  // useStates for Interfacing with URL Params
  const [param1, setParam1] = useState("");
  const [param2, setParam2] = useState("");
  const [param3, setParam3] = useState("");
  const [param4, setParam4] = useState("");

  // Functions
  const checkURL = () => {
    let URLSegments = [landingOrHome, category1, gameOrWeb, project];
    let paramArray = [param1_Opts, param2_Opts, param3_Opts, param4_Opts];
    let setParamsArray = [setParam1, setParam2, setParam3, setParam4];
    for (let i = 0; i < URLSegments.length; i++) {
      if (URLSegments[i]) {
        let found = paramArray[i].find((item) => item === URLSegments[i]);
        if (found === undefined) {
          navigate("/404NotFound");
        } else {
          setParamsArray[i](found);
        }
      }
    }
  };

  // useEffects
  useEffect(() => {
    checkURL();
    console.log(param1, param2, param3, param4);
  }, [location]);

  // Some elements in the return will be hidden by media query CSS, to allow UI elements in the header or footer depending on mobile / Desktop. This is why there are some "redundant" elements
  return (
    <div className='HomeViewHeader'>
      <Link className='title-ctr' to={{ pathname: "/" }}>
        <h1>
          {`jake's `}
          <animated.span style={hueRotation} className='highlighted-link'>
            {`${param3}`}
            {` ${param2}`}
          </animated.span>
        </h1>
        <p className='subtitle'>
          {subtitle}
          <span className='emoji'>{subEmoji}</span>
        </p>
      </Link>

      <div className='project-nav-ctr'>
        <div className='project-nav'>
          <span className='material-symbols-outlined'>chevron_left</span>
          <h2>{currentContent}</h2>
          <span className='material-symbols-outlined'>chevron_right</span>
        </div>

        <div className='project-nav-type-cat'>
          <Link to={`/home/${param2}/gamedev`} className={"highlighted-link"}>
            <animated.p style={hueRotation}>gamedev</animated.p>
          </Link>
          <Link to={`/home/${param2}/webdev`} className={"highlighted-link"}>
            <animated.p style={hueRotation}>webdev</animated.p>
          </Link>
        </div>
      </div>

      <div className='nav-ctr'>
        <ul>
          <li>
            <Link to={`/home/${param2}/gamedev`} className={"highlighted-link"}>
              <animated.p style={hueRotation}>gamedev</animated.p>
            </Link>
          </li>
          <li>
            <Link to={`/home/${param2}/webdev`} className={"highlighted-link"}>
              <animated.p style={hueRotation}>webdev</animated.p>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HomeViewHeader;
