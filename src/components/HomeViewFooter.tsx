import "./HomeViewFooter.css";

interface Props {
  pathname: string;
}

const HomeViewFooter = ({ pathname }: Props) => {
  return (
    <div className="HomeViewFooter">
      <div className="project-nav-ctr">
        <div className="project-nav">
          <span className="material-symbols-outlined">chevron_left</span>
          <h2>Deerfall</h2>
          <span className="material-symbols-outlined">chevron_right</span>
        </div>

        <div className="project-nav-type-cat">
          <a>Game Dev</a>
          <a>Web Dev</a>
        </div>
      </div>
    </div>
  );
};

export default HomeViewFooter;
