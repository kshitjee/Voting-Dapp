// our-domain.com/new-ballot
import { useRouter } from "next/router";
import NewBallotForm from "../../components/ballots/NewBallotForm";

export default function NewBallotPage() {
  const router = useRouter();

  async function addBallotHandler(enteredBallotData) {
    const res = await fetch("/api/new-ballot", {
      method: "POST",
      body: JSON.stringify(enteredBallotData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();

    console.log(data);

    router.push("/");
  }

  return <NewBallotForm onAddBallot={addBallotHandler} />;
}
