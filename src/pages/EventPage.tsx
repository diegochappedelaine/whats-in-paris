import { useState } from "react";
import styled from "styled-components";
import parse from "html-react-parser";
import { useFetch } from "hooks";
import { useParams } from "react-router-dom";
import { useAppContext } from "provider/AppProvider";

import { GET_EVENT_BY_ID } from "api/end-points";
import { GetEventByIdQuery } from "global.d";
import { Container } from "components/layouts";
import { ImageModal } from "components/";

const Separator = styled.div`
  background: ${({ theme: { colors } }) => colors.grey200};
  height: 1px;
  width: 100%;
  margin-bottom: 24px;
`;

const BannerImage = styled.img`
  height: 380px;
  object-fit: cover;
  filter: brightness(80%);
  margin-bottom: 40px;
  &:hover {
    cursor: pointer;
    filter: brightness(70%);
  }
  transition: filter 0.2s ease-out;
`;

const ArticleContainer = styled.article`
  max-width: 765px;
  width: 100%;
  margin: 0 auto;

  ${({ theme: { colors, fontSize } }) => `
    h1 {
      color: ${colors.grey800};
      font-size: ${fontSize.articleHeading};
      font-weight: 700;
      line-height: 55px;
      margin-bottom: 8px;
    }

    h2 {
      color: ${colors.grey800};
      font-size: ${fontSize.textMedium};
      font-weight: 700;
      margin-bottom: 24px;

      span {
        color: ${colors.grey600};
        font-weight: 300;
      }
    }

    p {
      color: ${colors.grey600};
      font-size: ${fontSize.textMedium};
      font-weight: 300;
      line-height: 24px;
    }
      
    `}
`;

const EventPage = () => {
  const { id } = useParams<{ id: string }>();
  const [isModalDisplayed, setIsModalDisplayed] = useState<boolean>(false);
  const { handleFavoriteEvent, favoritesEvents } = useAppContext();
  const { data, loading } = useFetch<GetEventByIdQuery>(
    `${GET_EVENT_BY_ID}/${id}`
  );

  if (loading) return <p>Loading</p>;
  if (!data) return <p>No data</p>;

  const event = data.record;

  return (
    <Container>
      {isModalDisplayed && (
        <ImageModal
          imgSrc={event.fields.cover.url}
          closeModal={() => setIsModalDisplayed(false)}
        />
      )}
      <BannerImage
        src={event.fields.cover.url}
        alt={event.fields.title}
        onClick={() => setIsModalDisplayed((value) => !value)}
      />
      <ArticleContainer>
        <h1>{event.fields.title}</h1>
        <h2>
          {event.fields.category} <span>@{event.fields.address_name}</span>
        </h2>
        <Separator />
        <p>{parse(event.fields.description)}</p>
      </ArticleContainer>
    </Container>
  );
};

export default EventPage;
