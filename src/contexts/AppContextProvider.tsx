import AppContext from "./AppContext";
import { ReactNode, useEffect, useState } from "react";
import { useSpring } from "react-spring";
import AppConfig from "../AppConfig.json";
import { useLocation, useParams } from "react-router-dom";

interface Props {
  children: ReactNode;
}

const AppContextProvider = ({ children }: Props) => {
  // GENERAL
  const [isMobile, setIsMobile] = useState<boolean>(true);

  // ANIMATIONS / REACT SPRING
  const [bgAnimOff, setBgAnimOff] = useState<boolean>(false);
  const [hueDuration, setHueDuration] = useState<number>(
    AppConfig.hueAnimDuration
  );
  const hueRotation = useSpring({
    loop: { reverse: true, config: { duration: hueDuration } },
    to: {
      filter: "hue-rotate(130deg) saturate(80%) sepia(30%)",
    },
    from: {
      filter: "hue-rotate(0deg) saturate(100%) sepia(0%)",
    },
    config: { duration: hueDuration, precision: 0.001 },
  });

  const checkWindowSize = () => {
    if (window.matchMedia("(min-width: 768px)").matches && isMobile) {
      setIsMobile(false);
    } else if (!window.matchMedia("(min-width: 768px)").matches && !isMobile) {
      setIsMobile(true);
    }
  };

  // Monitors window for its size; sets "isMobile" accordingly
  useEffect(() => {
    checkWindowSize();
    window.addEventListener("resize", checkWindowSize);
  });

  return (
    <AppContext.Provider value={{ isMobile, hueRotation, setHueDuration }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;