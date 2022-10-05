import "./styles/HomeView.css";
import { Outlet, useLocation, useNavigate, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import HomeViewHeader from "./HomeViewHeader";
import HomeViewFooter from "./HomeViewFooter";
import AppContext from "../contexts/AppContext";
import AppConfig from "../AppConfig.json";
import LandingPage from "./LandingPage";

interface Props {}

const HomeView = ({}: Props) => {
  // - - - - - NAVIGATION - - - - -
  const location = useLocation();
  const navigate = useNavigate();
  // Valid URL Parameter Options to check against
  let { landingOrHome, category1, gameOrWeb, project } = useParams();
  const param1_Opts = ["landing", "home"];
  const param2_Opts = ["portfolio", "blog", "introduction", "intro"];
  const param3_Opts = ["gamedev", "webdev"];
  const param4_Opts = AppConfig.projectURL_Params;
  // useStates for Interfacing with URL Params
  const [param1, setParam1] = useState<string>("");
  const [param2, setParam2] = useState<string>("");
  const [param3, setParam3] = useState<string>("");
  const [param4, setParam4] = useState<string>("");
  const [allParamsObj, setAllParamsObj] = useState<any>({
    param1,
    param2,
    param3,
    param4,
  });
  const setParamsArray = [setParam1, setParam2, setParam3, setParam4];
  // check if this is the landing page
  const [isLanding, setIsLanding] = useState<boolean>(false);
  // - - - - CONTEXT - - - -
  const { hueRotation, setHueDuration } = useContext(AppContext);
  // - - - - - TITLES AND TEXT - - - - -
  const [currentContent, setCurrentContent] = useState<string>("Deerfall");
  const [title, setTitle] = useState<string>("Dev Blog");
  const [subtitle, setSubtitle] = useState<string>("Welcome! ");
  const [subEmoji, setSubEmoji] = useState<string>(" 🙂");
  // - - - - - PROJECTS - - - - -
  const gameDevProjList = ["Deerfall"];
  const webDevProjList = ["MediaMatchup"];

  // - - - - - FUNCTIONS - - - - -
  const checkURL = () => {
    let URLSegments = [landingOrHome, category1, gameOrWeb, project];
    let paramArray = [param1_Opts, param2_Opts, param3_Opts, param4_Opts];
    if (location.pathname === "/") {
      navigate("/landing");
      setIsLanding(true);
    } else if (location.pathname === "/landing") {
      setIsLanding(true);
    }
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

  // - - - - - useEffects - - - - -
  useEffect(() => {
    setAllParamsObj({ param1, param2, param3, param4 });
  }, [param1, param2, param3, param4]);

  useEffect(() => {
    if (!isLanding) {
      checkURL();
      if (hueRotation != AppConfig.hueAnimDuration_Slow) {
        setHueDuration(AppConfig.hueAnimDuration_Slow);
      }
    }
    console.log(category1);
  }, [location]);

  // - - - - - JSX - - - - -
  return (
    <div className='HomeView'>
      {isLanding ? (
        <LandingPage
          setIsLanding={setIsLanding}
          setParamsArray={setParamsArray}
        />
      ) : (
        ""
      )}
      <HomeViewHeader
        subtitle={subtitle}
        subEmoji={subEmoji}
        currentContent={currentContent}
        allParamsObj={allParamsObj}
        isLanding={isLanding}
      />
      <Outlet />
      <HomeViewFooter currentContent={"deerfall"} allParamsObj={allParamsObj} />
    </div>
  );
};

export default HomeView;
