import { animated } from "react-spring";

interface Props {
  title: string;
  desc: string;
  transStyle: any;
  tech_ScrollRef: React.MutableRefObject<null>;
  about_ScrollRef: React.MutableRefObject<null>;
}

const ProjDescPortfolio = ({
  title,
  desc,
  transStyle,
  tech_ScrollRef,
  about_ScrollRef,
}: Props) => {
  return (
    <animated.div
      style={transStyle}
      className='ProjDescPortfolio full-w-h
  '>
      <section ref={tech_ScrollRef} className='content-section tech-skills-ctr'>
        Tech and Skills
      </section>
      <section ref={about_ScrollRef} className='content-section about-ctr'>
        About Project
      </section>
    </animated.div>
  );
};

export default ProjDescPortfolio;
