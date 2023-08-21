import { AutoRedirect } from "../contexts/AuthContext";
import PeopleList from "../components/PeopleList/PeopleList";
import { ToastContainer, toast } from "react-toastify";
import { ErrorToast, SuccessToast } from '../components/toasts/Toasts';
import UserForm from "../components/UserForm/UserForm";

export default function Home() {

    return (
        <>
            <AutoRedirect />
            <PeopleList />
        </>
    )

}