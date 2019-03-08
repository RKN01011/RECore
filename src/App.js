import React, { Component } from 'react';
import './App.scss';
import List1 from "./components/list1/list";
import List2 from "./components/list2/list";
import Mob_chose_learn from "./components/mob/mob_chose_learn";
import Mob_head from "./components/mob/mob_head";
import Mob_prem_core from "./components/mob/mob_prem_core";
import Slider_mob from "./components/mob/slider_mob";
import Mob_footer_top from "./components/mob/mob_footer_top";
import Mob_footer_bottom from "./components/mob/mob_footer_bottom";
import { connect } from 'react-redux';
import { getBase } from './actions/base.action';


class App extends Component {
  constructor(){
    super();
    this.state = {};
 }
 
 
  
  render() {
    console.log(this.props)
    return (
      <div className="App">
        <div className="mob_list">
        <Mob_head />
        <Mob_chose_learn />
        <Mob_prem_core />
        <Slider_mob />
        <Mob_footer_top />
        <Mob_footer_bottom />
        </div>
        <List1 />
        <List2 />
      
        
      </div>
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
    getUsers: async ()=>{
      const action = await getBase();
      dispatch(action)
    }
  }
  }
)
(App)
