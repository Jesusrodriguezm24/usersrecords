import { axiosInstance } from "../api/axiosInstance";

export const editUser = async (id, dataUser) => {
    try {
      await axiosInstance.put(`/users/${id}/`, dataUser);
        
    } catch (error) {
        console.error(error);
    }
}