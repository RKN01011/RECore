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
                    <img src="/public/ico/ist.png" href="" alt="Instagram" />
                  </a>
                </li>
                <li>
                  <a href="" className="lii">
                    <img src="/public/vk.png" alt="VK" />
                  </a>
                </li>
                <li>
                  <a href="" className="lii">
                    <img src="/public/face.png" alt="Facebook" />
                  </a>
                </li>
              </ul>
            </div>
          </header>
          <nav className="menu">
            <img src="/public/NORN.png" alt="Norh" className="publicg" />
            <div>
              <ul className="uul">
                <li>
                  <a href="">курсы</a>
                </li>
                <li>
                  <a href="">учителя</a>
                </li>
                <li>
                  <a href="">летняя школа</a>
                </li>
                <li>
                  <a href="">контакты</a>
                </li>
              </ul>
            </div>
          </nav>
          <section>
            <div className="c1">
              <div className="c11">
                <img src="../../imgnis/houses.png" id="ID" className="c12" alt="foto" />
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
              <img src="/public/mark5_white.png" alt="foto" />
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
                <a href="" className="arow">
                  Заполнить анкету
                </a>
              </div>
            </div>
          </article>
  </div>
      );
    }
  
  export default list1;