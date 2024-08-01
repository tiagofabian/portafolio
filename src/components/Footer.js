import React, {useState} from 'react';
import phoneIco from './../assets/img/icon/phone.png';
import addressIco from './../assets/img/icon/address.png';
import githubIco from './../assets/img/icon/github.png';
import linkedinIco from './../assets/img/icon/linkedin.png';
import emailIco from './../assets/img/icon/email.png';
import "../assets/styles/app/footer.css";

const Footer = () => {
  const [date, setDate] = useState(new Date())

  return (
    <footer>
      <div className='foot-element-container'>
        <div className='foot-contactinfo-container'>
          <ul className='foot-contactinfo-list'>
            <li className='foot-contactinfo-item'>
              <img src={phoneIco} alt="phone" title="Teléfono"/>
              <span>(+56) 966200519</span>
            </li>
            <li className='foot-contactinfo-item'>
              <img src={addressIco} alt="address" title="Dirección"/>
              <span>Puente Alto, Chile</span>
            </li>
            <li className='foot-contactinfo-item'>
              <img src={githubIco} alt="github" title="Github"/>
              <a href="https://github.com/tiagofabian">github.com/tiagofabian</a>
            
            </li>
            <li className='foot-contactinfo-item'>
              <img src={linkedinIco} alt="linkedin" title="LinkedIn"/>
              <a href="https://www.linkedin.com/in/tiago-fabian/">linkedin.com/in/tiago-fabian</a>
            </li>
            <li className='foot-contactinfo-item'>
              <img src={emailIco} alt="email" title="Email"/>
              <span>tiagofabian195@outlook.com</span>
            </li>
          </ul>
        </div>
      </div>
      <div className='foot-date-container'>
        <hr />
        <span className='foot-date-text'>©{date.getFullYear()} por Tiago.</span>
      </div>
    </footer>
  )
}

export default Footer;
