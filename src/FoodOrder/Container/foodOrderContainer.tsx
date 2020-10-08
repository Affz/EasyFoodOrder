import FoodDeliveryActions from "../Actions/foodOrderActions"
import { connect } from 'react-redux';
import FoodDelivery from "../Components/foodOrder";
import { FoodOrderDefaultState } from "../State/foodOrderState";

export function mapStateToProps(appState: any){
 return {
    details: appState.foodOrderReducer.details,
    cartDetails: appState.foodOrderReducer.cartDetails,
    dishDetails: appState.searchReducer.dishDetails
 }
}
export function mapDispatchToProps(dispatch:any){
    return {
        foodOrderDetails:() => dispatch(FoodDeliveryActions.FoodOrderDetails()),
        addToCart:(foodItem: FoodOrderDefaultState) => dispatch(FoodDeliveryActions.AddToCart(foodItem))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(FoodDelivery as any);