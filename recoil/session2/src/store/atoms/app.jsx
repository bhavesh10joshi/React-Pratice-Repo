import {atom} from "recoil"

export const NetworkCount = atom({
    key : "NetworkCount" ,
    default : 102
});

export const JobsCount = atom({
    key : "JobsCount" ,
    default : 10
});

export const MessagingCount = atom({
    key : "MessagingCount" ,
    default : 0
});
