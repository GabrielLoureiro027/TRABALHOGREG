import React from 'react'
import style from '../Css/Footer.module.css'

const Footer = () => {
  return (
    <div className={style.container}>
      <a href="https://gohorse.com.br/" className={style.link}>Go Horse</a>
      <a href="https://www.figma.com/design/3582RsWNC35JRrXyg6X4oR/SENAI?node-id=0-1&t=ClFxeqxf6FPeUsR7-1" className={style.link}>Figma</a>
    </div>
  )
}

export default Footer
