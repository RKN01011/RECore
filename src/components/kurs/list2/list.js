import React, { Component } from "react";
import {connect} from "react-redux"
import { getBase, getDelet } from "../../../actions/base.action";




let form_chose = document.getElementsByClassName("aside");
let kurs_form = document.getElementById("kurs_form");

let body = document.body;
function visable (){
  if(form_chose[0].style.display == "flex"){
    form_chose[0].style.display = "none"
    body.style.overflow = "";
  } else {
    form_chose[0].style.display = "flex"
    body.style.overflow = "hidden";
    }
}
export const chose = {
  name: "",
  data: [],
  
  setName(name){
  let dn = name;
  return this.name = dn + "";
  },
  setData(name){
  let dn = name;
  return this.data.push(dn);  
  }
}

function addChose(){
  let kurs_form_chose = [];
  for (let r = 0; r < kurs_form.length; r++) {
    if (kurs_form[r].checked == true){
    kurs_form_chose.push(kurs_form[r])
    }
  };
  return kurs_form_chose;
}

class List2 extends Component {
  constructor(props){
    super(props);
    this.state = {
      
    };
 }



 base_list_two(){
    return this.props.base.map((name)=>{
    return <div key={name} className="kurs_comp"> { name }  </div> 
    })
    }
   

  render(){
    return(
<section className="listKurs1">
  <header className="header_kurs">
    <h1>Расписание старта курсов</h1>
    <p>
      Чтобы узнать дату первого занятия, выбирете язык и уровень выше
    </p>
  </header>
  <main className="main_kurs">
  <form action="" id="kurs_form" />

    


    <input type="checkbox" name="feb" value="feb05_02" id="feb05_02" form="kurs_form"/>
    <input type="checkbox" name="feb" value="feb07_02" id="feb07_02" form="kurs_form"/>
    <input type="checkbox" name="feb" value="feb10_02" id="feb10_02" form="kurs_form"/>
    <input type="checkbox" name="feb" value="feb20_02" id="feb20_02" form="kurs_form"/>

    <input type="checkbox" name="mar" value="mar05_03" id="mar05_03" form="kurs_form"/>
    <input type="checkbox" name="mar" value="mar07_03" id="mar07_03" form="kurs_form"/>
    <input type="checkbox" name="mar" value="mar10_03" id="mar10_03" form="kurs_form"/>
    <input type="checkbox" name="mar" value="mar15_03" id="mar15_03" form="kurs_form"/>
    <input type="checkbox" name="mar" value="mar20_03" id="mar20_03" form="kurs_form"/>
    <input type="checkbox" name="mar" value="mar31_03" id="mar31_03" form="kurs_form"/>

    <input type="checkbox" name="apr" value="apr05_04" id="apr05_04" form="kurs_form"/>
    <input type="checkbox" name="apr" value="apr07_04" id="apr07_04" form="kurs_form"/>
    <input type="checkbox" name="apr" value="apr10_04" id="apr10_04" form="kurs_form"/>
    <input type="checkbox" name="apr" value="apr15_04" id="apr15_04" form="kurs_form"/>
    <input type="checkbox" name="apr" value="apr20_04" id="apr20_04" form="kurs_form"/>
    <input type="checkbox" name="apr" value="apr31_04" id="apr31_04" form="kurs_form"/>

    <input type="checkbox" name="may" value="may05_05" id="may05_05" form="kurs_form"/>
    <input type="checkbox" name="may" value="may07_05" id="may07_05" form="kurs_form"/>
    <input type="checkbox" name="may" value="may10_05" id="may10_05" form="kurs_form"/>
    <input type="checkbox" name="may" value="may15_05" id="may15_05" form="kurs_form"/>
    <input type="checkbox" name="may" value="may20_05" id="may20_05" form="kurs_form"/>

    <input type="checkbox" name="jun" value="jun05_06" id="jun05_06" form="kurs_form"/>
    <input type="checkbox" name="jun" value="jun07_06" id="jun07_06" form="kurs_form"/>
    <input type="checkbox" name="jun" value="jun10_06" id="jun10_06" form="kurs_form"/>
    <input type="checkbox" name="jun" value="jun15_06" id="jun15_06" form="kurs_form"/>
    <input type="checkbox" name="jun" value="jun20_06" id="jun20_06" form="kurs_form"/>

    <input type="checkbox" name="jul" value="jul05_07" id="jul05_07" form="kurs_form"/>
    <input type="checkbox" name="jul" value="jul07_07" id="jul07_07" form="kurs_form"/>
    <input type="checkbox" name="jul" value="jul10_07" id="jul10_07" form="kurs_form"/>
    <input type="checkbox" name="jul" value="jul15_07" id="jul15_07" form="kurs_form"/>
    <input type="checkbox" name="jul" value="jul20_07" id="jul20_07" form="kurs_form"/>
    <input type="checkbox" name="jul" value="jul31_07" id="jul31_07" form="kurs_form"/>

<div className="aside" style={{display: "none"}} >
  <aside id="form_chose">
  <div id="close" onClick={visable}></div>
  <h3 className="teg_kurs">Курс:</h3>
  <div id="kurs_chose">{ 
  this.base_list_two()
  }</div>
  
  <h3 className="teg_kurs">Дата:</h3>
  <div id="kurs_data"></div>

  <input type="radio" name="pay_version" value="f_cash" form="kurs_form" id="f_cash"/>
  <input type="radio" name="pay_version" value="e_csh" form="kurs_form" id="e_cash"/>

  <h4 className="teg_kurs">Форма оплаты</h4>
  <div className="block_cash">
  <label className="f_cash cash" htmlFor="f_cash">Наличные</label>
  <label className="e_cash cash" htmlFor="e_cash">Безналичная</label>
  </div>
<div className="form_block">
<div className="form_frag">
  <p className="teg_kurs">ФИО*</p>
  <input type="text" form="kurs_form" name="person_famil" />
</div>
<div className="form_frag">
  <p className="teg_kurs">E-mail*</p>
  <input type="text" form="kurs_form" name="person_email" />
</div>
<div className="form_frag">
  <p className="teg_kurs">Название организации:</p>
  <input type="text" form="kurs_form" name="person_org" />
</div>
<div className="form_frag">
  <p className="teg_kurs">Телефон:</p>
  <input type="text" form="kurs_form" name="person_tell" />
</div>
  
</div>
  <p className="teg_kurs" >Комментарий:</p>
  <textarea name="person" name="person_comm"/>
  
  <input type="submit" value="Отправить"/>
  </aside>
</div>

    <div className="nis_l">
      <div className="data">
        <label className="data_ul data_kurs1" htmlFor="feb05_02">
          <span className="li">05.02</span>
          <span className="li">Исландский 1А</span>
          <br />
          <span className="li_nis">
            17:00 - 19:00, вторник и пятница
          </span>
        </label>
        <label className="data_ul data_kurs2" htmlFor="feb07_02">
          <span className="li">07.02</span>
          <span className="li">Исладский А2</span>
          <br />
          <span className="li_nis">
            17:00 - 19:00, вторник и пятница
          </span>
        </label>
        <label className="data_ul data_kurs3" htmlFor="feb10_02">
          <span className="li">10.02</span>
          <span className="li">Норвежский В1</span>
          <br />
          <span className="li_nis">
            17:00 - 19:00, вторник и пятница
          </span>
        </label>
        <label className="data_ul data_kurs4" htmlFor="feb20_02">
          <span className="li">20.02</span>
          <span className="li">Финский А1</span>
          <br />
          <span className="li_nis">
            17:00 - 19:00, вторник и пятница
          </span>
        </label>
      </div>
    </div>
    <div className="nis_l">
      <div className="data">
        <label className="data_ul data_kurs5" htmlFor="mar05_03">
          <span className="li">05.03</span>
          <span className="li">Датский А1</span>
          <br />
          <span className="li_nis">
            17:00 - 19:00, вторник и пятница
          </span>
        </label>
        <label className="data_ul data_kurs6" htmlFor="mar07_03">
          <span className="li">07.03</span>
          <span className="li">Датский А2</span>
          <br />
          <span className="li_nis">
            17:00 - 19:00, вторник и пятница
          </span>
        </label>
        <label className="data_ul data_kurs7" htmlFor="mar10_03">
          <span className="li">10.03</span>
          <span className="li">Норвежский В2</span>
          <br />
          <span className="li_nis">
            17:00 - 19:00, вторник и пятница
          </span>
        </label>
        <label className="data_ul data_kurs8" htmlFor="mar15_03">
          <span className="li">15.03</span>
          <span className="li">Финский А2</span>
          <br />
          <span className="li_nis">
            17:00 - 19:00, вторник и пятница
          </span>
        </label>
        <label className="data_ul data_kurs9" htmlFor="mar20_03">
          <span className="li">20.03</span>
          <span className="li">Швевский С1</span>
          <br />
          <span className="li_nis">
            17:00 - 19:00, вторник и пятница
          </span>
        </label>
        <label className="data_ul data_kurs10" htmlFor="mar31_03">
          <span className="li">31.03</span>
          <span className="li">Швевский С2</span>
          <br />
          <span className="li_nis">
            17:00 - 19:00, вторник и пятница
          </span>
        </label>
      </div>
    </div>
    <div className="nis_l">
      <div className="data">
        <label className="data_ul data_kurs11" htmlFor="apr05_04">
          <span className="li">05.04</span>
          <span className="li">Швевский А1</span>
          <br />
          <span className="li_nis">
            17:00 - 19:00, вторник и пятница
          </span>
        </label>
        <label className="data_ul data_kurs12" htmlFor="apr07_04">
          <span className="li">07.04</span>
          <span className="li">Швевский А2</span>
          <br />
          <span className="li_nis">
            17:00 - 19:00, вторник и пятница
          </span>
        </label>
        <label className="data_ul data_kurs13" htmlFor="apr10_04">
          <span className="li">10.04</span>
          <span className="li">Норвежский С2</span>
          <br />
          <span className="li_nis">
            17:00 - 19:00, вторник и пятница
          </span>
        </label>
        <label className="data_ul data_kurs14" htmlFor="apr15_04">
          <span className="li">15.04</span>
          <span className="li">Норвежский С2</span>
          <br />
          <span className="li_nis">
            17:00 - 19:00, вторник и пятница
          </span>
        </label>
        <label className="data_ul data_kurs15" htmlFor="apr20_04">
          <span className="li">20.04</span>
          <span className="li">Датский С1</span>
          <br />
          <span className="li_nis">
            17:00 - 19:00, вторник и пятница
          </span>
        </label>
        <label className="data_ul data_kurs16" htmlFor="apr31_04">
          <span className="li">31.04</span>
          <span className="li">Датский С2</span>
          <br />
          <span className="li_nis">
            17:00 - 19:00, вторник и пятница
          </span>
        </label>
      </div>
    </div>
    <div className="nis_l">
      <div className="data">
        <label className="data_ul data_kurs17" htmlFor="may05_05">
          <span className="li">05.05</span>
          <span className="li">Норвежский А1</span>
          <br />
          <span className="li_nis">
            17:00 - 19:00, вторник и пятница
          </span>
        </label>
        <label className="data_ul data_kurs18" htmlFor="may07_05">
          <span className="li">07.05</span>
          <span className="li">Норвежский А2</span>
          <br />
          <span className="li_nis">
            17:00 - 19:00, вторник и пятница
          </span>
        </label>
        <label className="data_ul data_kurs19" htmlFor="may10_05">
          <span className="li">10.05</span>
          <span className="li">Датский В2</span>
          <br />
          <span className="li_nis">
            17:00 - 19:00, вторник и пятница
          </span>
        </label>
        <label className="data_ul data_kurs20" htmlFor="may15_05">
          <span className="li">15.05</span>
          <span className="li">Датский В1</span>
          <br />
          <span className="li_nis">
            17:00 - 19:00, вторник и пятница
          </span>
        </label>
        <label className="data_ul data_kurs21" htmlFor="may20_05">
          <span className="li">20.05</span>
          <span className="li">Швевский А2</span>
          <br />
          <span className="li_nis">
            17:00 - 19:00, вторник и пятница
          </span>
        </label>
      </div>
    </div>
    <div className="nis_l">
      <div className="data">
        <label className="data_ul data_kurs22" htmlFor="jun05_06">
          <span className="li">05.06</span>
          <span className="li">Финский В1</span>
          <br />
          <span className="li_nis">
            17:00 - 19:00, вторник и пятница
          </span>
        </label>
        <label className="data_ul data_kurs23" htmlFor="jun07_06">
          <span className="li">07.06</span>
          <span className="li">Финский В2</span>
          <br />
          <span className="li_nis">
            17:00 - 19:00, вторник и пятница
          </span>
        </label>
        <label className="data_ul data_kurs24" htmlFor="jun10_06">
          <span className="li">10.06</span>
          <span className="li">Исладский В2</span>
          <br />
          <span className="li_nis">
            17:00 - 19:00, вторник и пятница
          </span>
        </label>
        <label className="data_ul data_kurs25" htmlFor="jun15_06">
          <span className="li">15.06</span>
          <span className="li">Исладский С1</span>
          <br />
          <span className="li_nis">
            17:00 - 19:00, вторник и пятница
          </span>
        </label>
        <label className="data_ul data_kurs26" htmlFor="jun20_06">
          <span className="li">20.06</span>
          <span className="li">Финский С1</span>
          <br />
          <span className="li_nis">
            17:00 - 19:00, вторник и пятница
          </span>
        </label>
      </div>
    </div>
    <div className="nis_l">
      <div className="data">
        <label className="data_ul data_kurs27" htmlFor="jul05_07">
          <span className="li">05.07</span>
          <span className="li">Исладский С2</span>
          <br />
          <span className="li_nis">
            17:00 - 19:00, вторник и пятница
          </span>
        </label>
        <label className="data_ul data_kurs28" htmlFor="jul07_07">
          <span className="li">07.07</span>
          <span className="li">Финский С2</span>
          <br />
          <span className="li_nis">
            17:00 - 19:00, вторник и пятница
          </span>
        </label>
        <label className="data_ul data_kurs29" htmlFor="jul10_07">
          <span className="li">10.07</span>
          <span className="li">Швевский В2</span>
          <br />
          <span className="li_nis">
            17:00 - 19:00, вторник и пятница
          </span>
        </label>
        <label className="data_ul data_kurs30" htmlFor="jul15_07">
          <span className="li">15.07</span>
          <span className="li">Швевский В1</span>
          <br />
          <span className="li_nis">
            17:00 - 19:00, вторник и пятница
          </span>
        </label>
        <label className="data_ul data_kurs31" htmlFor="jul20_07">
          <span className="li">20.07</span>
          <span className="li">Финский С1</span>
          <br />
          <span className="li_nis">
            17:00 - 19:00, вторник и пятница
          </span>
        </label>
        <label className="data_ul data_kurs32" htmlFor="jul31_07">
          <span className="li">31.07</span>
          <span className="li">Исладский В1</span>
          <br />
          <span className="li_nis">
            17:00 - 19:00, вторник и пятница
          </span>
        </label>
      </div>
    </div>
    <div className="footer">
      <div className="footer_n" onClick={visable} >Записаться в группу</div>
      <div className="footer_n n" onClick={this.listKurs}>Добавит в календарь</div>
    </div>
    <footer className="footer_kurs">
      <div className="footer_block" />
      <div className="footer_wap">
        <div className="footer_text text_kurs1">
          {" "}
          <p>
            NORN<br />
            школа скандинавских языков
          </p>
          <p>
            199983, Санкт-Петербург ул. Казанская, 32, БЦ “Успех”, 7
            этаж c 10:00 до 22:00 с ПН по СБ
          </p>
          <p>
            norn@gmail.com<br />
            + 7 893 567 78 67
          </p>
        </div>
        <div className="footer_text text_kurs2">
          <ul>
            <li>Шведский язык</li>
            <li>Норвежский язык</li>
            <li>Исландский язык</li>
            <li>Финский язык</li>
            <li>Датский язык</li>
            <li>Тестирование</li>
            <li>Формы обучения</li>
          </ul>
        </div>
        <div className="footer_text text_kurs2">
          <ul>
            <li>Аудитории</li>
            <li>Преподаватели</li>
            <li>Летняя школа</li>
            <li>Отзывы</li>
            <li>Политика конфиденциальности</li>
            <li>FAQ</li>
          </ul>
        </div>
      </div>
    </footer>
  </main>
  <div className="das">{}</div>
</section>

    );
 } }
export default connect(
  (store)=>{
return {
  base: store.base
}
  },
(dispatch)=>{
  return{
    getUser: async ()=>{
      const action = await getBase()
      dispatch(action);
    },
    getW: async ()=>{
      const kiril = await getDelet()
      dispatch(kiril);
    }
  }
  }
)( List2);