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
      <h1>Erreur: aucunes données disponible, veuillez réésayer plus tard</h1>
    </Container>
  );
};

export default Loading;
