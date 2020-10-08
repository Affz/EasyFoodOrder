import * as constants from '../Actions/foodOrderActions';
import FoodOrderState, { CartDetails } from '../State/foodOrderState';
export default function FoodOrderReducer(state: FoodOrderState = { details: [], cartDetails:[]}, action: any) {
    switch (action.type) {
        case constants.FOODORDER_SUCCESS: {
            return { ...state, details: action.payload };
        }
        case constants.ADDTOCART: {
            var cartDetails: CartDetails[] =[];
              action.foodItem.quantity = 1;
              action.foodItem.modifiedPrice =   action.foodItem.price;
            cartDetails.push(action.foodItem);
            return { ...state, cartDetails:cartDetails};
        }
        default:
            return { ...state };
    }
}