import React from "react";
import Aux from "../../HOC/Aux";
import './layouts.css';

const Layout = (props) =>  (     
        <Aux>
             <div className="toolbar">
                 toolbar sidedrawer backdrop
             </div>
             <main>

                 {props.children}
             </main>
        </Aux>
)



 
export default Layout;