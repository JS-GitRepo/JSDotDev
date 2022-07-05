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
  // - - - - - Titles and Text - - - - -
  const [title, setTitle] = useState<string>("Dev Blog");
  const [subtitle, setSubtitle] = useState<string>("Welcome! ");
  const [subEmoji, setSubEmoji] = useState<string>(" 🙂");
  // - - - - - Links - - - - -
  const [gameDevLink, setGameDevLink] = useState<string>("");
  const [webDevLink, setWebDevLink] = useState<string>("");
  const [portfolioLink, setPortfolioLink] = useState<string>("");
  const [blogLink, setBlogLink] = useState<string>("");
  const [isPortfolio, setIsPortfolio] = useState<boolean>(true);
  const [isGameDev, setIsGameDev] = useState<boolean>(true);
  const navigate = useNavigate();
  const currentPath = useLocation().pathname;
  // - - - - - Projects - - - - -
  const gameDevProjList = ["Deerfall"];
  const webDevProjList = ["MediaMatchup"];
  const [currentProject, setCurrentProject] = useState<string>("");

  useEffect(() => {
    if (currentPath.includes("/gamedev/")) {
      setCurrentProject(gameDevProjList[0]);
    } else if (currentPath.includes("/webdev/")) {
      setCurrentProject(webDevProjList[0]);
    }
  }, [isGameDev]);

  useEffect(() => {
    if (currentPath.includes("/gamedev/portfolio")) {
      setTitle("GameDev Portfolio");
      navigate(`/home/gamedev/portfolio/${currentProject}`);
      setWebDevLink(`/home/webdev/portfolio/${currentProject}`);
      setBlogLink(`/home/gamedev/blog/${currentProject}`);
      setIsPortfolio(true);
      setIsGameDev(true);
    } else if (currentPath.includes("/gamedev/blog")) {
      setTitle("GameDev Blog");
      navigate(`/home/gamedev/blog/${currentProject}`);
      setWebDevLink(`/home/webdev/blog/${currentProject}`);
      setPortfolioLink(`/home/gamedev/portfolio/${currentProject}`);
      setIsPortfolio(false);
      setIsGameDev(true);
    } else if (currentPath.includes("/webdev/portfolio")) {
      setTitle("WebDev Portfolio");
      navigate(`/home/webdev/portfolio/${currentProject}`);
      setGameDevLink(`/home/gamedev/portfolio/${currentProject}`);
      setBlogLink(`/home/webdev/blog/${currentProject}`);
      setIsPortfolio(true);
      setIsGameDev(false);
    } else if (currentPath.includes("/webdev/blog")) {
      setTitle("WebDev Blog");
      navigate(`/home/webdev/blog/${currentProject}`);
      setGameDevLink(`/home/gamedev/blog/${currentProject}`);
      setPortfolioLink(`/home/webdev/portfolio/${currentProject}`);
      setIsPortfolio(false);
      setIsGameDev(false);
    }
    setHueDuration(12000);
  }, [currentPath, currentProject]);

  return (
    <div className="HomeView">
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
