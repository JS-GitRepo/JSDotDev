import "./HomeView.css";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import HomeViewHeader from "./HomeViewHeader";
import HomeViewFooter from "./HomeViewFooter";
import HomeViewContent from "./HomeViewContent";
import { SpringValue } from "react-spring";

interface Props {
  hueRotation: {
    filter: SpringValue<string>;
  };
  setHueDuration: React.Dispatch<React.SetStateAction<number>>;
}

const HomeView = ({ hueRotation, setHueDuration }: Props) => {
  // - - - - GENERAL STATES - - - -
  const [firstRender, setFirstRender] = useState<boolean>(true);
  // - - - - - TITLES AND TEXT - - - - -
  const [currentProject, setCurrentProject] = useState<string>("Deerfall");
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
        navigate(`/home/gamedev/portfolio/${currentProject}`);
      }
      setTitle("GameDev Portfolio");
      setWebDevLink(`/home/webdev/portfolio/${currentProject}`);
      setBlogLink(`/home/gamedev/blog/${currentProject}`);
      setIsPortfolio(true);
      setIsGameDev(true);
    } else if (currentPath.includes("/gamedev/blog")) {
      if (currentPath.includes("home/")) {
        navigate(`/home/gamedev/blog/${currentProject}`);
      }
      setTitle("GameDev Blog");
      setWebDevLink(`/home/webdev/blog/${currentProject}`);
      setPortfolioLink(`/home/gamedev/portfolio/${currentProject}`);
      setIsPortfolio(false);
      setIsGameDev(true);
    } else if (currentPath.includes("/webdev/portfolio")) {
      if (currentPath.includes("home/")) {
        navigate(`/home/webdev/portfolio/${currentProject}`);
      }
      setTitle("WebDev Portfolio");
      setGameDevLink(`/home/gamedev/portfolio/${currentProject}`);
      setBlogLink(`/home/webdev/blog/${currentProject}`);
      setIsPortfolio(true);
      setIsGameDev(false);
    } else if (currentPath.includes("/webdev/blog")) {
      if (currentPath.includes("home/")) {
        navigate(`/home/webdev/blog/${currentProject}`);
      }
      setTitle("WebDev Blog");
      setGameDevLink(`/home/gamedev/blog/${currentProject}`);
      setPortfolioLink(`/home/webdev/portfolio/${currentProject}`);
      setIsPortfolio(false);
      setIsGameDev(false);
    }
    if (currentPath.includes("/gamedev/")) {
      setCurrentProject(gameDevProjList[0]);
    } else if (currentPath.includes("/webdev/")) {
      setCurrentProject(webDevProjList[0]);
    }
    console.log(currentPath);

    setHueDuration(12000);
  }, [currentPath]);

  return (
    <div className='HomeView'>
      <HomeViewHeader
        isPortfolio={isPortfolio}
        gamedevOrWebdev={isGameDev}
        hueRotation={hueRotation}
        title={title}
        subtitle={subtitle}
        subEmoji={subEmoji}
        gameDevLink={gameDevLink}
        webDevLink={webDevLink}
        portfolioLink={portfolioLink}
        currentProject={currentProject}
        blogLink={blogLink}
      />
      <HomeViewContent
        pathname={currentPath}
        isPortfolio={isPortfolio}
        currentProject={currentProject}
      />
      <HomeViewFooter
        pathname={currentPath}
        gamedevOrWebdev={isGameDev}
        hueRotation={hueRotation}
        gameDevLink={gameDevLink}
        webDevLink={webDevLink}
        currentProject={currentProject}
      />
    </div>
  );
};

export default HomeView;
