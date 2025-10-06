import React from 'react'
import heartIcon from "../assets/img/icone-coracao.svg";

const Footer = () => {
  return (
    <footer>
      <div className='footer__info'>
        <p>
          Code with heart. Design with purpose <img width='10' className='footer__icon' src={heartIcon} alt='Ícone de coração' />
        </p>
      </div>
      <p>
        © 2025. Produzido por <a className='footer__link --underline' href='https://github.com/netuninho' target='_blank'>Manuela Silva</a>
      </p>
    </footer>
  )
}

export default Footer
