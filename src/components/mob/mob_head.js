import React from 'react';

const mob_head = ()=>{
    return (
<div className="head_mob">
<div className="head_mob_h">
  <div className="head_mob_h_menu">
    <input type="checkbox" id="tap" />
    <div className="head_menu">
      <p>Что же сюда добавить? :/. Вопрос к художнику.</p>
    </div>
    <label htmlFor="tap" className="tap_menu">
      <div className="monitor">
        <span className="lini" />
        <span className="lini" />
        <span className="lini" />
      </div>
    </label>
  </div>
  <div className="head_mob_h_block">
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
    <p>Норвежский</p>
     <p>финский</p>
      <p>датский</p>
       <p>исладский</p>
        <p>шведский</p>
  </div>
  <a href="http://site.ru/">
    <button type="button" className="mob_buttom">
      Подробнее
    </button>
  </a>
</div>
</div>
   );
}

export default mob_head;