import "./HomeViewContent.css";
import bannerVid from "../img/MainBanner-H264.mp4";

interface Props {
  pathname: string;
}

const HomeViewContent = ({ pathname }: Props) => {
  return (
    <div className="HomeViewContent">
      <video autoPlay loop muted playsInline>
        <source src={bannerVid} type="video/mp4" />
      </video>
    </div>
  );
};

export default HomeViewContent;
