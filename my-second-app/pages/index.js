import MeetupList from '../components/meetups/MeetupList';
import { MongoClient } from 'mongodb';
import Head from 'next/head';


function HomePage(props) {
  return (
    <>
    <Head>
        <title>Coldplay Concerts</title>
        <meta
          name='description'
          content='Browse a huge list of highly active Coldplay Concerts!'
        />
      </Head>
      <MeetupList meetups={props.meetups} />

    </>
  )
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