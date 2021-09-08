import { EventInfobox, Separator } from "components";
import { GetEventByIdQuery } from "types";
import parse from "html-react-parser";
import {
  Container,
  HandleFavorite,
  ParsedContent,
} from "./ArticleContainer.styled";

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
