import classes from "./BallotItem.module.css";

export default function ballotItem(props) {
  return (
    <div className={classes.item}>
      <div className={classes.content}>
        <h3>{props.title}</h3>
        <p>{props.description}</p>
      </div>
      <div className={classes.actions}>
        <button>Show Details</button>
      </div>
    </div>
  );
}
