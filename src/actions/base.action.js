import { GET_BASE } from "../hellpers/actionConst";
import getUser from "../hellpers/api";

export const getBase = async ()=>{
    const base = getUser();
    return{
        type: GET_BASE,
        payload: base
    };
};