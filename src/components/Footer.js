import React, {useState} from 'react';
import "../assets/styles/app/footer.css";

const Footer = () => {
  const [date, setDate] = useState(new Date())

  return (
    <footer>
      <div className='foot-element-container'>
        <div className='foot-contactinfo-container'>
          <ul className='foot-contactinfo-list'>
            <li className='foot-contactinfo-item'>
              <img src="https://i.ibb.co/DQhZJXL/llamada.png" alt="phone" title="Teléfono"/>
              <span>(+56) 966200519</span>
            </li>
            <li className='foot-contactinfo-item'>
              <img src="https://i.ibb.co/98Zxd6Z/ubicacion.png" alt="address" title="Dirección"/>
              <span>Puente Alto, Chile</span>
            </li>
            <li className='foot-contactinfo-item'>
              <img src="https://i.ibb.co/GQ66hx6/github.png" alt="github" title="Github"/>
              <a href="https://github.com/tiagofabian">github.com/tiagofabian</a>
            
            </li>
            <li className='foot-contactinfo-item'>
              <img src="https://i.ibb.co/F36BP9X/linkedin.png" alt="linkedin" title="LinkedIn"/>
              <a href="https://www.linkedin.com/in/tiago-fabian/">linkedin.com/in/tiago-fabian</a>
            </li>
            <li className='foot-contactinfo-item'>
              <img src="https://i.ibb.co/zrx7p06/arroba.png" alt="email" title="Email"/>
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
