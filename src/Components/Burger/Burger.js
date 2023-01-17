import React from "react";
import './Burger.css';
import Burgeringredients from "./Burgeringredients/Burgeringredients";

const Burger = (props) => {
    
    let transformedIngredients = Object.keys(props.ingredients).map(igkey=>{
        return [...Array(props.ingredients[igkey])].map((_,i)=>
        { return <Burgeringredients key ={igkey+i} type={igkey}/>});
    }).reduce((arr, el)=>{
        return arr.concat(el)
    }, [])
    
    if (transformedIngredients.length === 0) {
       transformedIngredients = <p> Please start adding ingredients  </p>
    }

    return ( 
        <div className="burger">            
            <Burgeringredients type="bread-top"/>
             {transformedIngredients}
            <Burgeringredients type="bread-bottom"/>
        </div>
    );
}

export default Burger;