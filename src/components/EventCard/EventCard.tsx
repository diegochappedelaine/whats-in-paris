import parse from "html-react-parser";
import { HandleFavorite } from "components";
import { UnStyledLink, Container, TextContainer } from "./EventCard.styled";

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
