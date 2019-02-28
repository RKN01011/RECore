import React, { Component } from 'react';


class Slider_mob extends Component {
  constructor(){
    super();
    
    this.state = {
      dvig_right: () => {
        let polosa1 = window.document.getElementById("slid_tap1")
        let polosa2 = window.document.getElementById("slid_tap2")
        let polosa3 = window.document.getElementById("slid_tap3")
        let polosa4 = window.document.getElementById("slid_tap4")
        let polosa5 = window.document.getElementById("slid_tap5")
       if(polosa3.checked === true){
        polosa3.checked = false;
        polosa4.checked = true;
       }else if(polosa4.checked === true){
        polosa4.checked = false;
        polosa5.checked = true;
       }else if(polosa5.checked === true){
        polosa5.checked = false;
        polosa1.checked = true;
      }else if(polosa1.checked === true){
        polosa1.checked = false;
        polosa2.checked = true;
      }
      else if(polosa2.checked === true){
        polosa2.checked = false;
        polosa3.checked = true;
      }
    },
        dvig_left: ()=>{
        let polosa1 = window.document.getElementById("slid_tap1")
        let polosa2 = window.document.getElementById("slid_tap2")
        let polosa3 = window.document.getElementById("slid_tap3")
        let polosa4 = window.document.getElementById("slid_tap4")
        let polosa5 = window.document.getElementById("slid_tap5")
        if(polosa3.checked === true){
          polosa3.checked = false;
          polosa2.checked = true;
         }else if(polosa2.checked === true){
          polosa2.checked = false;
          polosa1.checked = true;
         }else if(polosa1.checked === true){
          polosa1.checked = false;
          polosa5.checked = true;
        }else if(polosa5.checked === true){
          polosa5.checked = false;
          polosa4.checked = true;
        }
        else if(polosa4.checked === true){
          polosa4.checked = false;
          polosa3.checked = true;
        }
      }
}
};
  
  render() {
    return (

<div className="slider_mob">
<input type="button" onClick={this.state.dvig_right} className="slide_arow" id="right" />
<input type="button" onClick={this.state.dvig_left} className="slide_arow" id="left" />
<div className="slider_head">
  <p>ЧТО УЧЕНИКИ ГОВОРЯТ О НАС</p>
</div>
<div className="slider_main">
  <div className="slider">
    <input
     id="slid_tap1"
      name="slide"
       type="radio" />
    <input
     id="slid_tap2"
      name="slide"
       type="radio" />
    <input
      id="slid_tap3"
      name="slide"
      type="radio"
      defaultChecked
    />
    <input
     id="slid_tap4"
      name="slide"
       type="radio" />
    <input
     id="slid_tap5"
      name="slide"
       type="radio" />
    <div className="slider_main_width">
      
      <div className="slider_width" id="polosa">
        <div className="slider_width_mini">
        <p>Ингеборга Д.</p>

<p>Благодаря данным курсам мой уровень шведского
с preintermediate дошел до upper intermediate. Результата 
добивалась долго, методика 
интенсивная и интересная. 
Всегда есть к чему стремиться.</p>
        </div>
        <div className="slider_width_mini">
        <p>Ингеборга Д.</p>

<p>Благодаря данным курсам мой уровень шведского
с preintermediate дошел до upper intermediate. Результата 
добивалась долго, методика 
интенсивная и интересная. 
Всегда есть к чему стремиться.</p>
        </div>
        <div className="slider_width_mini">
        <p>Ингеборга Д.</p>

<p>Благодаря данным курсам мой уровень шведского
с preintermediate дошел до upper intermediate. Результата 
добивалась долго, методика 
интенсивная и интересная. 
Всегда есть к чему стремиться.</p>
        </div>
        <div className="slider_width_mini">
        <p>Ингеборга Д.</p>

<p>Благодаря данным курсам мой уровень шведского
с preintermediate дошел до upper intermediate. Результата 
добивалась долго, методика 
интенсивная и интересная. 
Всегда есть к чему стремиться.</p>
        </div>
        <div className="slider_width_mini">
        <p>Ингеборга Д.</p>

<p>Благодаря данным курсам мой уровень шведского
с preintermediate дошел до upper intermediate. Результата 
добивалась долго, методика 
интенсивная и интересная. 
Всегда есть к чему стремиться.</p>
        </div>
      </div>
    </div>
    <div className="slider_footer">
      <label className="slider_check k1" htmlFor="slid_tap1" />
      <label className="slider_check k2" htmlFor="slid_tap2" />
      <label className="slider_check k3" htmlFor="slid_tap3" />
      <label className="slider_check k4" htmlFor="slid_tap4" />
      <label className="slider_check k5" htmlFor="slid_tap5" />
    </div>
  </div>
</div>
</div>
    );
  }
}

export default Slider_mob;

