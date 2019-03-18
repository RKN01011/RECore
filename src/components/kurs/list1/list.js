import React from "react"
import {Link} from "react-router-dom"

let lang = document.getElementsByClassName("cub_q");


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
  <label className="cub cub1" onClick={()=>{
      if (lang[0].style.visibility == "visible")
      { lang[0].style.visibility = "hidden"}
      else { lang[0].style.visibility = "visible" }
  }}>
      <span className="cun">Норвежский</span>
      <label htmlFor="kurs_submit" className="cun1">
        Пройти входное тестирование
      </label>
      <div className="cub12 cub_q" style={{visibility: "visible"}}>
      <span className="cu" style={{left: "0px"}}>Норвежский</span> 
    </div>
  </label>
    <label className="cub cub2" onClick={()=>{
      if (lang[1].style.visibility == "visible")
      { lang[1].style.visibility = "hidden"}
      else { lang[1].style.visibility = "visible" }
  }}>
    <span className="cun">Исладский</span>
      <label className="cun1" >
        Пройти входное тестирование
      </label>
    <div className="cub22 cub_q" style={{visibility: "visible"}}>
      <span className="cu">Исладский</span> 
    </div>
    </label>
    <label className="cub cub3" onClick={()=>{
      if (lang[2].style.visibility == "visible")
      { lang[2].style.visibility = "hidden"}
      else { lang[2].style.visibility = "visible" }
  }}>
    <span className="cun">Финский</span>
      <label className="cun1" >
        Пройти входное тестирование
      </label>
      <div className="cub32 cub_q" style={{visibility: "visible"}}>
      <span className="cu">Финский</span>
       </div>
      
    </label>
    <label className="cub cub4" onClick={()=>{
      if (lang[3].style.visibility == "visible")
      { lang[3].style.visibility = "hidden"}
      else { lang[3].style.visibility = "visible" }
  }}>
    <span className="cun">Швевский</span>
      <label className="cun1" >
        Пройти входное тестирование
      </label> 
      <div className="cub42 cub_q" style={{visibility: "visible"}}>
      <span className="cu">Швевский</span> 
      </div>
      
    </label>
    <label className="cub cub5" onClick={()=>{
      if (lang[4].style.visibility == "visible")
      { lang[4].style.visibility = "hidden"}
      else { lang[4].style.visibility = "visible" }
  }}>
    <span className="cun">Датский</span>
      <label className="cun1" >
        Пройти входное тестирование
      </label> 
      <div className="cub52 cub_q" style={{visibility: "visible"}}>
      <span className="cu">Датский</span> 
    </div>
      
    </label>
    <div className="cub6">
      <div className="cub66">
        <div className="cub666" />
      </div>
    </div>
    </div>
  <div className="listnis">
    <label className="l l1" >
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
    <label className="l l2" >
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
    <label className="l l3" >
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
    <label className="l l4" >
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
    <label className="l l5" >
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
    <label className="l l6" >
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
    <form action="ser.js" id="form">
      <input type="submit" id="submit_b" />
    </form>
  </div>
</section>

    );
}

export default List1; 