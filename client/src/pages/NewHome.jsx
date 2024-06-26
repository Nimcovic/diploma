import { useEffect, useState } from 'react';
import '../globals.css';
import style from '../style.module.css';
import arrow from "../img/arrow-icon.png";
import whitearrow from "../img/white_arrow.png";
import cat from "../img/block_2.png";
import photo from "../img/photo.png";
import phone from "../img/phone.png";
import icon1 from "../img/icon_1.png";
import icon2 from "../img/icon_2.png";
import icon3 from "../img/icon_3.png";
import { Link, useLocation, useNavigate } from 'react-router-dom';



export default function NewHome() {

  return (
    <div className={style.project}>
      <div className={style.div}>


        <div className={style.head}>

          <div className={style.section10}>
            <div className={style.textcontainer10}>
              <div className={style.text43}>КАК</div>
              <div className={style.text44}>продавать</div>
              <div className={style.text45}>свой</div>
            </div>
            <div className={style.div2}>
              <div className={style.text46}>БИЗНЕС?!</div>
              <div className={style.text47}>ДОРОГО.</div>
            </div>
            <div className={style.textcontainer11}>
              <div className={style.textfor8}>
                <div className={style.text48}>3 метода эффективных продаж</div>
              </div>
            <img className={style.arrowbot} src={arrow} />          
            </div>
          </div>
        </div>

        
      

      <div className={style.pr}>
        <p className={style.text41} style={{position:'absolute', zIndex:'100', top:'1493px', right:'59px'}}>
            <b>ИСПОЛЬЗУЙ ЛИЧНЫЙ БРЕНД.</b><br></br>
            Разработка МАРКЕТИНГОВОЙ и PR-стратегии начинается c ревизии:
            <ul style={{listStyle:'disc'}}>
            <li>Ваши ресурсы и возможности</li>
            <li>Сложившаяся репутация</li>
            <li>Сегментация рынка</li>
            <li>Конкурентная среда</li>
            <li>Определение преимуществ</li>
            </ul>
        </p>
        <div className={style.piar}>
          <div className={style.piarsect}>
            <div className={style.textbox}><div className={style.text35}>PR</div></div>
            <div className={style.div2}>
              <div className={style.piarcontainer}>
                <div className={style.textcont}><div className={style.text36}>ХОРОШИЙ</div></div>
                <div className={style.textcont2}><div className={style.text37}>ПИАР-</div></div>
                <div className={style.textcont3}>
                  <div className={style.left}><div className={style.text38}>ПРЯМОЙ</div></div>
                  <div className={style.right}><div className={style.text39}>ПУТЬ</div></div>
                </div>
              </div>
              <div className={style.forpiartext}><div className={style.text40}>к продажам</div></div>
            </div>
          </div>
          <div className={style.piarsect2}>
            <div className={style.wrapper}>
              <div className={style.div3}>
                <div className={style.ellipse9}></div>
                <div className={style.ellipse9}></div>
                <div className={style.ellipse9}></div>
              </div>
              <div className={style.second}>
                <div className={style.ellipse9}></div>
                <div className={style.ellipse9}></div>
                <div className={style.ellipse9}></div>
              </div>
            </div>
            <div className={style.piarcont}>
              <div className={style.piarcont2}>
                <div className={style.div4}>
                  <p className={style.text41}>
                    Если Вы хотите выделяться на фоне конкурентов, зарабатывать больше за счет собственного имиджа и
                    харизмы, знать свои преимущества, привлекать больше клиентов, в целом – быть успешным в своем
                    деле, закажите МАРКЕТИНГОВУЮ И PR-стратегию.
                  </p>
                  <img className={style.whitearrow} src={whitearrow} />
                </div>
                <div className={style.forpiartext2}><div className={style.text42}><Link to='/contact'> Заказать</Link></div></div>
              </div>
              <div className={style.piarphoto}>
                <img className={style.cat} src={cat} />
              </div>
            </div>
          </div>
        </div>
        <div className={style.rect}><div className={style.rectangle}></div></div>
      </div>

      <div className={style.target}>
        <div className={style.section8}>
          <div className={style.targcont}><div className={style.text29}>TARGET</div></div>
          <div className={style.div2}>
            <div className={style.targtext}>
              <div className={style.targtext2}><div className={style.text30}>НАЙДИ</div></div>
              <div className={style.targtext3}><div className={style.text31}>КЛИЕНТОВ</div></div>
              <div className={style.targtext4}><div className={style.text32}>БЫСТРО!</div></div>
            </div>
            <div className={style.imgwrapper}>
              <img className={style.arrowbot} src={arrow} />
            </div>
          </div>
        </div>
        
        <div className={style.section9}>
          <p className={style.text33}>
            Если Вы устали играть в блогера, ежедневно создавая REELS, в надежде, что придут новые подписчики, устали
            прыгать перед камерой, превращаться/переодеваться или что-там еще (из того, что Вам посоветовали делать на
            курсе по REELS), а клиентов все нет, просто ЗАПУСТИТЕ  TARGET.<br /> <br />На сегодняшний день, таргет  -
            самый эффективный инструмент продаж. Таргетированная реклама прицельно работает в социальных сетях с
            аудиторией, максимально интересной для Вашего бизнеса. К Вам будут приходить только те подписчики, которым
            интересен Ваш продукт; из того региона, который Вам нужен. В некоторых случаях – реальный клиент позвонит
            или напишет Вам на прямую.
          </p>
          <div className={style.container6}>
            <div className={style.textcontainer9}>
              <div className={style.textfor6}><div className={style.text34}>Однако тут подстерегает опасность</div></div>
            <img className={style.arrowicon} src={arrow} />
            </div>
          <div className={style.textfor7}><div className={style.text6}><Link to='/contact'> Как настроить рекламу</Link></div></div>
          </div>
          
        </div>
        </div>

        

      <div className={style.greyblockwrapper}> <div className={style.greyblock2}></div></div>

      <div className={style.strategy}>
        <div className={style.over}>
          <div className={style.section6}>
            <div className={style.container3}><div className={style.text17}>STRATEGY</div></div>
            <div className={style.container4}>
              <div className={style.div2}>
                <div className={style.textcontainer6}>
                  <div className={style.text18}>НЕТ</div>
                  <div className={style.text19}>ГОТОВЫХ</div>
                  <div className={style.text20}>СТРАТЕГИЙ</div>
                </div>
                <div className={style.textcontainer7}>
                  <div className={style.text21}>ЕСТЬ</div>
                  <div className={style.text22}>АНАЛИЗ</div>                  
                  <img className={style.line} /> 
                  <div className={style.text22}>ТОЧКА СТАРТА</div>
                  <img className={style.line} />
                  <div className={style.text23}>ЖЕЛАНИЕ СОЗДАТЬ <br />ЛУЧШИЙ БИЗНЕС</div>
                </div>
              </div>
              <div className={style.textcontainer8}>
                <p className={style.text24}>
                  Чтобы получить результат, нужен комплексный подход: качественная настройка таргета, тщательная
                  подготовка самого продукта, и, конечно же, проработка личностного имиджа/бренда, а также знание
                  маркетинговых уловок. В каждом отдельном случае – будет своя стратегия, своя точка роста.
                </p>
                <div className={style.textfor5}><div className={style.text25}><Link to='/contact'> Консультация</Link></div></div>
            </div>
          </div>
        </div>
        <div className={style.section7}>
          <div className={style.photowrapper}>
            <img className={style.photo} src={photo} />
          </div>
          <div className={style.container5}>
            <div className={style.text26}>Никитина Елена:</div>
            <p className={style.text27}>10 лет на ТВ - профессиональный <br />журналист, продюсер</p>
            <p className={style.text27}>Работа в реальном бизнесе и <br />политике как PR менеджер</p>
            <p className={style.text28}>Интернет – маркетинг, креативный <br />монтаж, таргет.</p>
          </div>
        </div>
      </div>
      </div>
      

      <div className={style.block}><div className={style.greyblock}></div></div>

      <div className={style.smm}>
        <div className={style.section4}><div className={style.text8}>SMM</div></div>
        <div className={style.section5}>
          <div className={style.container2}>
            <div className={style.textcontainer5}>
              <div className={style.text9}>ХОЧЕШЬ, <br />ЧТОБЫ ТВОЙ</div>
              <p className={style.text10}><span className={style.span}>&nbsp;</span> <span className={style.textwrapper2}>АККАУНТ</span></p>
              <div className={style.text11}>ПРОДАВАЛ?!</div>
            </div>
            <div className={style.div2}>
              <div className={style.text12}>СДЕЛАЙ ЕГО</div>
              <div className={style.text13}>ПРАВИЛЬНО</div>
            </div>
            <div className={style.div3}>
              <p className={style.text14}>
                Итак, имидж настроен, таргет запущен, но состоятся ли продажи?!  В большинстве случаев это зависит
                от SMM (ведения Вашего аккаунта, сторис, переписок с клиентами, и от того, насколько теплой (лояльной)
                является Ваша аудитория).
              </p>
              <p className={style.text15}>
                Бизнес не может удержаться исключительно на рекламе. Хорошо сделанный оффер и грамотно запущенный
                таргет укажет покупателю на ваш продукт, а вот купят ли у Вас, во многом зависит от того, насколько он
                хорош, уникален и
              </p>
              <p className={style.text16}>
                конкурентоспособен по цене и качеству, - эти задачи и должен раскрывать специалист по СММ, а не просто
                копировать текст из интернета и ставить красивую картинку иди видео. Если это про бизнес, SMM
              </p>
            </div>
          </div>
          <div className={style.div4}>
            <div className={style.arrowiconwrapper}>
              <img className={style.arrowicon} src={arrow} />
            </div>
            <div className={style.textfor4}><div className={style.text6}><Link to='/contact'> Получить анализ ИГ</Link></div></div>
        </div>
      </div>
      </div>

      <div className={style.market}>
        <div className={style.containerrow}>
          <div className={style.row}>
            <img className={style.icon2}src={icon1} />
              <p className={style.text7}>ПРОФЕССИОНАЛЬНАЯ И КРЕАТИВНАЯ УПАКОВКА ВАШЕГО БИЗНЕСА</p>
          </div>
          <div className={style.row2}>
            <img className={style.icon3}src={icon2} />
              <p className={style.text7}>ВЕДУЩИЕ ТЕХНОЛОГИИ В WEB РАЗРАБОТКЕ НА БАЗЕ WORD PRESS/</p>
          </div>
          <div className={style.row3}>
            <img className={style.icon3} src={icon3} />
              <div className={style.text7}>КОМПЛЕКСНОЕ МАРКЕТИНГОВОЕ ПРОДВИЖЕНИЕ IG/FB/TELEGRAM/YOUTUBE</div>
          </div>
        </div>
      </div>


      <div className={style.cases}>
      <div className={style.divwrapper}><div className={style.text2}>CASES</div></div>
      <div className={style.section3}>
        <div className={style.textcontainer}>
          <div className={style.text3}>БУДЬ УСПЕШНЫМ<br />В INSTAGRAM!</div>
          <p className={style.p}>3 эффективных метода продаж, которые <br />применили мои клиенты</p>
        </div>
        <div className={style.container}>
          <div className={style.img}><img className={style.phone} src={phone} /></div>
          <div className={style.textcontainer2}>
            <div className={style.textcontainer3}>
              <div className={style.textfor2}><div className={style.text4}>ПРОБЛЕМЫ БИЗНЕСА:</div></div>
            <div className={style.textcontainer4}>
              <div className={style.marks}>
                <div className={style.ellipse}></div>
                <div className={style.ellipse2}></div>
                <div className={style.ellipse3}></div>
                <div className={style.ellipse4}></div>
                <div className={style.ellipse5}></div>
                <div className={style.ellipse6}></div>
                <div className={style.ellipse7}></div>
                <div className={style.ellipse8}></div>
              </div>
              <p className={style.text5}>
                репутация на рынке – сомнительная<br />узнаваемость – 0<br />крупные конкуренты и множество
                мелких, демпингующих рынок<br />отсутствие личного бренда<br />ведение аккаунта без стратегии,
                «тухлая» аудитория<br />бизнес больше подходит под категорию «хобби» нежели имеет стабильный
                заработок<br />нет понимания, куда развиваться бизнесу и самому специалисту<br />«свободные
                окошки», сезонное отсутствие клиентов, нет денег не развитие.
              </p>
            </div>
          </div>
          <div className={style.arrow}>
            <img className={style.arrowicon} src={arrow} />
              </div>
          <div className={style.textfor3}><div className={style.text6}><Link to='/contact'> Просчитать свой кейс</Link></div></div>
      </div>



        </div>
      </div>
      </div>

      
    </div>
  </div>

  );
}
