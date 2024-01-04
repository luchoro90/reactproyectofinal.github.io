import React from 'react'
import './Footer.css';
import { AiFillFacebook, AiFillGithub, AiFillLinkedin, AiFillTwitterCircle } from 'react-icons/ai'



export const Footer = () => {
  return (
    <>
    <footer class="footer">
            <div class="container">
                <div class="row">
                    <div class="footer-col">
                        <h4>SOPORTE</h4>
                        <ul>
                            <li><a href="#">Garantia</a></li>
                            <li><a href="#">Seguimiento de productos</a></li>
                            <li><a href="#">Terminos y Condiciones</a></li>
                        </ul>
                    </div>
                    <div class="footer-col">
                        <h4>MOBILIARIO</h4>
                        <ul>
                            <li><a href="#">Escritorios</a></li>
                            <li><a href="#">Sillas y Sillones</a></li>
                            <li><a href="#">Armarios</a></li>
                        </ul>
                    </div>
                    <div class="footer-col">
                        <h4>Nuestros locales</h4>
                        <ul>
                            <li><a href="#">Bs As - CABA</a></li>
                            <li><a href="#">Cordoba</a></li>
                            <li><a href="#">Rosario</a></li>
                        </ul>
                    </div>
                    <div class="footer-col">
                        <h4 className='redes'>SIGUENOS</h4>
                        <div class="social-links">
                            <a href="https://www.facebook.com/"><AiFillFacebook  target='_blank' size="35px" /></a>
                            <a href="https://ar.linkedin.com/"><AiFillLinkedin target='_blank' size="35px" /></a>
                            <a href="https://www.github.com/"><AiFillGithub target='_blank' size="35px" /></a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        <div class="grupo-2">
            <small>&copy;2023 OfiMuebles - Todos Los Derechos Reservados</small>
        </div>

        </>

  )
}
export default Footer;