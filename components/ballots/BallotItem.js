import classes from "./BallotItem.module.css";
import { useRouter } from "next/router";

export default function ballotItem(props) {
  const router = useRouter();
  function showDetailsHandler() {
    router.push("/" + props.id);
  }

  return (
    <div className={classes.item}>
      <div className={classes.content}>
        <h3>{props.title}</h3>
        <p>{props.description}</p>
      </div>
      <div className={classes.actions}>
        <button onClick={showDetailsHandler}>Show Details</button>
      </div>
    </div>
  );
}
