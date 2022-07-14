import "./ProjDescBlog.css";

interface Props {
  title: string;
  desc: string;
}

const ProjDescBlog = ({ title, desc }: Props) => {
  return <div className="ProjDescBlog">{title}</div>;
};

export default ProjDescBlog;
