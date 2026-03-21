import { ContactRequest } from "@/types/contact";
import { client } from "../../api";

export const submitContactForm = async (payload : ContactRequest) =>{
    const res = await client.post("/api/contact", payload);
    return res;
}