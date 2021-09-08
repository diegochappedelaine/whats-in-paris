import { Link } from "react-router-dom";
import { Container } from "components/layouts";
import { NoResultImg } from "assets/images";

import styled from "styled-components";

const Wrapper = styled.div`
  height: calc(100vh - 68px);
  display: grid;
  place-items: center;
  > div {
    display: flex;
    flex-direction: column;
    align-items: center;

    ${({ theme: { colors, fontSize } }) => `
      h1 {
        color: ${colors.grey800};
        font-size: ${fontSize.articleHeading};
        font-weight: 700;
        line-height: 55px;
        margin-bottom: 8px;
      }

      a {
        color: ${colors.grey800};
        font-size: ${fontSize.textMedium};
        font-weight: 700;
        margin-top: 32px;
      }
    `}

    img {
      width: 40%;
    }
  }
`;

const FavoriteEmptyState = () => {
  return (
    <Container>
      <Wrapper>
        <div>
          <h1>Vous n'avez pas encore de favoris</h1>
          <img src={NoResultImg} alt="Pas de résultats" />
          <Link to="/">Commencer à naviguer</Link>
        </div>
      </Wrapper>
    </Container>
  );
};

export default FavoriteEmptyState;
