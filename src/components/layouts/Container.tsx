import styled from "styled-components";

const Wrapper = styled.div`
  max-width: 966px;
  margin: 0 auto;
  padding: 0 32px;
  display: flex;
  flex-direction: column;
`;

const Container: React.FC<{ className?: string }> = ({
  children,
  className,
}) => {
  return <Wrapper className={className}>{children}</Wrapper>;
};

export default Container;
