import { GET_BASE, GET_DELET } from "../hellpers/actionConst";



const initState = [""];
export default function base(state = initState, action){
    switch(action.type){
        case GET_BASE:
        return [...action.payload];
        case GET_DELET:
        return [...action.payload]
        default:
        return state;
    }
}