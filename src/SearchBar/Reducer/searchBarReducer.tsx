import searchBarDefaultState from "../State/searchBarState";
import * as constants from '../Actions/searchBarActions';
import { FoodDetailsActions } from "../../FoodOrder/Actions/foodOrderActions";
import { SearchDishActions } from "../Actions/searchBarActions";
export default function SearchBarReducer(state:searchBarDefaultState= {searchDishDetails:{itemname:'' ,availabletime:'' , price:0}}, action:SearchDishActions & FoodDetailsActions){
switch(action.type){
    case constants.SEARCHDISH: {
        debugger;
        var foodItem = action.dishItem;
        var details = action.allDetails;
        var ele: any;
        details.forEach(element => {
            if(element.itemname === foodItem){
                ele = element;
            }
        });
        return {...state , dishDetails: ele};
    }
    default:
            return { ...state };
}
}