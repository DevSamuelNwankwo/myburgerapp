import React, { Component } from "react";
import Aux from "../../HOC/Aux";
import Burger from "../../Components/Burger/Burger";

class BurgerBuilder extends Component {

    state={
         ingredients : {
             Salad:0,
             Bacon:0,
             Cheese:0,
             Meat:0,
         }

    }


    render() {
        return (
         
         <Aux>  
             <div> <Burger ingredients={this.state.ingredients}/> </div>
             <div> build controls</div>
         </Aux>
        )
    }
}


export default BurgerBuilder;