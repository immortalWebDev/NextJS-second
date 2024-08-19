import { MongoClient } from 'mongodb';

async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const data = req.body;

      const client = await MongoClient.connect(
        'mongodb+srv://pgbadgujar007:p8T5jWD7SLoNlDC0@cluster0.qnxq8.mongodb.net/testing?retryWrites=true&w=majority&connectTimeoutMS=10000'
      );
      const db = client.db();
      const meetupsCollection = db.collection('meetups');

      const result = await meetupsCollection.insertOne(data);

      console.log(result);

      client.close();

      res.status(201).json({ message: 'Meetup inserted!' });
    } catch (error) {
      console.error('Failed to insert meetup:', error);
      res.status(500).json({ message: 'Failed to insert meetup' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

export default handler;
