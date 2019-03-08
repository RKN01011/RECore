import React from "react"
import {Link} from "react-router-dom"

function visable (){
let b = document.getElementById("knopka");
b.style.bottom = "-24px";
}

const List1 = ()=>{
    return(
<section className="listkurs">
  <div className="navi">
    <div className="logo">
      <div className="logo1">
        <span>NORN</span>
      </div>
    </div>
    <nav className="menu_kurs">
      <div className="menu1">
        <Link to="./" className="kurs_a" href>курсы</Link>
        <Link to="./"className="kurs_a" href>о нас</Link>
        <Link to="./" className="kurs_a" href>летняя&nbsp;школа</Link>
        <Link to="./" className="kurs_a" href>контакты</Link>
      </div>
      <div className="nomber">
        <span>+ 7 893 567 78 67</span>
        <ul className="VFI">
          <li>
          <Link to="./" href className="kurs_a lii">
              <img src={require("../../../ico/ist.png")} alt="Instagram" />
            </Link>
          </li>
          <li>
          <Link to="./" href className="kurs_a lii">
              <img src={require("../../../ico/vk.png")} alt="VK" />
            </Link>
          </li>
          <li>
          <Link to="./" href className="kurs_a lii">
              <img src={require("../../../ico/face.png")} alt="Facebook" />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
  <div className="kubs">
    <div className="cub cub1">
      <span className="cun">Норвежский</span>
      <a href className="cun1">
        Пройти входное тестирование
      </a>
    </div>
    <div className="cub cub2">
      <div className="cub22 cub_q" />
      <span className="cu">Исладский</span>
    </div>
    <div className="cub cub3">
      <div className="cub32 cub_q" />
      <span className="cu">Финский</span>
    </div>
    <div className="cub cub4">
      <div className="cub42 cub_q" />
      <span className="cu">Швевский</span>
    </div>
    <div className="cub cub5">
      <div className="cub52 cub_q" />
      <span className="cu">Датский</span>
    </div>
    <div className="cub6">
      <div className="cub66">
        <div className="cub666" />
      </div>
    </div>
  </div>
  <div className="listnis">
    <label className="l l1" onClick={visable}>
      <div className="flex_nis1">
        <label htmlFor="ch1" className="label_ch lab_ch1" />
        <input
          type="radio"
          name="chose"
          defaultValue="c1"
          id="ch1"
          form="form"
          className="label_chf"
        />
        <div className="label_ch_1" />
      </div>
      <div className="flex_nis2">
        <p className="p">НАЧИНАЮЩИЙ (А1)</p>
        <p className="text">
          Можете достаточно свободно общаться на английском на
          отвлеченные темы, способны взаимодействовать с носителями
          языка без напряжения для каждой из сторон.
        </p>
      </div>
    </label>
    <label className="l l2" onClick={visable}>
      <div className="flex_nis1">
        <label htmlFor="ch2" className="label_ch lab_ch2" />
        <input
          type="radio"
          name="chose"
          defaultValue="c2"
          id="ch2"
          form="form"
          className="label_chf"
        />
        <div className="label_ch_2" />
      </div>
      <div className="flex_nis2">
        <p className="p">Начинающий (A2)</p>
        <p className="text">
          В состоянии написать связное сообщение (эссе, письмо) на
          незнакомую вам тематику.
        </p>
      </div>
    </label>
    <label className="l l3" onClick={visable}>
      <div className="flex_nis1">
        <label htmlFor="ch3" className="label_ch lab_ch3" />
        <input
          type="radio"
          name="chose"
          defaultValue="c3"
          id="ch3"
          form="form"
          className="label_chf"
        />
        <div className="label_ch_3" />
      </div>
      <div className="flex_nis2">
        <p className="p">Продолжающий (B1)</p>
        <p className="text">
          Свободно смотрите большинство англоязычных телепрограмм:
          интервью, репортажи, ток-шоу, прямые трансляции.
        </p>
      </div>
    </label>
    <label className="l l4" onClick={visable}>
      <div className="flex_nis1">
        <label htmlFor="ch4" className="label_ch lab_ch4" />
        <input
          type="radio"
          name="chose"
          defaultValue="c4"
          id="ch4"
          form="form"
          className="label_chf"
        />
        <div className="label_ch_4" />
      </div>
      <div className="flex_nis2">
        <p className="p">Продолжающий (B2)</p>
        <p className="text">
          Способны понять суть сложного текста на конкретную или
          абстрактную тему, готовы поддержать обстоятельную беседу на
          английском языке на тему вашей профессиональной
          специализации.
        </p>
      </div>
    </label>
    <label className="l l5" onClick={visable}>
      <div className="flex_nis1">
        <label htmlFor="ch5" className="label_ch lab_ch5" />
        <input
          type="radio"
          name="chose"
          defaultValue="c5"
          id="ch5"
          form="form"
          className="label_chf"
        />
        <div className="label_ch_5" />
      </div>
      <div className="flex_nis2">
        <p className="p">Продвинутый (C1)</p>
        <p className="text">
          Умеете выстраивать ясные и подробные высказывания по
          широкому кругу вопросов; можете изложить свой взгляд на
          проблему, указать на преимущества и недостатки различных
          вариантов ее решения.
        </p>
      </div>
    </label>
    <label className="l l6" onClick={visable}>
      <div className="flex_nis1">
        <label htmlFor="ch6" className="label_ch lab_ch6" />
        <input
          type="radio"
          name="chose"
          defaultValue="c6"
          id="ch6"
          form="form"
          className="label_chf"
        />
        <div className="label_ch_6" />
      </div>
      <div className="flex_nis2">
        <p className="p">Продвинутый (C2)</p>
        <p className="text">
          Умеете выстраивать ясные и подробные высказывания по
          широкому кругу вопросов; можете изложить свой взгляд на
          проблему, указать на преимущества и недостатки различных
          вариантов ее решения.
        </p>
      </div>
    </label>
    <label className="buttom" id="knopka" htmlFor="submit_b" style={{bottom: -84 + 'px'}}>
      <span>Выбрать</span>
    </label>
    <form action="ser.js" id="form">
      <input type="submit" id="submit_b" />
    </form>
  </div>
</section>

    );
}

export default List1; 