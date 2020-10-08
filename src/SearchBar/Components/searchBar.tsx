import React from 'react';
import { FoodOrderDefaultState } from '../../FoodOrder/State/foodOrderState';
export interface Props {
    searchDish:(dishName: string , allDetails:FoodOrderDefaultState[]) => void;
    details: FoodOrderDefaultState[];
}
export interface State {
    searchItem: string;
}
export default class SearchBar extends React.Component<Props , State> {
    constructor(props: Props){
        super(props);
        this.state = {
            searchItem:''
        }
    }
    render(){
        return(
            <div>
                <input type="text" onChange={(e) => this.setState({searchItem:e.currentTarget.value})}/>
                <button onClick={() => this.search()}>Search</button>
            </div>
        )
    }
    search(){
        this.props.searchDish(this.state.searchItem, this.props.details);
    }
}