import SearchBar from "../Components/searchBar"
import { connect } from "react-redux"
import DishActions from "../Actions/searchBarActions"
import { FoodOrderDefaultState } from "../../FoodOrder/State/foodOrderState"


export function mapStateToProps(appState: any) {
    return {
        dishDetails: appState.searchReducer.dishDetails

    }
}
export function mapDispatchToProps(appState: any, dispatch:any) {
    return {
        searchDish: (dishName: string , allDetails: FoodOrderDefaultState[]) => dispatch(DishActions.searchDish(dishName, allDetails))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(SearchBar as any);