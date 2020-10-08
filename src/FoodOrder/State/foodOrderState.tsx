export default interface FoodOrderState {
    details: FoodOrderDefaultState[];
    cartDetails: CartDetails[];
}
export interface CartDetails {
    itemname: string;
    price: number;
    quantity: number;
    modifiedPrice: number;
}
export interface FoodOrderDefaultState {
    itemname: string;
    availabletime: string;
    price: number;
}