import { Loader } from "assets/images";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 500px;
  display: grid;
  place-items: center;
`;

const Loading = () => {
  return (
    <Container>
      <img src={Loader} alt="loading" />
    </Container>
  );
};

export default Loading;
