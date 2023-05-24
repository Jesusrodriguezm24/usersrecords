import { axiosInstance } from "../api/axiosInstance";

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const createUser = async (dataUser) => {
    try {
        const res = await axiosInstance.post("users/", dataUser);
        if (res.data) toast.success('Added user');
    } catch (error) {
        toast.error("User not added");
        console.error("user not added", error);
    }
}