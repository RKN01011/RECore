import React, { Component } from "react";
import "./kurscss.scss"
import List1 from "./list1/list";
import List2 from "./list2/list";

class App_kurs extends Component {
    constructor(){
      super();
      this.state = {};
   }
   
   
    
    render() {
      return (
        <React.Fragment>

          <List1 />
          <List2 />
        
          
        </React.Fragment>
      );
    }
  }

  export default App_kurs;