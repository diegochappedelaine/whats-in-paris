import styled from "styled-components";

const Wrapper = styled.div`
  max-width: 966px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;

  @media (min-width: 800px) {
    padding: 0 32px;
  }
`;

const Container: React.FC<{ className?: string }> = ({
  children,
  className,
}) => {
  return <Wrapper className={className}>{children}</Wrapper>;
};

export default Container;
