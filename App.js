import React from "react";
import {BrowserRouter as  Switch, Route } from "react-router-dom";
import Home from "./Views/Home";
import Search from "./Views/Search";
import "./App.css";
import  Provider,{MyContext}  from "./Provider/index1";
// import React, { useState } from "react";
// import { render } from "react-dom";
class Bapp extends React.Component{

   render() {
    return (
    
      <div className="app">
        <Provider>
          <Switch>
            <Route exact path={"/"} render={()=>(
              <MyContext.Consumer>
                {context =><Home{...context}/>}
              </MyContext.Consumer>
            )}
          />
            <Route exact path={"/search"} render={()=>(
              <MyContext.Consumer>
                {context =><Search{...context}/>}
              </MyContext.Consumer>
            )} />
          </Switch>
        </Provider>
      </div>
    );
   }
}
export default Bapp;
