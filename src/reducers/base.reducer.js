import { GET_BASE } from "../hellpers/actionConst";



const initState = [];
export default function base(state = initState, action){
    switch(action.type){
        case GET_BASE:
        return [... action.payload];
        default:
        return state;
    }
}