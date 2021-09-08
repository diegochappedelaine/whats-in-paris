import styled from "styled-components";
import {
  HandleFavorite as _HandleFavorite,
  EventInfobox,
  Separator,
} from "components";
import { GetEventByIdQuery } from "global.d";
import parse from "html-react-parser";

const HandleFavorite = styled(_HandleFavorite)`
  @media (min-width: 800px) {
    right: -40px;
  }
`;

const Container = styled.article`
  position: relative;
  max-width: 765px;
  width: 100%;
  margin: 0 auto;
  padding: 0 8px;

  @media (min-width: 800px) {
    padding: O;
  }

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
    img {
      max-width: 100%;
    }
  }
`;

type ArticleContainerProps = {
  id: string;
  event: GetEventByIdQuery["record"]["fields"];
};

const ArticleContainer: React.FC<ArticleContainerProps> = ({ event, id }) => {
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
    <Container>
      <HandleFavorite id={id} defaultBackgroundColor="lightgrey" />
      <h1>{event.title}</h1>
      <h2>
        {event.category} <span>@{event.address_name}</span>
      </h2>
      <Separator />
      <ParsedContent>{parse(event.description)}</ParsedContent>
      <Separator />
      <EventInfobox
        event={eventInfos}
        contact={contacts}
        position={{ lat: event.lat_lon.lat, long: event.lat_lon.lon }}
        price={priceInfos}
      />
    </Container>
  );
};

export default ArticleContainer;
