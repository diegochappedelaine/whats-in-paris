import styled from "styled-components";
import parse from "html-react-parser";
import { Link } from "react-router-dom";
import { HandleFavorite } from "components";

const Container = styled.article`
  position: relative;
  border: 1px solid #e2e2e2;
  box-sizing: border-box;
  box-shadow: 0px 5px 4px rgba(221, 221, 221, 0.25);
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  margin-bottom: 60px;
  height: 100%;
  @media (min-width: 800px) {
    flex-direction: row;
  }

  img {
    display: block;
    width: 100%;
    object-fit: cover;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;

    @media (min-width: 800px) {
      max-width: 50%;
      width: 100%;
    }
  }
`;

const TextContainer = styled.div`
  padding: 60px;
  @media (min-width: 800px) {
    width: 50%;
  }
  display: flex;
  flex-direction: column;
  ${({ theme: { colors, fontSize } }) => `
    h2 {
        font-size: ${fontSize.subtitle};
        color: ${colors.grey800};
        font-weight: 700;
        line-height: 40px;
        margin-bottom: 32px;
    }

    p, span {
        font-size: ${fontSize.textSmall};
        color: ${colors.grey600};
        line-height: 24px;
    }

    .hover {
        font-size: ${fontSize.textSmall};
        color: ${colors.grey600};
        line-height: 24px;
        font-weight: 700;
        text-decoration: none;
        transition: color 0.1s ease-out;

        &:hover {
          color: ${colors.grey800};
        }
    }

    div {
        margin-top: auto;
        display: flex;
        justify-content: space-between
    }
  `};
`;

const UnStyledLink = styled(Link)`
  text-decoration: none;
`;

type EventCardProps = {
  className?: string;
  event: {
    title: string;
    description: string;
    date_start: string;
    date_end: string;
    img: string;
    id: string;
  };
};

const EventCard: React.FC<EventCardProps> = ({ className, event }) => {
  return (
    <UnStyledLink className={className} to={{ pathname: `/event/${event.id}` }}>
      <Container>
        <HandleFavorite id={event.id} />
        <TextContainer>
          <h2>{event.title}</h2>
          <p>{parse(event.description)}</p>
          <div>
            <span>
              {new Date(event.date_start).toLocaleDateString()} -{" "}
              {new Date(event.date_end).toLocaleDateString()}
            </span>
            <span className="hover">En savoir plus</span>
          </div>
        </TextContainer>
        <img src={event.img} alt={event.title} />
      </Container>
    </UnStyledLink>
  );
};

export default EventCard;
