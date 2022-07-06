import { Link } from "react-router-dom";
import { animated, SpringValue } from "react-spring";
import "./HomeViewFooter.css";

interface Props {
  pathname: string;
  gamedevOrWebdev: boolean;
  gameDevLink: string;
  webDevLink: string;
  currentProject: string;
  hueRotation: {
    filter: SpringValue<string>;
  };
}

const HomeViewFooter = ({
  pathname,
  gamedevOrWebdev,
  hueRotation,
  gameDevLink,
  webDevLink,
  currentProject,
}: Props) => {
  const currentYear = new Date();

  return (
    <div className="HomeViewFooter">
      <div className="project-nav-ctr">
        <div className="project-nav">
          <span className="material-symbols-outlined">chevron_left</span>
          <h2>{currentProject}</h2>
          <span className="material-symbols-outlined">chevron_right</span>
        </div>

        <div className="project-nav-type-cat">
          <Link
            to={gameDevLink}
            className={gamedevOrWebdev ? "highlighted-link" : ""}>
            <animated.p style={gamedevOrWebdev ? hueRotation : {}}>
              Game Dev
            </animated.p>
          </Link>
          <Link
            to={webDevLink}
            className={gamedevOrWebdev ? "" : "highlighted-link"}>
            <animated.p style={gamedevOrWebdev ? {} : hueRotation}>
              Web Dev
            </animated.p>
          </Link>
        </div>
      </div>

      <div className="rights-ctr">
        <p>
          <animated.span
            className={"highlighted-link"}
            style={
              hueRotation
            }>{`© ${currentYear.getFullYear()} All Rights Reserved`}</animated.span>{" "}
        </p>
      </div>
    </div>
  );
};

export default HomeViewFooter;
