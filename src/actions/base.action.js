import { GET_BASE, GET_DELET } from "../hellpers/actionConst";
import {getUser, getZ} from "../hellpers/api";

export const getBase = async ()=>{
    const base = getUser();
    return{
        type: GET_BASE,
        payload: base
    };
};

export const getDelet = async ()=>{
    const base = getZ();
    return{
        type: GET_DELET,
        payload: base
    };
};

