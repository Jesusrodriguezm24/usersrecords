import { axiosInstance } from "../api/axiosInstance";

export const editUser = async (id, dataUser) => {
    try {
        const res = await axiosInstance.put(`/users/${id}/`, dataUser);
        return res.data;
    } catch (error) {
        console.error(error);
    }
}