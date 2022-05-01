import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { animated, SpringValue, useSpring } from "react-spring";
import "./LandingPageLink.css";

interface Props {
  currentDisplay: string;
  linkText: string;
  pathName: string;
  className: string;
  isH1: boolean;
}

const LandingPageLink = ({
  currentDisplay,
  linkText,
  pathName,
  className,
  isH1,
}: Props) => {
  const opacityRef = useRef(0);
  const hoverOn = useSpring({
    to: { opacity: 0 },
    from: { opacity: 1 },
    reset: true,
    delay: 0,
    config: { duration: 750 },
    loop: { reverse: true },
    onChange: (): number => (opacityRef.current = hoverOn.opacity.get()),
  });
  const hoverOff = useSpring({
    to: { opacity: 1 },
    from: { opacity: opacityRef.current },
    reset: true,
    loop: false,
  });
  const [animState, setAnimState] = useState<{ opacity: SpringValue<number> }>(
    hoverOff
  );

  return (
    <Link to={pathName} className={className}>
      {isH1 ? (
        <animated.h1
          style={animState}
          onMouseEnter={() => setAnimState(hoverOn)}
          onMouseLeave={() => setAnimState(hoverOff)}>
          {currentDisplay}
        </animated.h1>
      ) : (
        <animated.h2
          style={animState}
          onMouseEnter={() => setAnimState(hoverOn)}
          onMouseLeave={() => setAnimState(hoverOff)}>
          {linkText}
        </animated.h2>
      )}
    </Link>
  );
};

export default LandingPageLink;
