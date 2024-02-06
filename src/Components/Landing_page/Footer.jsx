
import React from 'react'
import { AiOutlineSend } from 'react-icons/ai';
import Brand from '../Image/Brand.png';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <div>
        <div className={styles.bg_image}>
            <article>
                <div className={styles.promo}>
                    <h2>Don't miss out!</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi deserunt dolor aut dicta! In ab suscipit repellendus iure corrupti alias.</p>
                </div>
                <div className={styles.promo_input}>
                    <input type='email' placeholder='Email address'/><br/>
                    <button className={styles.btn_btn}><AiOutlineSend/></button>
                </div>
            </article>
        </div>
        <footer className={ styles.footer_menu}>
            <div className={styles.footer_center}>
                <div>
                    <img src={Brand} alt='yekgreen lgoo'/>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora quo repellendus iure doloribus ducimus! Nihil provident dignissimos eligendi excepturi, maiores quos. Dolores officia labore vero. Aperiam tempora animi</p>
                </div>
                <div className={styles.container}>
                    <ul>
                        <li>about us</li>
                        <li>privacy policy</li>
                        <li>disclaimer</li>
                    </ul>
                </div>
            </div>
            <div className={styles.border}></div>
            <p>Copyright 2024. All right reserved</p>
        </footer>
      
    </div>
  )
}

export default Footer
