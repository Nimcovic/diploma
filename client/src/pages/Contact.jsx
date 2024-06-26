import style from '../style.module.css';

export default function Contact() {
    return (
    <div className={style.project} style={{flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
        <p className={style.text33} style={{height:'auto', marginTop:'20px'}}>
            Если Вы устали играть в блогера, ежедневно создавая REELS, в надежде, что придут новые подписчики, устали
            прыгать перед камерой, превращаться/переодеваться или что-там еще (из того, что Вам посоветовали делать на
            курсе по REELS), а клиентов все нет, просто ЗАПУСТИТЕ  TARGET.<br /> <br />На сегодняшний день, таргет  -
            самый эффективный инструмент продаж. Таргетированная реклама прицельно работает в социальных сетях с
            аудиторией, максимально интересной для Вашего бизнеса. К Вам будут приходить только те подписчики, которым
            интересен Ваш продукт; из того региона, который Вам нужен. В некоторых случаях – реальный клиент позвонит
            или напишет Вам на прямую.
          </p>
        <div className={style.div} style={{marginTop:'30px', marginBottom:'35px', marginLeft:'800px'}}>
            <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScWQsuvhFz1NunoWFQkyy1LiXUhCZdwy18GHfSHRfDMiPdFnA/viewform?embedded=true" width="640" height="1440" frameborder="0" marginheight="0" marginwidth="0">Загрузка…</iframe>
        </div>
    </div>
    );
  }
  