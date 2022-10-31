import { useContext } from "react";
import { animated } from "react-spring";
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
  const { hueRotation } = useContext(AppContext);

  return (
    <animated.div
      style={transStyle}
      className='ProjDescPortfolio full-w-h
  '>
      <section ref={tech_ScrollRef} className='content-section tech-skills-ctr'>
        <div className='content-ctr'>
          <h1>Technologies Leveraged</h1>
          {tech.map((tech, i) => (
            <p className='tech-p' key={`technology #${i}`}>
              {tech.toUpperCase()}
            </p>
          ))}
          <h1>Skills Developed</h1>
          {skills.map((skill, i) => (
            <p className='skill-p' key={`skill #${i}`}>
              {skill}
            </p>
          ))}
        </div>
      </section>
      <section ref={about_ScrollRef} className='content-section about-ctr'>
        <div className='content-ctr'>
          <h1>About Project</h1>
          <p>{about}</p>
          <h1>Technical Description</h1>
          <p>{techDesc}</p>
          <h1>Links</h1>
          <animated.a
            className='proj-link'
            style={hueRotation}
            href={projLinks.github}>
            Github
          </animated.a>
          <animated.a
            className='proj-link'
            style={hueRotation}
            href={projLinks.demo}>
            Demo
          </animated.a>
        </div>
      </section>
    </animated.div>
  );
};

export default ProjDescPortfolio;
