

import React from 'react';
import styles from './Home.module.css';
import {MdSearch} from 'react-icons/md';
import Dish from '../Image/miner.jpeg';
// import Navbar from '../Navbar';
import MenuIcon from '../Image/Layer_x0020_1logo.png';
import Icon_menu from '../Image/menu-variantmenu.png';
import SubHome from './SubHome';

const Home = () => {
  return (
    <div>
        <div className={ styles.container_header}>
            <header>
                <div className={ styles.page_container}>
                    <div>
                        <img src={Icon_menu} alt='Dish menu' className={styles.icon}/>
                        <img src={ MenuIcon} alt='menu' className={ styles.logo}/>
                    </div>
                    <ul>
                        <li>about us</li>
                        <li>recipes</li>
                        <li>blog</li>
                    </ul>
                    <div className={styles.Login}>
                        <p>signup /<span> register</span></p>
                    </div>
                </div>
            </header>
        </div>
        <div className={ styles.section}>
            <section className={ styles.page_title}>
                <h1>home for healthy nigerian recipes</h1>
                <p>Ranging from meals to desert to drinks.</p>
                <div className={ styles.input_search}>
                    <input type='text'placeholder='Search recipes' className={styles.search}/><br/>
                    <button className={styles.btn}><MdSearch/></button>
                </div>
            </section>
            <img src={Dish} alt='dish menu' className={ styles.dish}/>
            <div className={ styles.container_radius}>
                <div className={styles.radius}></div>
                <div className={styles.radil}></div>
                <div className={styles.radil}></div>
                <div className={styles.radil}></div>
                <div className={styles.radil}></div>
            </div>
        </div>
        <SubHome/>
      
    </div>
  )
}

export default Home;
