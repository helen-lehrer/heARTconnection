// External Dependencies
import * as mongoDB from "mongodb";
import * as dotenv from "dotenv";
// Global Variables
export const collections: { posts?: mongoDB.Collection } = {}
// Initialize Connection
export async function connectToDatabase () {
  dotenv.config();

  if (process.env.DATABASE_URL && process.env.POSTS_COLLECTION_NAME) {
    const client: mongoDB.MongoClient = new mongoDB.MongoClient(process.env.DATABASE_URL);  

  await client.connect();
      
  const db: mongoDB.Db = client.db(process.env.DB_NAME);
 
  const postsCollection: mongoDB.Collection = db.collection(process.env.POSTS_COLLECTION_NAME);

  collections.posts = postsCollection;
     
       console.log(`Successfully connected to database: ${db.databaseName} and collection: ${postsCollection.collectionName}`);
}

}
// const { MongoClient } = require("mongodb");
// // Replace the uri string with your connection string.
// const uri = "mongodb+srv://hlehrer:4540Brook@heartconnection.suturxq.mongodb.net/heartconnection?retryWrites=true&w=majority";
// const client = new MongoClient(uri);
// async function run() {
//   try {
//     const database = client.db('sample_mflix');
//     const movies = database.collection('movies');
//     // Query for a movie that has the title 'Back to the Future'
//     const query = { title: 'Back to the Future' };
//     const movie = await movies.findOne(query);
//     console.log(movie);
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// run().catch(console.dir);