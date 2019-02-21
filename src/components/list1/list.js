import React from 'react';

const list = ()=>{
      return (
        <div>
        <div className="mob_list">
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
              <p className="text_p">
                Норвежский, финский, датский, исладский и шведский языки.
              </p>
              <a href="http://site.ru/">
                <button type="button" className="mob_buttom">
                  Подробнее
                </button>
              </a>
            </div>
          </div>
          <div className="mob_chose_learn">
            <p className="mob_chose_text">
              Какой вид обучения<br />подойдёт вам?
            </p>
            <div className="mob_chose">
              <p>ОНЛАЙН</p>
              <p>Подойдет для удалённого изучения</p>
              <p className="mob_arrow">
                <a href>Заполнить анкету</a>
              </p>
            </div>
            <div className="mob_chose mob_kub">
              <p>ЗАНЯТИЯ В ГРУППЕ</p>
              <p>
                Небольшие группы и удобные аудитории для тех, кто
                предпочитает учитьязыки в группе
              </p>
              <p className="mob_arrow">
                <a href>СМОТРЕТЬ РАСПИСАНИЕ</a>
              </p>
            </div>
            <div className="mob_chose">
              <p>ИНДИВИДУАЛЬНОЕ ОБУЧЕНИЕ</p>
              <p>Индивидуальные занятия с преподавателем в удобное время</p>
            </div>
          </div>
          <div className="mob_prem_core">
            <div className="mob_prem">
              <div className="mob_prem_kub kkub1">
                <div className="pre_kub">
                  <div />
                </div>
                <div className="kub1_mob">
                  <p>ПРЕИМУЩЕСТВА</p>
                </div>
              </div>
              <div className="mob_prem_kub kkub2">
                <div />
              </div>
              <div className="mob_prem_kub kkub3">
                <div />
              </div>
              <div className="mob_prem_kub kkub4">
                <div className="kub4_mob1">
                  <div />
                </div>
                <div className="kub_text">
                  <div />
                  <p className="mob_text_kub">
                    Квалифицированные преподаватели с опытом и носители
                  </p>
                  <p className="mob_text_kub">
                    Комфортные аудитории в центре
                  </p>
                  <p className="mob_text_kub">Подготовка к экзаменам</p>
                  <p className="mob_text_kub">Летние школы</p>
                </div>
              </div>
            </div>
          </div>
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
                  <button type="button" className="slide_arow" id="right" />
                  <button type="button" className="slide_arow" id="left" />
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
        </div>
        <div className="list" id="up">
          <header className="contact">
            <p id="sholl">Школа скандинавских языков</p>
            <div id="nomber">
              <span>+ 7 893 567 78 67</span>
              <ul className="VFI">
                <li>
                  <a href className="lii">
                    <img src="Img/ist.png" alt="Instagram" />
                  </a>
                </li>
                <li>
                  <a href className="lii">
                    <img src="Img/vk.png" alt="VK" />
                  </a>
                </li>
                <li>
                  <a href className="lii">
                    <img src="Img/face.png" alt="Facebook" />
                  </a>
                </li>
              </ul>
            </div>
          </header>
          <nav className="menu">
            <img src="Img/NORN.png" alt className="imgg" />
            <div>
              <ul className="uul">
                <li>
                  <a href>курсы</a>
                </li>
                <li>
                  <a href>учителя</a>
                </li>
                <li>
                  <a href>летняя школа</a>
                </li>
                <li>
                  <a href>контакты</a>
                </li>
              </ul>
            </div>
          </nav>
          <section>
            <div className="c1">
              <div className="c11">
                <img src="Img/houses.png" className="c12" alt />
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
              <img src="img/mark5_white.png" alt />
              <figcaption>КАКОЙ ВИД ОБУЧЕНИЯ ПОДОЙДЕТ ВАМ?</figcaption>
            </figure>
            <div className="anc">
              <div className="a1">
                <p>ОНЛАЙН</p>
                <p className="pp">Подойдет для удалённого изучения</p>
                <a href className="arow1">
                  Заполнить анкету
                </a>
              </div>
              <div className="a1 b1">
                <p>ЗАНЯТИЯ В ГРУППЕ</p>
                <p className="pp">
                  Небольшие группы и удобные аудитории для тех, кто
                  предпочитает учитьязыки в группе
                </p>
                <a href className="arow">
                  СМОТРЕТЬ РАСПИСАНИЕ
                </a>
              </div>
              <div className="a1">
                <p>ИНДИВИДУАЛЬНОЕ ОБУЧЕНИЕ</p>
                <p className="pp">
                  Индивидуальные занятия с преподавателем в удобное время
                </p>
                <a href className="arow">
                  Заполнить анкету
                </a>
              </div>
            </div>
          </article>
        </div>
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
                  <img src="img/imgnis/mark4_white.png" alt />
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
                <img src="img/mark1_white.png" alt />
                <figcaption className="figcaption">
                  ЧТО УЧЕНИКИ ГОВОРЯТ О НАС
                </figcaption>
              </figure>
              <div className="nis222">
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
          <div className="nisfooter">
            <div className="foooter">
              <div className="fo1">
                <span className="fo11">NORN</span>
                <span className="fo12">школа скандинавских языков</span>
              </div>
              <div className="fo2">
                <a href>
                  <img src="Img/imgnis/025-instagram.png" alt />
                </a>
                <a href>
                  <img src="Img/imgnis/020-vk.png" alt />
                </a>
                <a href>
                  <img src="Img/imgnis/021-facebook.png" alt />
                </a>
                <p>+7 893 567 78 67</p>
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
            <div className="map" />
          </div>
        </div>
        <aside className="aside">
          <a href="#up">UP</a>
        </aside>
      </div>
      
      );
    }
  
  export default list;