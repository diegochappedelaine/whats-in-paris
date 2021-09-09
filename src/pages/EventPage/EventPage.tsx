import { useState } from "react";
import { useFetch, useTitle } from "hooks";
import { useParams } from "react-router-dom";

import { GET_EVENT_BY_ID } from "api/end-points";
import { GetEventByIdQuery } from "types";
import { Container } from "components/layouts";
import { ImageModal, Loading, ArticleContainer, Error } from "components";
import { BannerImage } from "./EventPage.styled";

const EventPage = () => {
  const { id } = useParams<{ id: string }>();
  const [isModalDisplayed, setIsModalDisplayed] = useState<boolean>(false);
  const { data, loading } = useFetch<GetEventByIdQuery>(
    `${GET_EVENT_BY_ID}/${id}`
  );

  useTitle(
    data?.record.fields.title
      ? `quoiDeNeuf: ${data?.record.fields.title}`
      : `quoiDeNeuf`
  );

  if (loading) return <Loading height={"calc(100vh - 68px)"} />;
  if (!data?.record) return <Error />;

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
