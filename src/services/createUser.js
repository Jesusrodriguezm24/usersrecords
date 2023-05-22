import { axiosInstance } from "../api/axiosInstance";

export const createUser = async (dataUser) => {
    try {
        const res = await axiosInstance.post("/users/", dataUser);
        return res.data;
    } catch (error) {
        console.error(error);
    }
}