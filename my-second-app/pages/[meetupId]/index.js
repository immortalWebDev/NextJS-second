import MeetupDetail from '../../components/meetups/MeetupDetail';
import DUMMY_MEETUPS from '../../data/dummy'

function MeetupDetails({ meetupData }) {
  if (!meetupData) {
    return <p>Meetup not found</p>;
  }

  return (
    <MeetupDetail
      image={meetupData.image}
      title={meetupData.title}
      address={meetupData.address}
      description={meetupData.description}
    />
  );
}

export async function getStaticPaths() {
  // Define the paths to pre-render based on meetupId
  return {
    fallback: false,
    paths: [
      { params: { meetupId: 'm1' } },
      { params: { meetupId: 'm2' } },
      { params: { meetupId: 'm3' } },
    ],
  };
}

export async function getStaticProps(context) {
  // Fetch data for a single meetup based on the meetupId
  const meetupId = context.params.meetupId;

  // Example of fetching data (static data for now)
  const meetupData = DUMMY_MEETUPS.find(meetup => meetup.id === meetupId);

  if (!meetupData) {
    return { notFound: true }; // Return a 404 page if the meetup isn't found
  }

  return {
    props: {
      meetupData,
    },
  };
}

export default MeetupDetails;
