import React from 'react';


const list1 = ()=>{
  return (
<div className="list" id="up">
          <header className="contact">
            <p id="sholl">Школа скандинавских языков</p>
            <div id="nomber">
              <span>+ 7 893 567 78 67</span>
              <ul className="VFI">
                <li>
                  <a href="" className="lii">
                    <img src={require("../../ico/ist.png")} href="" alt="Instagram" />
                  </a>
                </li>
                <li className="l1">
                  <a href="" className="lii">
                    <img src={require("../../ico/vk.png")} href="" alt="VK" />
                  </a>
                </li>
                <li>
                  <a href="" className="lii">
                    <img src={require("../../ico/face.png")} href="" alt="Facebook"/>
                  </a>
                </li>
              </ul>
            </div>
          </header>
          <nav className="menu">
            <p className="publicg">N O R N</p>

            <div>
              <ul className="uul">
                <li>
                  <a href="">КУРСЫ</a>
                </li>
                <li>
                  <a href="">О НАС</a>
                </li>
                <li>
                  <a href="">ЛЕТНЯЯ ШКОЛА</a>
                </li>
                <li>
                  <a href="">КОНТАКТЫ</a>
                </li>
              </ul>
            </div>
          </nav>
          <section>
            <div className="c1">
              <div className="c11">
                <img src={require("../../imgnis/houses.png")} id="ID" className="c12" alt="foto" />
                <div className="c13" />
              </div>
            </div>
            <div className="c2">
              <div className="c23">
                <div className="c231" />
              </div>
              <div className="c22">
                <p className="c221">
                  NORN - школа обучения северным языкам в Санкт-Петербурге.
                </p>
                <p className="c222">
                  Фьорды, хюгге, Йоулупукки, IKEA и Эйяфьядлайёкюдль.{" "}
                </p>
                <input type="checkbox" id="top_menu" />
                <label htmlFor="top_menu" className="c223">
                  Подробнее
                </label>
              </div>
            </div>
            <div className="c3">
              <div className="c31">
                <p>íslenska</p>
                <p>norsk</p>
                <p>svenska</p>
                <p>dansk </p>
                <p>suomi</p>
              </div>
              <div className="c32">
                <div className="c321" />
              </div>
            </div>
            <div className="kub1" />
            <div className="kub2" />
          </section>
          <div className="radial" />
          <article>
            <figure>
              <img src={require("../../ico/mark5_white.png")} alt="foto" />
              <figcaption>КАКОЙ ВИД ОБУЧЕНИЯ ПОДОЙДЕТ ВАМ?</figcaption>
            </figure>
            <div className="anc">
              <div className="a1">
                <p>ОНЛАЙН</p>
                <p className="pp">Подойдет для удалённого изучения</p>
                <a href="" className="arow1">
                  Заполнить анкету
                </a>
              </div>
              <div className="a1 b1">
                <p>ЗАНЯТИЯ В ГРУППЕ</p>
                <p className="pp">
                  Небольшие группы и удобные аудитории для тех, кто
                  предпочитает учитьязыки в группе
                </p>
                <a href="" className="arow">
                  СМОТРЕТЬ РАСПИСАНИЕ
                </a>
              </div>
              <div className="a1">
                <p>ИНДИВИДУАЛЬНОЕ ОБУЧЕНИЕ</p>
                <p className="pp">
                  Индивидуальные занятия с преподавателем в удобное время
                </p>
              </div>
            </div>
          </article>
  </div>
      );
    }
  
  export default list1;