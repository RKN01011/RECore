import React, { Component } from 'react';
import './App.scss';
import List1 from "./components/list1/list";
import List2 from "./components/list2/list";
import Mob_chose_learn from "./components/mob/mob_chose_learn";
import Mob_head from "./components/mob/mob_head";
import Mob_prem_core from "./components/mob/mob_prem_core";
import Slider_mob from "./components/mob/slider_mob";

class App extends Component {
  constructor(){
    super();
    this.state = {
inputVoloda: "",
vova: [],
};
  }
 
  
  render() {
    return (
      <div className="App">
        <div className="mob_list">
        <Mob_head />
        <Mob_chose_learn />
        <Mob_prem_core />
        <Slider_mob />
        </div>
        <List1 />
        <List2 />
      </div>
    );
  }
}

export default App;
