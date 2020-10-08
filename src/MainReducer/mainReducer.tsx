import { combineReducers } from 'redux';
import FoodOrderReducer from '../FoodOrder/Reducer/foodOrderReducer';
import SearchBarReducer from '../SearchBar/Reducer/searchBarReducer';

export const mainReducer = combineReducers({
  foodOrderReducer: FoodOrderReducer,
  searchReducer: SearchBarReducer
});