import styled from "styled-components";

const PageLayout = styled.main`
  margin-top: 68px;
`;

const Layout: React.FC = ({ children }) => {
  return <PageLayout>{children}</PageLayout>;
};

export default Layout;
