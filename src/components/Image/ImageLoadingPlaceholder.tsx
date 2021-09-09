import styled from "styled-components";
import { ImgLoading } from "assets/images";

const ImageWrapper = styled.div<{ $isLoaded: boolean }>`
  height: 100%;
  width: 100%;
  background: lightgrey;
  display: ${({ $isLoaded }) => ($isLoaded ? "none" : "grid")};
  place-items: center;
  border-radius: 5px 5px 0 0;

  @media (min-width: ${({ theme: { breakpoints } }) =>
      `${breakpoints.mobile}px`}) {
    max-width: 50%;
    width: 100%;
    border-radius: 0 5px 5px 0;
  }
`;

const ImageLoadingPlaceholder: React.FC<{ isLoaded: boolean }> = ({
  isLoaded,
}) => {
  return (
    <ImageWrapper $isLoaded={isLoaded}>
      <img src={ImgLoading} alt="Loading" />
    </ImageWrapper>
  );
};

export default ImageLoadingPlaceholder;
