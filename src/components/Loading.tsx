import { Loader } from "assets/images";
import styled from "styled-components";

const Container = styled.div<{ $height: string }>`
  width: 100%;
  height: ${({ $height }) => $height};
  display: grid;
  place-items: center;
`;

const Loading: React.FC<{ height?: string }> = ({ height = "500px" }) => {
  return (
    <Container $height={height}>
      <img src={Loader} alt="loading" />
    </Container>
  );
};

export default Loading;
