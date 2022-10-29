import { useRef } from "react";

interface Props {
  vidSrc: string;
  vidSrc_Fallback: string;
  vidSrc_Fallback2: string;
  vidPoster: string;
  media_ScrollRef: any;
}

const ProjVideo = ({
  vidSrc,
  vidSrc_Fallback,
  vidSrc_Fallback2,
  vidPoster,
  media_ScrollRef,
}: Props) => {
  return (
    <section ref={media_ScrollRef} className='ProjVideo'>
      <div className='video-ctr'>
        <video autoPlay loop muted playsInline poster={vidPoster}>
          <source src={vidSrc} type='video/mp4' />
          <source src={vidSrc_Fallback} type='video/mp4' />
          <source src={vidSrc_Fallback2} type='video/mp4' />
        </video>
      </div>
    </section>
  );
};

export default ProjVideo;
