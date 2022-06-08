import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// eslint-disable-next-line
export const validEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
export const validName = /^[A-Za-z]+$/;
export const validPhoneno = /^[0-9]{10}$/;
export const validPaasword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8}$/;
export const validUsername = /^[A-Za-z]+$/;
export const API = new URL("https://6273b645345e1821b2200dff.mockapi.io/");

export const suceessMessage = (Message) => {
  toast.success(Message, {
    position: "bottom-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};
