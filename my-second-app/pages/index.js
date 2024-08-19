import MeetupList from '../components/meetups/MeetupList';
import DUMMY_MEETUPS from '../data/dummy'
import { MongoClient } from 'mongodb';

function HomePage(props) {
  return <MeetupList meetups={props.meetups} />
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



// export async function getStaticProps() {

//     // fetch data from an API
//     return {
//       props: {
//         meetups: DUMMY_MEETUPS
//       },
//       revalidate: 1
//     }; 
//   }




export async function getStaticProps() {
    // fetch data from an API
    const client = await MongoClient.connect(
      'mongodb+srv://pgbadgujar007:p8T5jWD7SLoNlDC0@cluster0.qnxq8.mongodb.net/testing?retryWrites=true&w=majority&connectTimeoutMS=10000'
    );
    const db = client.db();
  
    const meetupsCollection = db.collection('meetups');
  
    const meetups = await meetupsCollection.find().toArray();
  
    client.close();
  
    return {
      props: {
        meetups: meetups.map((meetup) => ({
          title: meetup.title,
          address: meetup.address,
          image: meetup.image,
          id: meetup._id.toString(),
        })),
      },
      revalidate: 1,
    };
  }
  
  
export default HomePage;