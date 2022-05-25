import BallotGrid from "../components/ballots/ballotGrid";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { MongoClient } from "mongodb";

export default function Home(props) {
  return (
    <div>
      <h1 className={styles.title}>VOTING DAPP</h1>
      <BallotGrid ballots={props.ballots} />
      <Link href="/new-ballot">
        <button className={styles.button}>ADD NEW BALLOT</button>
      </Link>
    </div>
  );
}

export async function getStaticProps() {
  const client = await MongoClient.connect(
    "mongodb+srv://kshitij_chakravarty:" +
      String(process.env.MONGO_PASSWORD) +
      "@cluster0.ldj4x.mongodb.net/ballots?retryWrites=true&w=majority"
  );
  const db = client.db();
  const ballotsCollection = db.collection("ballots");
  const ballots = await ballotsCollection.find().toArray();

  client.close();

  return {
    props: {
      ballots: ballots.map((ballot) => ({
        title: ballot.data.title,
        description: ballot.data.description,
        id: String(ballot._id),
      })),
    },
    revalidate: 1,
  };
}
