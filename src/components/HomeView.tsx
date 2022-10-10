import "./styles/HomeView.css";
import { Outlet, useLocation, useNavigate, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import HomeViewHeader from "./HomeViewHeader";
import HomeViewFooter from "./HomeViewFooter";
import AppContext from "../contexts/AppContext";
import AppConfig from "../AppConfig.json";
import LandingPage from "./LandingPage";
import HomeViewContent from "./HomeViewContent";

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
  const [subtitle, setSubtitle] = useState<string>("Welcome! ");
  const [subEmoji, setSubEmoji] = useState<string>(" 🙂");
  // - - - - - PROJECTS - - - - -
  const gameDevProjList = ["deerfall"];
  const webDevProjList = ["mediamatchup"];
  const [currentContent, setCurrentContent] = useState<string | undefined>();

  // - - - - - FUNCTIONS - - - - -
  const checkDefaultProject = () => {
    let isGameDev = param3 === "gamedev";
    let isWebDev = param3 === "webdev";
    let isGameDevProj = gameDevProjList.includes(param4);
    let isWebDevProj = webDevProjList.includes(param4);
    // checks location and
    if (isGameDev && !isGameDevProj) {
      setParam4(gameDevProjList[0]);
    } else if (isWebDev && !isWebDevProj) {
      setParam4(webDevProjList[0]);
    }
  };

  const checkProjectParams = () => {
    let construct_URL = `/${param1}/${param2}/${param3}/${param4}`;
    // booleans
    let projectIsCurrent_URL = param4 === project;
    let isSame_URL = construct_URL === location.pathname;
    let isIntroduction_URL = param2 === "introduction";

    if (param4 && !projectIsCurrent_URL && !isSame_URL && !isIntroduction_URL) {
      navigate(construct_URL);
    }
  };

  const validateURL = () => {
    let URLSegments = [landingOrHome, category1, gameOrWeb, project];
    let paramArray = [param1_Opts, param2_Opts, param3_Opts, param4_Opts];
    // verifies if this should be the landing page
    if (location.pathname === "/") {
      navigate("/landing");
      setIsLanding(true);
    } else if (location.pathname === "/landing") {
      setIsLanding(true);
    }
    // compares segments of the URL against valid options
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
    if (!isLanding) {
      validateURL();
      if (hueRotation != AppConfig.hueAnimDuration_Slow) {
        setHueDuration(AppConfig.hueAnimDuration_Slow);
      }
    }
    console.log("- - - - - - - -");

    console.log(`individual params: /${param1}/${param2}/${param3}/${param4}`);
    console.log(
      `params object: /${allParamsObj.param1}/${allParamsObj.param2}/${allParamsObj.param3}/${allParamsObj.param4}`
    );
    console.log(`current URL: ${location.pathname}`);
    console.log("- - - - - - - -");
  }, [location]);

  useEffect(() => {
    setAllParamsObj({ param1, param2, param3, param4 });
  }, [param1, param2, param3, param4]);

  useEffect(() => {
    checkDefaultProject();
  }, [allParamsObj]);

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
        allParams={allParamsObj}
        isLanding={isLanding}
      />
      <HomeViewContent currentContent={param4} />
      <HomeViewFooter allParams={allParamsObj} />
    </div>
  );
};

export default HomeView;
