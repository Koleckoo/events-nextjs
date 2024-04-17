import { useRouter } from "next/router";
import { getEventById } from "../../dummy-data";
import EventSummary from "../../components/event/event-summary";
import EventLogistics from "../../components/event/event-logistics";
import EventContent from "../../components/event/event-content";
import ErrorAlert from "../../components/ui/error-alert";

export default function EventDetailPage() {
  const router = useRouter();

  const eventId = router.query.eventId;
  const event = getEventById(eventId);
  console.log(event);

  if (!event) {
    return <ErrorAlert>No event found!</ErrorAlert>;
  }

  return (
    <>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </>
  );
}
