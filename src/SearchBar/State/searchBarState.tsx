export default interface searchBarDefaultState {
    searchDishDetails:searchDishState
}
export interface searchDishState {
    itemname: string;
    availabletime: string;
    price: number;
}