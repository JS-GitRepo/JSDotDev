import "./styles/PersonalIntro.css";
import headshot from "../img/Headshot-PurpleFlannel.png";

const PersonalIntro = () => {
  return (
    <div className='PersonalIntro'>
      <img src={headshot} alt='jake-headshot-img' />
      <p>Hello! I'm Jake</p>
    </div>
  );
};

export default PersonalIntro;
