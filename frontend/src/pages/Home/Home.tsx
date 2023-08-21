import { AutoRedirect } from "../../contexts/AuthContext";
import PeopleList from "../../components/PeopleList/PeopleList";

export default function Home() {

    return (
        <>
            <AutoRedirect />
            <PeopleList />
        </>
    )

}