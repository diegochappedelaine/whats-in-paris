import { useState, useRef, useEffect } from "react";
import ImageLoadingPlaceholder from "./ImageLoadingPlaceholder";

const Thumbnail: React.FC<{ src: string }> = ({ src }) => {
  const imgEl = useRef<HTMLImageElement>(null);
  const [loaded, setLoaded] = useState(false);

  const onImageLoaded = () => setLoaded(true);

  useEffect(() => {
    const imgElCurrent = imgEl.current;

    if (imgElCurrent) {
      imgElCurrent.addEventListener("load", onImageLoaded);
      return () => imgElCurrent.removeEventListener("load", onImageLoaded);
    }
  }, [imgEl]);

  return (
    <>
      <ImageLoadingPlaceholder isLoaded={loaded} />
      <img
        ref={imgEl}
        src={src}
        alt="a placeholder"
        style={loaded ? { display: "inline-block" } : { display: "none" }}
      />
    </>
  );
};

export default Thumbnail;
