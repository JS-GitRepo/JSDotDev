import "./styles/HomeView.css";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import HVHeader from "./HVHeader";
import HVFooter from "./HVFooter";
import AppContext from "../contexts/AppContext";
import AppConfig from "../AppConfig.json";
import LandingPage from "./LandingPage";
import HVContent from "./HVContent";

interface Props {}

const HomeView = ({}: Props) => {
  // - - - - - NAVIGATION - - - - -
  const location = useLocation();
  const navigate = useNavigate();
  // - - - - - URL PARAMS - - - - -
  let { landingOrHome, category1, gameOrWeb, project } = useParams();
  const param1_Opts = ["landing", "home"];
  const param2_Opts = ["portfolio", "blog", "introduction", "intro"];
  const param3_Opts = ["gamedev", "webdev"];
  const param4_Opts = AppConfig.projectURL_Params;
  const [param1, setParam1] = useState<string>("");
  const [param2, setParam2] = useState<string>("");
  const [param3, setParam3] = useState<string>("gamedev");
  const [param4, setParam4] = useState<string>("deerfall");
  const [allParamsArray, setAllParamsArray] = useState<string[]>([
    param1,
    param2,
    param3,
    param4,
  ]);
  const paramStateSet = [setParam1, setParam2, setParam3, setParam4];
  // - - - - - LANDING PAGE - - - - -
  const [isLanding, setIsLanding] = useState<boolean>(false);
  const [isIntro, setIsIntro] = useState<boolean>(false);
  // - - - - CONTEXT - - - -
  const { hueRotation, setHueDuration } = useContext(AppContext);
  // - - - - - TITLES AND TEXT - - - - -
  const [subtitle, setSubtitle] = useState<string>("Welcome! ");
  const [subEmoji, setSubEmoji] = useState<string>(" 🙂");
  // - - - - - PROJECTS - - - - -
  const gameDevProjList = ["deerfall"];
  const webDevProjList = ["mediamatchup"];

  // - - - - - FUNCTIONS - - - - -

  const validateURL = () => {
    // INITIAL SEGMENT VALIDATION
    let tempParams = allParamsArray;
    let URLSegments = [landingOrHome, category1, gameOrWeb, project];
    let paramArray = [param1_Opts, param2_Opts, param3_Opts, param4_Opts];
    // checks for landing page
    if (location.pathname === "/") {
      tempParams = [""];
      navigate("/landing");
      setIsLanding(true);
    } else if (landingOrHome === "landing") {
      tempParams = ["/landing"];
      setIsLanding(true);
    }
    // loops through each segment and validates it individually
    for (let i = 0; i < URLSegments.length; i++) {
      if (URLSegments[i]) {
        let found = paramArray[i].find((item) => item === URLSegments[i]);
        if (found === undefined) {
          navigate("/404NotFound");
        } else {
          // setParamsArray[i](found);
          paramStateSet[i](found);
          tempParams[i] = found;
        }
      }
    }
    // Sets Default Project if none is selected in this category
    let isGameDev = tempParams[2] === "gamedev";
    let isWebDev = tempParams[2] === "webdev";
    let isGameDevProj = gameDevProjList.includes(tempParams[3]);
    let isWebDevProj = webDevProjList.includes(tempParams[3]);

    if (isGameDev && !isGameDevProj) {
      setParam4(gameDevProjList[0]);
      tempParams[3] = gameDevProjList[0];
    } else if (isWebDev && !isWebDevProj) {
      setParam4(webDevProjList[0]);
      tempParams[3] = webDevProjList[0];
    }
    // Checks for introduction page
    if (tempParams[1] === "introduction") {
      setIsIntro(true);
    } else {
      setIsIntro(false);
    }
    // Reroutes to default project / current project based on current route
    let construct_URL = `/${tempParams[0]}/${tempParams[1]}/${tempParams[2]}/${tempParams[3]}`;
    let isSame_URL = construct_URL === location.pathname;
    let isIntroduction_URL = tempParams[1] === "introduction";

    if (tempParams[3] && !isSame_URL && !isIntroduction_URL) {
      navigate(construct_URL, { replace: true });
    }
  };

  // - - - - - useEffects - - - - -
  useEffect(() => {
    validateURL();
    if (!isLanding) {
      if (hueRotation != AppConfig.hueAnimDuration_Slow) {
        setHueDuration(AppConfig.hueAnimDuration_Slow);
      }
    }
  }, [location]);

  // Necessary to update props. Otherwise, props are always a step behind.
  useEffect(() => {
    setAllParamsArray([param1, param2, param3, param4]);
  }, [param1, param2, param3, param4]);

  // - - - - - JSX - - - - -
  return (
    <div className='HomeView'>
      {isLanding ? <LandingPage setIsLanding={setIsLanding} /> : ""}
      <HVHeader
        subtitle={subtitle}
        subEmoji={subEmoji}
        allParams={allParamsArray}
        isIntro={isIntro}
      />
      <HVContent
        project={param4}
        isIntro={isIntro}
        allParams={allParamsArray}
      />
      <HVFooter allParams={allParamsArray} isIntro={isIntro} />
    </div>
  );
};

export default HomeView;
