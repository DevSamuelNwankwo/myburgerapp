import React from "react";
import './Burger.css';
import Burgeringredients from "./Burgeringredients/Burgeringredients";

const Burger = (props) => {
    return ( 
        <div className="burger">
            <Burgeringredients type="bread-top"/>
            <Burgeringredients type="bread-Bottom"/>
            <Burgeringredients type="chesse"/>
            <Burgeringredients type="meat"/>
        </div>
    );
}

export default Burger;