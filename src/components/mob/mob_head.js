import React, { Component } from 'react';
import {connect} from "react-redux"

class Mob_head extends Component {
  constructor(){
    super();
   this.state = {
     tap1: ()=>{
       let kubik = window.document.getElementById("kubik");
       kubik.style.top = "18px"

     },
     tap2: ()=>{
      let kubik = window.document.getElementById("kubik");
      kubik.style.top = "50px"
     },
     tap3: ()=>{
      let kubik = window.document.getElementById("kubik");
      kubik.style.top = "84px"
     },
     tap4: ()=>{
      let kubik = window.document.getElementById("kubik");
      kubik.style.top = "113px"
     },
     tap5: ()=>{
      let kubik = window.document.getElementById("kubik");
      kubik.style.top = "146px"
     },

    }
  }
    render() {
      return (
<div className="head_mob">
<div className="head_mob_h">
<input type="checkbox" id="tap" />
    <div className="head_menu">
      <p>Что же сюда добавить? :/. Вопрос к художнику.</p>
    </div>
  <div className="head_mob_h_menu">
    <label htmlFor="tap" className="tap_menu">
        <p className="lini" />
        <p className="lini" />
        <p className="lini" />
    </label>
  </div>
  <div className="head_mob_h_block" >
    <span className="norn">N O R N</span>
  </div>
  <div className="head_mob_h_call">
    <p className="num">+ 7 893 567 78 67</p>
    <p>
      <a href="tel:+78935677867" className="silka">
        Позвонить
      </a>
    </p>
  </div>
</div>
<div className="head_main_mob">
  <p className="text_p">
    Школа обучения скандинавским языкам в Санкт-Петербурге.
  </p>
  <div className="text_p">
  <div id="kubik"></div>
    <input
     type="radio"
      id="input1"
      name="knopki"
      value="nord"
      form="submit" />
    <input
     type="radio"
      id="input2"
      name="knopki"
      value="fin"
      form="submit" />
    <input
     type="radio"
      id="input3"
      name="knopki"
      value="dat"
      form="submit"
      defaultChecked />
    <input
     type="radio"
      id="input4"
      name="knopki"
      value="isla"
      form="submit" />
    <input
     type="radio"
      id="input5"
      name="knopki"
      value="she"
      form="submit" />
    <label htmlFor="input1" className="label1" onClick={this.state.tap1} >Норвежский</label>
     <label htmlFor="input2" className="label2" onClick={this.state.tap2}>Финский</label>
      <label htmlFor="input3" className="label3" onClick={this.state.tap3}>Датский</label>
       <label htmlFor="input4" className="label4" onClick={this.state.tap4}>Исладский</label>
        <label htmlFor="input5" className="label5" onClick={this.state.tap5}>Шведский</label>
  </div>
  <a href="http://site.ru/">
    <input type="submit" className="mob_buttom" value="Отправить" form="submit"/>
  </a>
  <form className="submit" />
</div>
</div>
    );
  }
}


export default connect(
  (store)=>{
return {
  base: store.base
}
  }
) (Mob_head);