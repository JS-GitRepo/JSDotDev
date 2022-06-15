import "./HomeView.css";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import HomeViewHeader from "./HomeViewHeader";
import HomeViewFooter from "./HomeViewFooter";
import HomeViewContent from "./HomeViewContent";

const HomeView = () => {
  const currentPath = useLocation().pathname;
  const navigate = useNavigate();

  return (
    <div className="HomeView">
      <HomeViewHeader pathname={currentPath} />
      <HomeViewContent pathname={currentPath} />
      <HomeViewFooter pathname={currentPath} />
    </div>
  );
};

export default HomeView;
