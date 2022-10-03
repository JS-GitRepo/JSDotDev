import "./styles/HomeView.css";
import { useLocation, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import HomeViewHeader from "./HomeViewHeader";
import HomeViewFooter from "./HomeViewFooter";
import HomeViewContent from "./HomeViewContent";
import StyleContext from "../contexts/StyleContext";
import AppConfig from "../AppConfig.json";

interface Props {}

const HomeView = ({}: Props) => {
  // - - - - GENERAL STATES - - - -
  const { hueRotation, setHueDuration } = useContext(StyleContext);
  // - - - - - TITLES AND TEXT - - - - -
  const [currentContent, setCurrentContent] = useState<string>("Deerfall");
  const [title, setTitle] = useState<string>("Dev Blog");
  const [subtitle, setSubtitle] = useState<string>("Welcome! ");
  const [subEmoji, setSubEmoji] = useState<string>(" 🙂");
  // - - - - - LINKS - - - - -
  const [gameDevLink, setGameDevLink] = useState<string>("");
  const [webDevLink, setWebDevLink] = useState<string>("");
  const [portfolioLink, setPortfolioLink] = useState<string>("");
  const [blogLink, setBlogLink] = useState<string>("");
  const [isPortfolio, setIsPortfolio] = useState<boolean>(true);
  const [isGameDev, setIsGameDev] = useState<boolean>(true);
  const navigate = useNavigate();
  const currentPath = useLocation().pathname;
  // - - - - - PROJECTS - - - - -
  const gameDevProjList = ["Deerfall"];
  const webDevProjList = ["MediaMatchup"];

  useEffect(() => {
    if (currentPath.includes("/gamedev/portfolio")) {
      if (currentPath.includes("home/")) {
        navigate(`/home/gamedev/portfolio/${currentContent}`);
      }
      setTitle("GameDev Portfolio");
      setWebDevLink(`/home/webdev/portfolio/${currentContent}`);
      setBlogLink(`/home/gamedev/blog/${currentContent}`);
      setIsPortfolio(true);
      setIsGameDev(true);
    } else if (currentPath.includes("/gamedev/blog")) {
      if (currentPath.includes("home/")) {
        navigate(`/home/gamedev/blog/${currentContent}`);
      }
      setTitle("GameDev Blog");
      setWebDevLink(`/home/webdev/blog/${currentContent}`);
      setPortfolioLink(`/home/gamedev/portfolio/${currentContent}`);
      setIsPortfolio(false);
      setIsGameDev(true);
    } else if (currentPath.includes("/webdev/portfolio")) {
      if (currentPath.includes("home/")) {
        navigate(`/home/webdev/portfolio/${currentContent}`);
      }
      setTitle("WebDev Portfolio");
      setGameDevLink(`/home/gamedev/portfolio/${currentContent}`);
      setBlogLink(`/home/webdev/blog/${currentContent}`);
      setIsPortfolio(true);
      setIsGameDev(false);
    } else if (currentPath.includes("/webdev/blog")) {
      if (currentPath.includes("home/")) {
        navigate(`/home/webdev/blog/${currentContent}`);
      }
      setTitle("WebDev Blog");
      setGameDevLink(`/home/gamedev/blog/${currentContent}`);
      setPortfolioLink(`/home/webdev/portfolio/${currentContent}`);
      setIsPortfolio(false);
      setIsGameDev(false);
    }
    if (currentPath.includes("/gamedev/")) {
      setCurrentContent(gameDevProjList[0]);
    } else if (currentPath.includes("/webdev/")) {
      setCurrentContent(webDevProjList[0]);
    } else if (currentPath.includes("/introduction/")) {
      setCurrentContent("Introduction");
    }

    if (hueRotation != AppConfig.hueAnimDuration_Slow) {
      setHueDuration(AppConfig.hueAnimDuration_Slow);
    }
  }, [currentPath]);

  return (
    <div className='HomeView'>
      <HomeViewHeader
        subtitle={subtitle}
        subEmoji={subEmoji}
        gameDevLink={gameDevLink}
        webDevLink={webDevLink}
        currentContent={currentContent}
      />
      <HomeViewContent
        pathname={currentPath}
        isPortfolio={isPortfolio}
        currentContent={currentContent}
      />
      <HomeViewFooter
        pathname={currentPath}
        gamedevOrWebdev={isGameDev}
        hueRotation={hueRotation}
        gameDevLink={gameDevLink}
        webDevLink={webDevLink}
        currentContent={currentContent}
        portfolioLink={portfolioLink}
        blogLink={blogLink}
        isPortfolio={isPortfolio}
      />
    </div>
  );
};

export default HomeView;
