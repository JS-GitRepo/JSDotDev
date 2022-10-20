import { animated } from "react-spring";
import "./ProjDescPortfolio.css";

interface Props {
  title: string;
  desc: string;
  transStyle: any;
}

const ProjDescPortfolio = ({ title, desc, transStyle }: Props) => {
  return (
    <animated.div
      style={transStyle}
      className='ProjDescPortfolio
  '>
      <p>Portfolio functionality is currently WIP!</p>
      <p>Coming Soon</p>
    </animated.div>
  );
};

export default ProjDescPortfolio;
