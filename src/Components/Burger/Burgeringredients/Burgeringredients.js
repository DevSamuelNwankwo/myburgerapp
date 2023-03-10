import React, { Component } from "react";
import './burgeringredients.css';
import PropTypes from 'prop-types';

class Burgeringredients extends Component {
   render(){

    let ingredient = null ;
     
    switch (this.props.type) {
        case ('bread-bottom'):
            ingredient= (<div className="BreadBottom"> </div>);
            break;
        case ('bread-top'):
            ingredient= (<div className="BreadTop">
                <div className="Seeds1"></div>
                <div className="Seeds2"></div>
            </div>);
            break;

        case ('Meat'):
            ingredient=(<div className="Meat"></div>);
            break;

        case ('Cheese'):
            ingredient=(<div className="Cheese"></div>);
            break;

        case ('Salad'):
            ingredient=(<div className="Salad"></div>);
            break;
        case ('Bacon'):
            ingredient=(<div className="Bacon"></div>);
            break;
        default :
            ingredient=null;

    }


    return ingredient;
       
   }



};


Burgeringredients.propTypes={
    type:PropTypes.string.isRequired,
}
 
export default Burgeringredients;