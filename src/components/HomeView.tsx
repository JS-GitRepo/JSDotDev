import "./HomeView.css";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const HomeView = () => {
  const currentPath = useLocation().pathname;
  const navigate = useNavigate();

  useEffect(() => {}, []);

  return (
    <div className="HomeView">
      <p>HomeView works</p>
    </div>
  );
};

export default HomeView;
