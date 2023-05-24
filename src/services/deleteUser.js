import { axiosInstance } from "../api/axiosInstance";

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const deleteUser = async (id) => {
    try {
        const res = await axiosInstance.delete(`users/${id}/`);
        if (!res.data) toast.success('Deleted user');
    } catch (error) {
        toast.error("User not delete");
        console.error("user not delete", error);
    }
}