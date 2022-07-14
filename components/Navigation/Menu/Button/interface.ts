import { MouseEventHandler } from "react";
export interface IntButton extends IntWrapper{
    menuButton:MouseEventHandler;
}
export interface IntWrapper { 
    active:boolean;
}