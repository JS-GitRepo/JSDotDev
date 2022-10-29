import { animated } from "react-spring";

interface Props {
  title: string;
  desc: string;
  transStyle: any;
  blog_ScrollRef: React.MutableRefObject<null>;
}

const ProjDescBlog = ({ title, desc, transStyle, blog_ScrollRef }: Props) => {
  return (
    <animated.div
      ref={blog_ScrollRef}
      style={transStyle}
      className='ProjDescBlog full-w-h'>
      <section className='content-section blog-ctr'>
        Blog posts will someday live here!
      </section>
    </animated.div>
  );
};

export default ProjDescBlog;
