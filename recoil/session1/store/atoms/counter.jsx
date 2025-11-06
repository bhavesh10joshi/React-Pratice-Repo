import {atom} from "recoil"
export const counter = atom({
    key : "counter" ,
    default : 0
}); 
export const Even = selector({
    key : "isEven" , 
    get : ({get})=>{
        const count = get(counter);
        return count % 2;
    },
});