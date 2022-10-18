import { useContext, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { animated, SpringValue, useSpring } from "react-spring";
import AppContext from "../contexts/AppContext";
import "./styles/LPLink.css";

interface Props {
  currentDisplay: string;
  linkText: string;
  pathName: string;
  isH1: boolean;
}

const LPLink = ({ currentDisplay, linkText, pathName, isH1 }: Props) => {
  const { isMobile } = useContext(AppContext);
  const opacityRef = useRef(0);
  const hoverOn: any = useSpring({
    to: { opacity: 0 },
    from: { opacity: 1 },
    reset: true,
    delay: 0,
    config: { duration: 750 },
    loop: { reverse: true },
    onChange: (): number => (opacityRef.current = hoverOn.opacity.get()),
  });
  const hoverOff: any = useSpring({
    to: {
      opacity: 1,
    },
    from: { opacity: opacityRef.current },
    reset: true,
    loop: false,
  });
  const hoverNone: any = useSpring({
    from: { opacity: 1 },
    reset: true,
  });
  const [animState, setAnimState] = useState<{ opacity: SpringValue<number> }>(
    hoverNone
  );

  const checkIsMobile = (hoverState: { opacity: SpringValue<number> }) => {
    if (isMobile) {
      setAnimState(hoverNone);
    } else if (!isMobile) {
      setAnimState(hoverState);
    }
  };

  useEffect(() => {
    let fromVal = animState.opacity.animation.from;
    let timeout;

    if (fromVal > 0 && fromVal < 1) {
      setTimeout(() => setAnimState(hoverNone), 400);
    } else {
      clearTimeout(timeout);
    }
  }, [animState]);

  return (
    <Link to={pathName} className={"lp-link"}>
      {isH1 ? (
        <animated.h1
          style={animState}
          onMouseOver={() => checkIsMobile(hoverOn)}
          onMouseLeave={() => checkIsMobile(hoverOff)}>
          {currentDisplay}
        </animated.h1>
      ) : (
        <animated.h2
          style={animState}
          onMouseOver={() => checkIsMobile(hoverOn)}
          onMouseLeave={() => checkIsMobile(hoverOff)}>
          {linkText}
        </animated.h2>
      )}
    </Link>
  );
};

export default LPLink;
