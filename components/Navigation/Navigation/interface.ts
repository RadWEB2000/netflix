import { IntBrand } from "../Brand/interface";
import { IntMenu } from "../Menu/Menu/interface";
export interface IntNavigation extends IntBrand, IntMenu{
    placeholder:string;
}