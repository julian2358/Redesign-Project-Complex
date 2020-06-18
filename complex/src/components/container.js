import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from './home.js';
import Nav from './nav.js'
import Footer from './footer.js'
import Top from './topstories.js'
import Shoes from './shoes.js'
// react routing 
//do not touch


function Container(location) {
         {/* default path is set to home */}
          {/* switch is used to render one component at a time */}
    return (
 

        <Switch>
   
          <Route exact path="/" component={Home} />
          <Route exact path="/music" component={Top} />
          <Route exact path="/contact" component={Footer} />
          <Route exact path="/shoes" component={Shoes} />
          <Route exact path="/clothes" component={Footer} />
        </Switch>
       

  );
};

export default Container;