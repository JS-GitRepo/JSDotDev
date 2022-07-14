import "./ProjDescPortfolio.css";

interface Props {
  title: string;
  desc: string;
}

const ProjDescPortfolio = ({ title, desc }: Props) => {
  return (
    <div
      className="ProjDescPortfolio
  ">
      {title}
    </div>
  );
};

export default ProjDescPortfolio;
