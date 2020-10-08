import React from 'react';
import { CartDetails } from '../State/foodOrderState';
export interface Props {
    cartDetails: CartDetails[];
}
export interface State {
  cartDetails: CartDetails[];
}
export default class ViewCart extends React.Component <Props , State>{
    constructor(props: Props) {
        super(props);
        this.state ={
            cartDetails: this.props.cartDetails
        }
    }
    render(){
        var {cartDetails} = this.state;
        return(
            <div className="row">
                <div className="col-md-12">
                    <div className="row">
                    {cartDetails !== undefined && cartDetails.length > 0 ? cartDetails.map((detail , k) =>
                           <div className="col-md-12" key={k} style={{border:'groove'}}>
                               <div className="row">
                               <div className="col-md-3">{detail.itemname}</div>
                                <div className="col-md-3">
                                {detail.price}
                                </div>
                                <button onClick={() => this.addQuantity(k)}> +</button>
                                <span>{detail.quantity}</span>
                                <button onClick={() => this.subQuantity(k)}>-</button>
                                </div>
                                <div className="row">
                                <div className="col-md-3">
                                    <span>Grand Total: </span>
                                    <span>{detail.modifiedPrice} </span>
                                </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <button className="btn btn-danger" onClick={()=>alert('Oops ,payment gateway is under process !!')}>Confirm your order</button>
                                    </div>
                                </div>
                           </div>  
  
                     ):
                     <div className="offset-3 col-md-6" >
                      Cart is empty
                    </div> 
                     }
                      
                    </div>
                </div>
                
            </div>
        )
    }
    addQuantity(id: number){
        var {cartDetails} = this.state;
        for(var k = 0 ; k < cartDetails.length ; k++){
            if(id === k){
                cartDetails[k].quantity = cartDetails[k].quantity + 1;
                cartDetails[k].modifiedPrice = cartDetails[k].price* cartDetails[k].quantity;
          }
        }
        this.setState ({cartDetails: cartDetails});

    }
    subQuantity(id: number){
        var {cartDetails} = this.state;
        for(var k = 0 ; k < cartDetails.length ; k++){
            if(id === k){
                cartDetails[k].quantity = cartDetails[k].quantity - 1;
                cartDetails[k].modifiedPrice = cartDetails[k].price* cartDetails[k].quantity;
          }
        }
        this.setState ({cartDetails: cartDetails});
    }
}