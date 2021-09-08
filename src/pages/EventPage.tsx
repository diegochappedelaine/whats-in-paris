import { useState } from "react";
import styled from "styled-components";
import { useFetch } from "hooks";
import { useParams } from "react-router-dom";

import { GET_EVENT_BY_ID } from "api/end-points";
import { GetEventByIdQuery } from "types";
import { Container } from "components/layouts";
import { ImageModal, Loading, ArticleContainer } from "components";

const BannerImage = styled.img`
  height: 380px;
  object-fit: cover;
  object-position: 50% top;
  filter: brightness(80%);
  margin-bottom: 40px;
  transition: filter 0.2s ease-out;

  &:hover {
    cursor: pointer;
    filter: brightness(70%);
  }
`;

const EventPage = () => {
  const { id } = useParams<{ id: string }>();
  const [isModalDisplayed, setIsModalDisplayed] = useState<boolean>(false);
  const { data, loading } = useFetch<GetEventByIdQuery>(
    `${GET_EVENT_BY_ID}/${id}`
  );

  if (loading) return <Loading />;
  if (!data?.record) return <p>No data</p>;

  const { id: eventId, fields: event } = data.record;

  return (
    <>
      <Container>
        {isModalDisplayed && (
          <ImageModal
            imgSrc={event.cover.url}
            closeModal={() => setIsModalDisplayed(false)}
          />
        )}
        <BannerImage
          src={event.cover.url}
          alt={event.cover_alt}
          onClick={() => setIsModalDisplayed(true)}
        />
        <ArticleContainer event={event} id={eventId} />
      </Container>
    </>
  );
};

export default EventPage;
