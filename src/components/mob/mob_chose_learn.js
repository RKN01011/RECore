import React from 'react';

const mob_chose_learn = ()=>{
    return (
<div className="mob_chose_learn">
            <p className="mob_chose_text">
              Какой вид обучения<br />подойдёт вам?
            </p>
            <div className="mob_chose">
              <p>ОНЛАЙН</p>
              <p>Подойдет для удалённого изучения</p>
              <p className="mob_arrow">
                <a href="">Заполнить анкету</a>
              </p>
            </div>
            <div className="mob_chose mob_kub">
              <p>ЗАНЯТИЯ В ГРУППЕ</p>
              <p>
                Небольшие группы и удобные аудитории для тех, кто
                предпочитает учитьязыки в группе
              </p>
              <p className="mob_arrow">
                <a href="">СМОТРЕТЬ РАСПИСАНИЕ</a>
              </p>
            </div>
            <div className="mob_chose">
              <p>ИНДИВИДУАЛЬНОЕ ОБУЧЕНИЕ</p>
              <p>Индивидуальные занятия с преподавателем в удобное время</p>
            </div>
</div>
   );
}


export default mob_chose_learn;