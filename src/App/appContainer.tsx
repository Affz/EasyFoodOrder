import { connect } from "react-redux"
import App from "./App"

export function mapStateToProps(appState: any){
 return {
    cartDetails: appState.foodOrderReducer.cartDetails
 }
}
export function mapDispatchToProps(dispatch:any){
    return {

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(App as any);