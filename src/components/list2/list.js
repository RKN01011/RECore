import React from 'react';

let dvig_right = () => {
  let polosa1 = window.document.getElementById("click1")
  let polosa2 = window.document.getElementById("click2")
  let polosa3 = window.document.getElementById("click3")
  let polosa4 = window.document.getElementById("click4")
  let polosa5 = window.document.getElementById("click5")
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
}
let dvig_left = ()=>{
  let polosa1 = window.document.getElementById("click1")
  let polosa2 = window.document.getElementById("click2")
  let polosa3 = window.document.getElementById("click3")
  let polosa4 = window.document.getElementById("click4")
  let polosa5 = window.document.getElementById("click5")
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

const list2 = ()=>{
  return (
<div className="list2">
          <div className="nis1">
            <div className="nis1111">
              <div className="cofe">
                <div className="cofe1" />
              </div>
              <div className="znak">
                <div className="znak1" />
              </div>
              <div className="znak2" />
              <div className="spisk">
                <div className="spisk1">
                  <p className="pp1">
                    Квалифицированные&nbsp;преподаватели с опытом и носители
                  </p>
                  <p className="pp2">Комфортные аудитории в центре</p>
                  <p className="pp3">Подготовка к экзаменам</p>
                  <p className="pp4">Летние школы</p>
                </div>
              </div>
              <div className="grandm">
                <div className="grandm1" />
              </div>
              <div className="grandm2">
                <div className="grandm3" />
              </div>
              <div className="preim">
                <div className="preim3" />
                <figure className="preim1">
                  <img src={require("../../ico/mark4_white.png")} alt="foto" />
                  <figcaption className="figcaptionn">
                    ПРЕИМУЩЕСТВА
                  </figcaption>
                </figure>
              </div>
              <div className="man">
                <div className="man1" />
              </div>
              <div className="man2" />
              <div className="klass">
                <div className="klass1" />
              </div>
            </div>
          </div>
          <div className="nis2">
            <div className="nis22">
              <figure className="figure">
                <img src={require("../../ico/mark1_white_core.png")} alt="foto" />
                <figcaption className="figcaption">
                  ЧТО УЧЕНИКИ ГОВОРЯТ О НАС
                </figcaption>
              </figure>
              <div className="nis222">
              <input type="radio" id="click1" name="click"/>
              <input type="radio" id="click2" name="click"/>
              <input type="radio" id="click3" name="click" defaultChecked/>
              <input type="radio" id="click4" name="click"/>
              <input type="radio" id="click5" name="click"/>
              <div id="before" onClick={dvig_right}/>
              <div className="polosa_core_hidden">
              <div className="polosa_core">
              <div>
                <cite>Ингеборга Д.</cite>
                <p>
                  Благодаря данным курсам мой уровень шведского с
                  preintermediate дошел до upper intermediate. Результата
                  добивалась долго, методика интенсивная и интересная.
                  Всегда есть к чему стремиться.
                </p>
              </div>
              <div>
                <cite>Ингеборга Д.</cite>
                <p>
                  Благодаря данным курсам мой уровень шведского с
                  preintermediate дошел до upper intermediate. Результата
                  добивалась долго, методика интенсивная и интересная.
                  Всегда есть к чему стремиться.
                </p>
              </div>
              <div>
                <cite>Ингеборга Д.</cite>
                <p>
                  Благодаря данным курсам мой уровень шведского с
                  preintermediate дошел до upper intermediate. Результата
                  добивалась долго, методика интенсивная и интересная.
                  Всегда есть к чему стремиться.
                </p>
              </div>
              <div>
                <cite>Ингеборга Д.</cite>
                <p>
                  Благодаря данным курсам мой уровень шведского с
                  preintermediate дошел до upper intermediate. Результата
                  добивалась долго, методика интенсивная и интересная.
                  Всегда есть к чему стремиться.
                </p>
              </div>
              <div>
                <cite>Ингеборга Д.</cite>
                <p>
                  Благодаря данным курсам мой уровень шведского с
                  preintermediate дошел до upper intermediate. Результата
                  добивалась долго, методика интенсивная и интересная.
                  Всегда есть к чему стремиться.
                </p>
              </div>
              </div>
              </div>
              <div  id="after" onClick={dvig_left}/>
              <div className="label_block">
              <label htmlFor="click1" className="core_slid_kub core_k1"/>
              <label htmlFor="click2" className="core_slid_kub core_k2"/>
              <label htmlFor="click3" className="core_slid_kub core_k3"/>
              <label htmlFor="click4" className="core_slid_kub core_k4"/>
              <label htmlFor="click5" className="core_slid_kub core_k5"/>
              </div>
              </div>
            </div>
          </div>
          <div className="nisfooter">
            <div className="foooter">
            <div>
              <div className="fo1">
                <span className="fo11">NORN</span> <br />
                <span className="fo12">школа скандинавских языков</span>
              </div>
              <div className="fo2">
                <a href="">
                  <img src={require("../../ico/025-instagram.png")} alt="foto" />
                </a>
                <a href="">
                  <img src={require("../../ico/020-vk.png")} alt="foto" />
                </a>
                <a href="">
                  <img src={require("../../ico/021-facebook.png")} alt="foto" />
                </a>
                <p>+7 893 567 78 6<br />
                norn@gmail.com
                </p>
              </div>
              <div className="fo3">
                <span className="fo31">
                  199983, Санкт-Петербург ул. Казанская, 32, БЦ “Успех”, 7
                  этаж
                </span>
                <span className="fo32">
                  c 10:00 до 22:00 с ПН по&nbsp;СБ
                </span>
              </div>
              </div>
            </div>
            <div className="map" />
          </div>
        </div>
    );
}


export default list2;