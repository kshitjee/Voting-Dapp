import { useEffect, useState } from "react";
import BallotGrid from "../components/ballots/ballotGrid";
import styles from "../styles/Home.module.css";
import Link from "next/link";

var DUMMY_BALLOTS = [
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
  {
    id: "3",
    title: "MBDTF vs Graduation",
    description: "Vote for your favourite Kanye Album!",
  },
  {
    id: "4",
    title: "MBDTF vs Graduation",
    description: "Vote for your favourite Kanye Album!",
  },
  {
    id: "5",
    title: "MBDTF vs Graduation",
    description: "Vote for your favourite Kanye Album!",
  },
  {
    id: "6",
    title: "MBDTF vs Graduation",
    description: "Vote for your favourite Kanye Album!",
  },
];
export default function Home() {
  const [loadedBallots, setLoadedBallots] = useState([]);
  useEffect(() => {
    // send http request and fetch data
    setLoadedBallots(DUMMY_BALLOTS);
  }, []);
  return (
    <div>
      <h1 className={styles.title}>VOTING DAPP</h1>
      <BallotGrid ballots={loadedBallots} />
      <Link href="/new-ballot">
        <button className={styles.button}>ADD NEW BALLOT</button>
      </Link>
    </div>
  );
}
