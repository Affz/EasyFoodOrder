import { FoodOrderDefaultState } from "../State/foodOrderState";

export const FOODORDER = 'FOODORDER';
export type FOODORDER = typeof FOODORDER;
export const FOODORDER_SUCCESS = 'FOODORDER_SUCCESS';
export type FOODORDER_SUCCESS = typeof FOODORDER_SUCCESS;
export const FOODORDER_FAILURE = 'OODORDER_FAILURE';
export type FOODORDER_FAILURE = typeof FOODORDER_FAILURE;

export const ADDTOCART = 'ADDTOCART';
export type ADDTOCART = typeof ADDTOCART;

export interface FoodOrderDetails {
    type: FOODORDER;
}
export interface AddToCart {
    type: ADDTOCART,
    foodItem: FoodOrderDefaultState
}
export type FoodDetailsActions = FoodOrderDetails & AddToCart;
export default class FoodDeliveryActions {
    public static FoodOrderDetails(): FoodOrderDetails {
        return {
            type: FOODORDER
        };
    }
    public static AddToCart(foodItem: FoodOrderDefaultState): AddToCart {
        return {
            type: ADDTOCART, 
            foodItem: foodItem
        }
    }
}