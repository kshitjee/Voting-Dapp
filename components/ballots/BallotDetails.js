import classes from "./BallotDetails.module.css";

export default function BallotDetails(props) {
  return (
    <section className={classes.detail}>
      <h1>{props.title}</h1>
      <p>{props.description}</p>
    </section>
  );
}
