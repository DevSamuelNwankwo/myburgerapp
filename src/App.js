import Layout from "./Components/Layouts/Layout";
import React from "react";
import BurgerBuilder from "./Containers/Burgerbuilder/BurgerBuilder";

function App() {
  return (
    <div >
     
      <Layout>
         <BurgerBuilder/>
      </Layout>
    </div>
  );
}

export default App;
