import React, { Component } from "react";
import Aux from "../../HOC/Aux";
import Burger from "../../Components/Burger/Burger";

class BurgerBuilder extends Component {
    render() {
        return (
         
         <Aux>  
             <div> <Burger/> </div>
             <div> build controls</div>
         </Aux>
        )
    }
}


export default BurgerBuilder;