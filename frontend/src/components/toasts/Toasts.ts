import { toast } from "react-toastify";

interface ToastProps {
    content: string
}

export function SuccessToast(props: ToastProps) {

    return toast.success(props.content, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
    });

};

export function ErrorToast(props: ToastProps) {

    return toast.error(props.content, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
    });

};