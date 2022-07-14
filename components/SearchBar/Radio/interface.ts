import { MouseEventHandler } from 'react';
export interface IntInput {
    id:string;
    handle:MouseEventHandler;
    name:string;
    title:string;
    value:boolean;
}
export interface IntRadio {
    filterSearch:IntInput[];
}