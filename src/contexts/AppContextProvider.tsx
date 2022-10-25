import AppContext from "./AppContext";
import { ReactNode, useEffect, useRef, useState } from "react";
import { useSpring } from "react-spring";
import AppConfig from "../AppConfig.json";

interface Props {
  children: ReactNode;
}

const AppContextProvider = ({ children }: Props) => {
  // GENERAL
  const [isMobile, setIsMobile] = useState<boolean>(true);

  // SCROLL LOCATION REFERENCES
  const media = useRef(null);
  const tech = useRef(null);
  const about = useRef(null);
  const blog = useRef(null);
  const [scrollRefs, setScrollRefs] = useState({
    media,
    tech,
    about,
    blog,
  });

  // ANIMATIONS / REACT SPRING
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
  const hueRotation_Inv = useSpring({
    loop: { reverse: true, config: { duration: hueDuration } },
    to: {
      filter: "hue-rotate(0deg) saturate(100%) sepia(0%)",
    },
    from: {
      filter: "hue-rotate(130deg) saturate(80%) sepia(30%)",
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

  useEffect(() => {
    setScrollRefs({
      media,
      tech,
      about,
      blog,
    });
  }, [media, tech, about, blog]);

  return (
    <AppContext.Provider
      value={{
        isMobile,
        hueRotation,
        hueRotation_Inv,
        setHueDuration,
        scrollRefs,
      }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
