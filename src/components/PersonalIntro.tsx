import "./PersonalIntro.css";
import headshot from "../img/Headshot-PurpleFlannel.png";

const PersonalIntro = () => {
  return (
    <div className='PersonalIntro'>
      <img src={headshot} alt='jake-headshot-img' />
      <p>Hi I'm Jake</p>
    </div>
  );
};

export default PersonalIntro;
