import React, { Component } from "react";
import Aux from "../../HOC/Aux";
import Burger from "../../Components/Burger/Burger";
import BuildControls from "../../Components/Burger/BuildControls/BuildControls";


const INGREDIENT_PRICE = {
    salad :0.5,
    cheese:0.5,
    meat:1.3,
    bacon:0.7,
}

class BurgerBuilder extends Component {

    state={
         ingredients : {
             Salad:1,
             Bacon:2,
             Cheese:1,
             Meat:1,
         },
         totalPrice : 4,
    }

    addIngredientHandler = (type)=>{
        const oldCount = this.state.ingredients[type];

        const updatedCount= oldCount+1;

        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type]= updatedCount;

        const priceAddition = INGREDIENT_PRICE[type]

        const oldPrice = this.state.totalPrice;

        const newPrice = oldPrice + priceAddition;

        this.setState({totalPrice:newPrice, ingredients:updatedIngredients});
    }

    removeIngredientsHandler =(type) =>{

    }

    render() {
        return (
         <Aux>  
                <Burger ingredients={this.state.ingredients}/> 
                <BuildControls ingredientsAdded={this.addIngredientHandler}/>
         </Aux>
        )
    }
}


export default BurgerBuilder;