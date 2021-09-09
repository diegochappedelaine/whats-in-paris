import parse from "html-react-parser";
import { capitalizeFirstLetter } from "utils";
import {
  FaTwitterSquare,
  FaFacebookSquare,
  FaPhoneSquareAlt,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { Title, Wrapper } from "./EventInfobox.styled";

type EventInfoboxProps = {
  event: {
    date_description: string;
    address_name: string;
    address_street: string;
    address_zipcode: string;
    itinary: string;
  };
  contact: {
    name: string;
    url: string;
    twitter: string | null;
    phone: string | null;
    facebook: string | null;
    mail: string | null;
  };

  price: {
    price_type: string;
    detail: string | null;
  };
};

const EventInfobox: React.FC<EventInfoboxProps> = ({
  event,
  contact,
  price,
}) => {
  return (
    <>
      <Title>Informations</Title>
      <Wrapper>
        <h3>Dates</h3>
        <p>{parse(event.date_description)}</p>
        <h3>Prix</h3>
        <p>
          {capitalizeFirstLetter(price.price_type)}{" "}
          {!!price.detail?.length && `: ${price.detail}`}
        </p>
        <h3>S'y rendre</h3>
        <p>
          {event.address_name && (
            <>
              {event.address_name}
              <br />
            </>
          )}
          {event.address_street}
          <br />
          {event.address_zipcode}
        </p>
        <h3>En transport</h3>
        <p>{event.itinary}</p>
        <h3>Contacts</h3>
        <a href={contact.url} target="_blank" rel="noopener noreferrer">
          {contact.name}
        </a>
        <nav>
          {contact?.facebook && (
            <a
              href={contact.facebook}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookSquare />
            </a>
          )}
          {contact?.twitter && (
            <a href={contact.twitter} target="_blank" rel="noopener noreferrer">
              <FaTwitterSquare />
            </a>
          )}
          {contact?.mail && (
            <a href={"mailto:" + contact.mail}>
              <HiOutlineMail />
            </a>
          )}
          {contact?.phone && (
            <a href={"tel:" + contact.phone}>
              <FaPhoneSquareAlt />
            </a>
          )}
        </nav>
      </Wrapper>
    </>
  );
};

export default EventInfobox;
