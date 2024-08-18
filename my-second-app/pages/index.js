import MeetupList from '../components/meetups/MeetupList';
import DUMMY_MEETUPS from '../data/dummy'

function HomePage() {
  return <MeetupList meetups={DUMMY_MEETUPS} />
}

export default HomePage;