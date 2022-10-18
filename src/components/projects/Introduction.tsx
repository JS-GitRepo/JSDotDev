import { useContext } from "react";
import { animated } from "react-spring";
import AppContext from "../../contexts/AppContext";
import headshot from "../../img/Headshot-PurpleFlannel.png";
import pixelBG from "../../img/pixelBG_LowRes.png";
import AppConfig from "../../AppConfig.json";
import "./Introduction.css";

const Introduction = () => {
  const { hueRotation, hueRotation_Inv } = useContext(AppContext);
  const introP1 = AppConfig.intro_txt_p1;
  const introP2 = AppConfig.intro_txt_p2;
  const introP3 = AppConfig.intro_txt_p3;
  const introP4 = AppConfig.intro_txt_p4;
  const introP5 = AppConfig.built_using_txt;

  return (
    <div className='Introduction'>
      <div className='bg-img-ctr'>
        <animated.img
          className={`bg-img`}
          style={hueRotation_Inv}
          src={pixelBG}
          alt='pixelart background image'
        />
      </div>
      <div className='content-ctr'>
        <div className='img-ctr'>
          <img className={"headshot"} src={headshot} alt='jake-headshot-img' />
          <animated.div
            className='img-bg-border'
            style={hueRotation}></animated.div>
        </div>
        <div className='text-ctr'>
          <h1>{introP1}</h1>
          <p>{introP2}</p>
          <p>{introP3}</p>
          <p>{introP4}</p>
          <h2>This website built from scratch utilizing:</h2>
          <animated.div className={"technologies"} style={hueRotation}>
            <p>{introP5}</p>
          </animated.div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
