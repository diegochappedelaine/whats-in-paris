import styled from "styled-components";
import parse from "html-react-parser";
import { capitalizeFirstLetter } from "utils";
import {
  FaTwitterSquare,
  FaFacebookSquare,
  FaPhoneSquareAlt,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const Wrapper = styled.div`
  background: ${({ theme: { colors } }) => colors.grey100};
  width: 100%;
  margin-top: 60px;
  margin-bottom: 60px;
  padding: 20px 30px;
  box-sizing: border-box;

  h2 {
    margin-bottom: 8px;
  }

  p {
    margin-bottom: 16px;
  }

  a {
    color: ${({ theme: { colors } }) => colors.grey600};
  }

  nav {
    margin-top: 16px;
    a {
      margin-right: 16px;
      font-size: 24px;
    }
  }
`;

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
  position: {
    lat: number;
    long: number;
  };
  price: {
    price_type: string;
    detail: string | null;
  };
};

const EventInfobox: React.FC<EventInfoboxProps> = ({
  event,
  contact,
  position,
  price,
}) => {
  return (
    <>
      <h1>Informations</h1>
      <Wrapper>
        <h2>Dates</h2>
        <p>{parse(event.date_description)}</p>
        <h2>Prix</h2>
        <p>
          {capitalizeFirstLetter(price.price_type)}{" "}
          {!!price.detail?.length && `: ${price.detail}`}
        </p>
        <h2>S'y rendre</h2>
        <p>
          {event.address_name}
          <br />
          {event.address_street}
          <br />
          {event.address_zipcode}
        </p>
        <h2>En transport</h2>
        <p>{event.itinary}</p>
        <h2>Contacts</h2>
        <a href={contact.url} target="_blank" rel="noopener noreferrer">
          {contact.name}
        </a>
        <nav>
          {contact?.facebook && (
            <a href={contact.facebook}>
              <FaFacebookSquare />
            </a>
          )}
          {contact?.twitter && (
            <a href={contact.twitter}>
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
