import { FoodOrderDefaultState } from "../../FoodOrder/State/foodOrderState";

export const SEARCHDISH = 'SEARCHDISH';
export type SEARCHDISH = typeof SEARCHDISH;
export const SEARCHDISH_SUCCESS = 'SEARCHDISH_SUCCESS';
export type SEARCHDISH_SUCCESS = typeof SEARCHDISH_SUCCESS;
export const SEARCHDISH_FAILURE = 'OODORDER_FAILURE';
export type SEARCHDISH_FAILURE = typeof SEARCHDISH_FAILURE;


export interface SearchDishDetails{
    type: SEARCHDISH,
    dishItem: string,
    allDetails:FoodOrderDefaultState[];
}
export type SearchDishActions = SearchDishDetails;
export default class DishActions {
    public static searchDish(dishItem: string , allDetails: FoodOrderDefaultState[] ):SearchDishDetails {
        debugger;
        return {
            type: SEARCHDISH,
            dishItem: dishItem ,
            allDetails: allDetails
        }
    }
}