import { Footer } from 'flowbite-react';
import { Link } from 'react-router-dom';
import { BsFacebook, BsInstagram, BsTwitter, BsGithub, BsDribbble } from 'react-icons/bs';
import style from '../style.module.css';
import icon4 from "../img/icon_4.png";

export default function FooterCom() {
  return (
    <Footer>
      <div className={style.project}>
      <div className={style.contact}>
        <div className={style.section}><div className={style.text}>CONTACT</div></div>
        <div className={style.section2}>
          <div className={style.mail}><img className={style.icon} src={icon4} /></div>
          <div className={style.textfor0}><div className={style.textwrapper}>nikitinaelena.ea@gmail.com</div></div>
        </div>
      </div>
      </div>
    </Footer>
  );
}
