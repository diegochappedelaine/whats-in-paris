import { Container } from "components/layouts";

import { FestivitesImg, MuseumImg, PartyImg } from "assets/images";

import { retreiveRandomElementFromArray } from "utils";

import { Background, TextSection, Section } from "./HeroBanner.styled";

const Images = [FestivitesImg, MuseumImg, PartyImg];

const Image = retreiveRandomElementFromArray(Images);

const HeroBanner = () => {
  return (
    <Background>
      <Container>
        <Section>
          <TextSection>
            <h1>
              Paris,
              <br />
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
