// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { MongoClient } from "mongodb";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    // storing data in mongo db database
    const client = await MongoClient.connect(
      "mongodb+srv://kshitij_chakravarty:" +
        String(process.env.MONGO_PASSWORD) +
        "@cluster0.ldj4x.mongodb.net/ballots?retryWrites=true&w=majority"
    );
    const db = client.db();
    const ballotsCollection = db.collection("ballots");
    const result = await ballotsCollection.insertOne({ data });

    res.status(201).json({ message: "Ballot inserted!" });
  }
}
