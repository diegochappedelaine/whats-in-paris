import styled from "styled-components";

const Wrapper = styled.div`
  max-width: 966px;
  margin: 0 auto;
  padding: 0 32px;
`;

const Container: React.FC = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default Container;
