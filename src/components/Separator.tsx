import styled from "styled-components";

const Line = styled.div`
  background: ${({ theme: { colors } }) => colors.grey200};
  height: 1px;
  width: 100%;
  margin-bottom: 24px;
`;

const Separator = () => {
  return <Line />;
};

export default Separator;
