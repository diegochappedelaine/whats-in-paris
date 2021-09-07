import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

type ImageModalProps = {
  closeModal: () => void;
  imgSrc: string;
};

const ImageModal: React.FC<ImageModalProps> = ({ closeModal, imgSrc }) => {
  return (
    <Lightbox mainSrc={imgSrc} onCloseRequest={closeModal} enableZoom={false} />
  );
};

export default ImageModal;
