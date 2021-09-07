import { useState } from "react";
import styled from "styled-components";
import parse from "html-react-parser";
import { useFetch } from "hooks";
import { useParams } from "react-router-dom";

import { GET_EVENT_BY_ID } from "api/end-points";
import { GetEventByIdQuery } from "global.d";
import { Container } from "components/layouts";
import {
  ImageModal,
  HandleFavorite as _HandleFavorite,
  Loading,
  EventInfobox,
} from "components";

const HandleFavorite = styled(_HandleFavorite)`
  right: -40px;
`;

const Separator = styled.div`
  background: ${({ theme: { colors } }) => colors.grey200};
  height: 1px;
  width: 100%;
  margin-bottom: 24px;
`;

const BannerImage = styled.img`
  height: 380px;
  object-fit: cover;
  object-position: 50% top;
  filter: brightness(80%);
  margin-bottom: 40px;
  &:hover {
    cursor: pointer;
    filter: brightness(70%);
  }
  transition: filter 0.2s ease-out;
`;

const ArticleContainer = styled.article`
  position: relative;
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

const ParsedContent = styled.div`
  * {
    margin-bottom: 16px;
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

  const eventId = data.record.id;
  const event = data.record.fields;

  const contacts = {
    name: event.contact_name,
    url: event.contact_url,
    twitter: event.contact_twitter,
    phone: event.contact_phone,
    facebook: event.contact_facebook,
    mail: event.contact_mail,
  };

  const eventInfos = {
    date_description: event.date_description,
    address_name: event.address_name,
    address_street: event.address_street,
    address_zipcode: event.address_zipcode,
    itinary: event.transport,
  };

  const priceInfos = {
    price_type: event.price_type,
    detail: event.price_detail,
  };

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
        <ArticleContainer>
          <HandleFavorite id={eventId} defaultBackgroundColor="lightgrey" />
          <h1>{event.title}</h1>
          <h2>
            {event.category} <span>@{event.address_name}</span>
          </h2>
          <Separator />
          <ParsedContent>{parse(event.description)}</ParsedContent>
          <EventInfobox
            event={eventInfos}
            contact={contacts}
            position={{ lat: event.lat_lon.lat, long: event.lat_lon.lon }}
            price={priceInfos}
          />
        </ArticleContainer>
      </Container>
    </>
  );
};

export default EventPage;
