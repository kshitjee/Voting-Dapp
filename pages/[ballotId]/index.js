import BallotDetails from "../../components/ballots/BallotDetails";
import { MongoClient, ObjectId } from "mongodb";

export default function Ballot(props) {
  return (
    <BallotDetails
      title={props.ballotData.title}
      description={props.ballotData.description}
    />
  );
}

export async function getStaticPaths() {
  const client = await MongoClient.connect(
    "mongodb+srv://kshitij_chakravarty:" +
      String(process.env.MONGO_PASSWORD) +
      "@cluster0.ldj4x.mongodb.net/ballots?retryWrites=true&w=majority"
  );
  const db = client.db();
  const ballotsCollection = db.collection("ballots");
  const ballots = await ballotsCollection.find({}, { _id: 1 }).toArray();
  client.close();
  return {
    fallback: false,
    paths: ballots.map((ballot) => ({
      params: { ballotId: ballot._id.toString() },
    })),
  };
}

export async function getStaticProps(context) {
  // fetch data for a single ballot
  const ballotId = context.params.ballotId;
  console.log(ballotId);
  const client = await MongoClient.connect(
    "mongodb+srv://kshitij_chakravarty:" +
      String(process.env.MONGO_PASSWORD) +
      "@cluster0.ldj4x.mongodb.net/ballots?retryWrites=true&w=majority"
  );
  const db = client.db();
  const ballotsCollection = db.collection("ballots");
  const selectedBallot = await ballotsCollection.findOne({
    _id: ObjectId(ballotId),
  });
  console.log(selectedBallot);
  client.close();
  return {
    props: {
      ballotData: {
        id: selectedBallot._id.toString(),
        title: selectedBallot.data.title,
        description: selectedBallot.data.description,
      },
    },
  };
}
