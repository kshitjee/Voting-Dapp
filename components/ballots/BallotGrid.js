import BallotItem from "./ballotItem";
import classes from "./ballotGrid.module.css";

export default function BallotGrid(props) {
  return (
    <div className={classes.grid}>
      {props.ballots.map((ballot) => (
        <BallotItem
          key={ballot.id}
          id={ballot.id}
          title={ballot.title}
          description={ballot.description}
        />
      ))}
    </div>
  );
}
