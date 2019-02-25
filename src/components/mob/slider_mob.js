import React from 'react';

const slider_mob = ()=>{
    return (
<div className="slider_mob">
<div className="slider_head">
  <p>ЧТО УЧЕНИКИ ГОВОРЯТ О НАС</p>
</div>
<div className="slider_main">
  <div className="slider">
    <input id="slid_tap1" name="slide" type="radio" />
    <input id="slid_tap2" name="slide" type="radio" />
    <input
      id="slid_tap3"
      name="slide"
      type="radio"
      defaultChecked
    />
    <input id="slid_tap4" name="slide" type="radio" />
    <input id="slid_tap5" name="slide" type="radio" />
    <div className="slider_main_width">
      <input type="button" onclick="dvig_left()" className="slide_arow" id="right" />
      <input type="button" onclick="dvig_right()" className="slide_arow" id="left" />
      <div className="slider_width" id="polosa">
        <div className="slider_width1" />
        <div className="slider_width2" />
        <div className="slider_width3" />
        <div className="slider_width4" />
        <div className="slider_width5" />
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

export default slider_mob;