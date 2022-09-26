import { User } from "firebase/auth";
import StyleContext from "./StyleContext";
import { ReactNode, useEffect, useState } from "react";
import { useSpring, config } from "react-spring";

interface Props {
  children: ReactNode;
}

const StyleContextProvider = ({ children }: Props) => {
  // GENERAL
  const [isMobile, setIsMobile] = useState<boolean>(true);
  // ANIMATIONS / REACT SPRING
  const [hueFlip, setHueFlip] = useState<boolean>(false);
  const [bgAnimOff, setBgAnimOff] = useState<boolean>(false);
  const [hueDuration, setHueDuration] = useState<number>(4500);
  const hueRotation = useSpring({
    loop: { reverse: true },
    delay: 1000,
    reset: true,
    to: {
      filter: "hue-rotate(130deg) saturate(80%) sepia(30%)",
    },
    from: {
      filter: "hue-rotate(0deg) saturate(100%) sepia(0%)",
    },
    cancel: bgAnimOff,
    config: { duration: hueDuration },
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
    <StyleContext.Provider value={{ isMobile, hueRotation, setHueDuration }}>
      {children}
    </StyleContext.Provider>
  );
};

export default StyleContextProvider;