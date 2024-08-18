import MeetupList from '../components/meetups/MeetupList';
import DUMMY_MEETUPS from '../data/dummy'

function HomePage() {
  return <MeetupList meetups={DUMMY_MEETUPS} />
}

// export async function getServerSideProps(context) {
//   const req = context.req;
//   const res = context.res;

//   // fetch data from an API

//   return {
//     props: {
//       meetups: DUMMY_MEETUPS
//     }
//   };
// }


export async function getStaticProps() {

    // fetch data from an API
    return {
      props: {
        meetups: DUMMY_MEETUPS
      },
      revalidate: 1
    }; 
  }
  
export default HomePage;