import React, { Component } from "react";
import "./kurscss.scss"
import List1 from "./list1/list";
import List2 from "./list2/list";
import {connect} from "react-redux"
import { getBase, getDelet } from "../../actions/base.action";


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
          <div onClick={this.props.getUser}>fdedffd</div>
          <div>{this.props.base}</div>
        
        </React.Fragment>
      );
    }
  }

  export default connect(
    (store)=>{
  return {
    base: store.base
  }
    },
  (dispatch)=>{
    return{
      getUser: async ()=>{
        const action = await getBase();
        dispatch(action);
      },
      getW: async ()=>{
        const kiril = await getDelet();
        dispatch(kiril);
      }
    }
    }
  )(App_kurs);