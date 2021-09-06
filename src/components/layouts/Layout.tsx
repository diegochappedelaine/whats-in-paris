import styled from "styled-components";

const PageLayout = styled.main``;

const Layout: React.FC = ({ children }) => {
  return <PageLayout>{children}</PageLayout>;
};

export default Layout;
