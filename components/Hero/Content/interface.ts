import { MouseEventHandler } from "react";
export interface IntContent {
    content:string;
    openMore?:MouseEventHandler;
    modalButton:string;
    trailerButton:string;
    title:string;
}