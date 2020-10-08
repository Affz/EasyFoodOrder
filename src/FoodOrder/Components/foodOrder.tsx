import React from 'react';
import { FoodOrderDefaultState, CartDetails } from '../State/foodOrderState';
import { Link } from 'react-router-dom';
import { History } from 'history';
import ViewCart from './viewCart';
import SearchBar from '../../SearchBar/Components/searchBar';
export interface Props {
    details: FoodOrderDefaultState[],
    foodOrderDetails: () => void;
    addToCart: (foodItem: FoodOrderDefaultState) => void;
    cartDetails: CartDetails[];
    history: History;
    dishDetails: FoodOrderDefaultState;
    searchDish:(dishName: string , allDetails:FoodOrderDefaultState[]) => void;

}
export interface State {
    cartActive: boolean;
}
export default class FoodDelivery extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            cartActive: false
        }
    }
    componentDidMount() {
        this.props.foodOrderDetails();
    }

    render() {
        console.log(this.props.dishDetails);
        var { cartDetails, details } = this.props;
        var { cartActive } = this.state;
        return (
            <div className="row">
                <div className="col-md-12 ">
                    Let's EasyDeliver
                </div>
                <div className="col-md-12">

                    {!cartActive ?

                        <div className="row">
                            {cartDetails.length > 0 &&
                                <div className="row">
                                    <div className=" col-md-3">
                                        <button className="btn btn-success" onClick={() => { this.setState({ cartActive: true }) }}>
                                            View Cart
                                         </button>
                                    </div>
                                </div>
                            }
                            <table className={'table'} style={{ width: '100%' }}>
                                <thead>
                                    <th>Item</th>
                                    <th>Price</th>
                                    <th>Availability</th>
                                </thead>
                                {details.map((foodItem, i) =>
                                    <tr key={i}  >
                                        <td>{foodItem.itemname}</td>
                                        <td>{foodItem.price}</td>
                                        <td>
                                            <button disabled={this.checkAvailability(foodItem.availabletime)} onClick={() => this.addToCart(foodItem)}>Add to Cart</button>
                                        </td>
                                    </tr>
                                )}
                            </table>
                        </div>
                        :
                        <ViewCart cartDetails={cartDetails} />
                    }
                </div>
            </div>
        );
    }
    checkAvailability(availabletime: string) {
        var current = new Date();
        var currentHour = current.getHours();
        var currentMinutes = current.getMinutes();
        var slotOne = availabletime.split(',')[0];
        var slotTwo = availabletime.split(',')[1];
        var timeOne = slotOne.split('-')[0];
        var timeTwo = slotOne.split('-')[1];
        var hourMax = timeOne.split(':')[0];
        var hourMin = timeTwo.split(':')[0];
        var minutesMax = timeOne.split(':')[1];
        var minutesMin = timeTwo.split(':')[1];
        var timeThree = slotTwo.split('-')[0];
        var timeFour = slotTwo.split('-')[1];
        var hourMaxNo = timeThree.split(':')[0];
        var hourMinNo = timeFour.split(':')[0];
        var minutesMaxNo = timeThree.split(':')[1];
        var minutesMinNo = timeFour.split(':')[1];
        if ((currentHour.toString() >= hourMin || currentHour.toString() <= hourMax) && (currentMinutes.toString() >= minutesMin || currentMinutes.toString() <= minutesMax) || (currentHour.toString() >= hourMinNo || currentHour.toString() <= hourMaxNo) && (currentMinutes.toString() >= minutesMinNo || currentMinutes.toString() <= minutesMaxNo)) {
            return false;
        } else {
            return true;
        }
    }
    addToCart(foodItem: FoodOrderDefaultState) {
        var { addToCart } = this.props;
        addToCart(foodItem);
    }
}