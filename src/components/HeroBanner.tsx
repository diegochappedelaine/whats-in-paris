import styled from "styled-components";
import { Container } from "components/layouts";

import { FestivitesImg, MuseumImg, Party } from "assets/images";

import { retreiveRandomElementFromArray } from "utils";

const Background = styled.div`
  background: ${({ theme: { colors } }) => colors.grey100};
`;

const Section = styled.section`
  display: flex;
  align-items: center;
  padding: 100px 0;

  > div {
    width: 100%;
    text-align: center;

    @media (min-width: 800px) {
      width: 50%;
    }
  }

  > div:last-child {
    display: none;

    @media (min-width: 800px) {
      display: block;
    }
  }

  img {
    width: 80%;
  }
`;

const TextSection = styled.div`
  ${({ theme: { colors, fontSize } }) => `
    h1 {
      font-size: ${fontSize.heading1};
      font-weight: 700;
      line-height: 73px;
      margin-bottom: 16px;
    }

    p {
      color: ${colors.grey700};
      font-size: ${fontSize.subtitle};
      text-transform: lowercase;
    }
  `}
`;

const Images = [FestivitesImg, MuseumImg, Party];

const Image = retreiveRandomElementFromArray(Images);

const HeroBanner = () => {
  return (
    <Background>
      <Container>
        <Section>
          <TextSection>
            <h1>
              Paris <br />
              différement
            </h1>
            <p>Sorties, expo, concerts</p>
          </TextSection>
          <div>
            <img src={Image} alt="" />
          </div>
        </Section>
      </Container>
    </Background>
  );
};

export default HeroBanner;
