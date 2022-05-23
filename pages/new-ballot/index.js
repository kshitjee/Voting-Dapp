// our-domain.com/new-ballot
import NewBallotForm from "../../components/ballots/NewBallotForm";

export default function NewBallotPage() {
    function addBallotHandler(enteredBallotData) {
        console.log(enteredBallotData);
    }



    return <NewBallotForm onAddBallot={addBallotHandler}/>

}