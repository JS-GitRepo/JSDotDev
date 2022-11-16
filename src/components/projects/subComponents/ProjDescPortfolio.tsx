import { useContext, useEffect, useState } from "react";
import { animated, useSpring } from "react-spring";
import AppContext from "../../../contexts/AppContext";
import { ProjectLinks } from "../../../models/Models";

interface Props {
  title: string;
  about: string;
  tech: string[];
  skills: string[];
  techDesc: string;
  projLinks: ProjectLinks;
  transStyle: any;
  tech_ScrollRef: React.MutableRefObject<null>;
  about_ScrollRef: React.MutableRefObject<null>;
}

const ProjDescPortfolio = ({
  title,
  about,
  tech,
  skills,
  techDesc,
  transStyle,
  tech_ScrollRef,
  about_ScrollRef,
  projLinks,
}: Props) => {
  const { hueRotation, isMobile } = useContext(AppContext);
  const [toggleAbout, setToggleAbout] = useState(true);
  const [toggleTechDesc, setToggleTD] = useState(false);
  const [toggleLinks, setToggleLinks] = useState(false);
  const [maxHeight, setMaxHeight] = useState("225px");
  const springConfig = { mass: 1, tension: 140, friction: 28 };
  const aboutH1Spring = useSpring({
    to: { transform: toggleAbout ? "rotate(360deg)" : "rotate(270deg)" },
    config: springConfig,
  });
  const techDescH1Spring = useSpring({
    to: { transform: toggleTechDesc ? "rotate(360deg)" : "rotate(270deg)" },
    config: springConfig,
  });
  const linksH1Spring = useSpring({
    to: { transform: toggleLinks ? "rotate(360deg)" : "rotate(270deg)" },
    config: springConfig,
  });
  const aboutPSpring = useSpring({
    to: { height: toggleAbout ? maxHeight : "0px" },
    config: springConfig,
  });
  const techDescPSpring = useSpring({
    to: { height: toggleTechDesc ? maxHeight : "0px" },
    config: springConfig,
  });
  const linksULSpring = useSpring({
    to: { height: toggleLinks ? "175px" : "0px" },
    config: springConfig,
  });

  const closeAllAbout = async (
    set: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    if (set !== setToggleAbout) setToggleAbout(false);
    if (set !== setToggleTD) setToggleTD(false);
    if (set !== setToggleLinks) setToggleLinks(false);
  };

  const handleToggle = async (
    set: React.Dispatch<React.SetStateAction<boolean>>,
    toggle: boolean,
    isHover: boolean
  ) => {
    if (isHover) {
      if (!toggle) {
        closeAllAbout(set).then(() => set(!toggle));
      }
    } else {
      closeAllAbout(set).then(() => set(!toggle));
    }
  };

  useEffect(() => {
    isMobile ? setMaxHeight("225px") : setMaxHeight("125px");
  }, [isMobile]);

  return (
    <animated.div
      style={transStyle}
      className='ProjDescPortfolio full-w-h
  '>
      <section ref={tech_ScrollRef} className='content-section tech-skills-ctr'>
        <div className='content-ctr'>
          <h1>Technologies Leveraged</h1>
          <div className='technologies-ctr'>
            {tech.map((tech, i) => (
              <p className='tech-p' key={`technology #${i}`}>
                {tech.toUpperCase()}
              </p>
            ))}
          </div>

          <h1>Skills Developed</h1>
          <div className='skills-ctr'>
            {skills.map((skill, i) => (
              <p className='skill-p' key={`skill #${i}`}>
                {skill}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section ref={about_ScrollRef} className='content-section about-ctr'>
        <div className='content-ctr'>
          <h1
            className='prevent-selection'
            onClick={() =>
              isMobile ? handleToggle(setToggleAbout, toggleAbout, false) : ""
            }
            onMouseEnter={() =>
              isMobile ? "" : handleToggle(setToggleAbout, toggleAbout, true)
            }>
            {`About Project `}
            <animated.span className='about-expand' style={aboutH1Spring}>
              v
            </animated.span>
          </h1>
          <animated.p className='about-p' style={aboutPSpring}>
            {about}
          </animated.p>

          <h1
            className='prevent-selection'
            onClick={() =>
              isMobile ? handleToggle(setToggleTD, toggleTechDesc, false) : ""
            }
            onMouseEnter={() =>
              isMobile ? "" : handleToggle(setToggleTD, toggleTechDesc, true)
            }>
            {`Technical Description `}
            <animated.span style={techDescH1Spring} className='tech-expand'>
              v
            </animated.span>
          </h1>
          <animated.p className='techDesc-p' style={techDescPSpring}>
            {techDesc}
          </animated.p>

          <h1
            className='prevent-selection'
            onClick={() =>
              isMobile ? handleToggle(setToggleLinks, toggleLinks, false) : ""
            }
            onMouseEnter={() =>
              isMobile ? "" : handleToggle(setToggleLinks, toggleLinks, true)
            }>
            {`Links `}
            <animated.span className='links-expand' style={linksH1Spring}>
              v
            </animated.span>
          </h1>
          <animated.ul className='link-list' style={linksULSpring}>
            <li>
              <animated.a
                className='proj-link'
                style={hueRotation}
                href={projLinks.github}>
                Github
              </animated.a>
            </li>
            <li>
              <animated.a
                className='proj-link'
                style={hueRotation}
                href={projLinks.demo}>
                Demo
              </animated.a>
            </li>
          </animated.ul>
        </div>
      </section>
    </animated.div>
  );
};

export default ProjDescPortfolio;
