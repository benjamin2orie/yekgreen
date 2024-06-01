

import React from 'react';
import styles from './Home.module.css';
import {MdNavigateBefore, MdNavigateNext, MdSearch,} from 'react-icons/md';
import Dish from '../Image/miner.jpeg';
import MenuIcon from '../Image/Layer_x0020_1logo.png';
import Icon_menu from '../Image/menu-variantmenu.png';
import SubHome from './SubHome';
import { NavLink } from 'react-router-dom';

const Home = () => {
    const Notify = ({isActive}) =>{isActive
    ? Notify.style.background = 'red'
    :Notify.style.background = 'blue'
    }
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
                        <li>blogs</li>
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
            <div className={styles.slider}>
                <div className={styles.list}>
                    <div className="items">
                        <div className="content1">
                            <input type="text" placeholder="enter your email here"/>
                            <button className="btn_s"><MdSearch/></button>
                            
                        </div>
                        <img src={Dish} alt='slider dish'/>
                    </div>

                    <div className="items">
                        <div className="content1">
                            <input type="text" placeholder="enter your email here"/>
                            <button className="btn_s"><MdSearch/></button>
                        
                        </div>
                        <img src={Dish} alt='slider dish'/>
                    </div>

                    <div className="items">
                        <div className="content1">
                            <input type="text" placeholder="enter your email here"/>
                            <button className="btn_s"><MdSearch/></button>
                       
                        </div>
                        <img src={Dish} alt='slider dish'/>
                    </div>

                    <div className="items">
                        <div className="content1">
                            <input type="text" placeholder="enter your email here"/>
                            <button className="btn_s"><MdSearch/></button>
                    
                        </div>
                        <img src={Dish} alt='slider dish'/>
                    </div>

                    <div className="items">
                        <div className="content1">
                            <input type="text" placeholder="enter your email here"/>
                            <button className="btn_s"><MdSearch/></button>
                       
                        </div>
                        <img src={Dish} alt='slider dish'/>
                    </div>

                    <div className="items">
                        <div className="content1">
                            <input type="text" placeholder="enter your email here"/>
                            <button className="btn_s"><MdSearch/></button>
                  
                        </div>
                        <img src={Dish} alt='slider dish'/>
                    </div>
                </div>
                <div className="button">
                    <button id="prev"><MdNavigateBefore/></button>
                    <button id="next"><MdNavigateNext/></button>
                </div>
                <ul className="dots">
                    <li clasName="active"></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
            {/* <img src={Dish} alt='dish menu' className={ styles.dish}/>
            <div className={ styles.container_radius}>
                <div className={styles.radius}></div>
                <div className={styles.radil}></div>
                <div className={styles.radil}></div>
                <div className={styles.radil}></div>
                <div className={styles.radil}></div>
            </div> */}
        </div>
        <SubHome/>
        <NavLink to='/login' className={styles.Nav} >login</NavLink>
      
    </div>
  )
}

export default Home;
