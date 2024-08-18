import MeetupDetail from '../../components/meetups/MeetupDetail';
import { useRouter } from 'next/router';
import DUMMY_MEETUPS from '../../data/dummy'


function MeetupDetails() {
  const router = useRouter();
  const meetupId = router.query.meetupId;

  const meetup = DUMMY_MEETUPS.find((meetup) => meetup.id === meetupId);

  if (!meetup) {
    return <p>Meetup not found</p>;
  }

  return (
    <MeetupDetail
      image={meetup.image}
      title={meetup.title}
      address={meetup.address}
      description={meetup.description}
    />
  );
}

export default MeetupDetails;
