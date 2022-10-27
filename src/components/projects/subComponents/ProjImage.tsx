interface Props {
  imgSrc: string;
  imgSrc_Fallback: string;
  imgAltTxt: string;
  media_ScrollRef: any;
}

const ProjImage = ({
  imgSrc,
  imgSrc_Fallback,
  imgAltTxt,
  media_ScrollRef,
}: Props) => {
  return (
    <section ref={media_ScrollRef} className='ProjImage full-w-h'>
      <div className='content-section full-w-h'>
        <picture>
          <source srcSet={imgSrc} />
          <img src={imgSrc_Fallback} alt={imgAltTxt} />
        </picture>
      </div>
    </section>
  );
};

export default ProjImage;
