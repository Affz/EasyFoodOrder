import React from 'react';
import { Route, Switch ,withRouter} from 'react-router-dom';
import { Router } from 'react-router';
import { createBrowserHistory } from 'history';
import FoodDelivery from '../FoodOrder/Container/foodOrderContainer';
import ViewCart from '../FoodOrder/Components/viewCart';
import { CartDetails } from '../FoodOrder/State/foodOrderState';
const history = createBrowserHistory();

export interface Props {
  cartDetails: CartDetails[];
}
export default class App extends React.Component<Props, {}> {
    constructor(props: Props) {
        super(props);
    }
    render() {
      
    var RoutingApp = (
    <div className="container-fluid">
      <Router history={history}>
        <div>
          <Switch>
            <Route path="/" component={FoodDelivery} exact={true}/>
            <Route path="/viewcart" component ={ViewCart} exact={true}/>
           
          </Switch>
        </div>
      </Router>
    </div>);
    return RoutingApp;
}
}