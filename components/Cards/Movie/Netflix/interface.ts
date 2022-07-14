type StringNumber = string|number;
export interface IntCard {
    hours:StringNumber;
    list:string;
    title:string;
}
export interface IntCards {
    cards:{hoursviewed:string,list:string,name:string}[];
    title:string;
}