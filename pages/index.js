import BallotGrid from "../components/ballots/ballotGrid";
import styles from "../styles/Home.module.css";

export default function Home() {
  const DUMMY_BALLOTS = [
    {
      id: "1",
      title: "Biden vs Trump",
      description: "Vote for your next president!",
    },
    {
      id: "2",
      title: "MBDTF vs Graduation",
      description: "Vote for your favourite Kanye Album!",
    },
  ];
  return (
    <div>
      <h1 className={styles.title}>VOTING DAPP</h1>
      <BallotGrid ballots={DUMMY_BALLOTS} />
    </div>
  );
}
