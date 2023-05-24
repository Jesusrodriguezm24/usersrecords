import { axiosInstance } from "../api/axiosInstance";

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const editUser = async (id, dataUser) => {
    try {
     const res = await axiosInstance.put(`/users/${id}/`, dataUser);
     if (res.data) toast.success('Edited user');
    } catch (error) {
      toast.error(`User not edited`);
      console.error(error);
    }
}