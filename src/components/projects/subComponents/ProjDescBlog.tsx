import { animated } from "react-spring";
import "./ProjDescBlog.css";

interface Props {
  title: string;
  desc: string;
  transStyle: any;
}

const ProjDescBlog = ({ title, desc, transStyle }: Props) => {
  return (
    <animated.div style={transStyle} className='ProjDescBlog'>
      <p>Blog functionality is currently WIP!</p>
      <p>Coming Soon</p>
    </animated.div>
  );
};

export default ProjDescBlog;
