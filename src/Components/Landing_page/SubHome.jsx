import React from "react";
import styles from '../Landing_page/SubHome.module.css';
import Breakfast from "../Image/Breakfast.jpg";
import Lunch from '../Image/lunch.jpg';
import Dinner from '../Image/dinner.jpg';
import Jollof from '../Image/jollof.png';
import Africa from '../Image/africa.jpg';
import Akara from '../Image/akara.jpg';
import Footer from "./Footer";
import { AiOutlineHeart, AiOutlineStar} from 'react-icons/ai';

const SubHome = () => {
  return (
    <div className={ styles.container}>
      <div>
            <main className={ styles.container_main}>
                <h2>suggestions</h2>
                <div className={ styles.main}>
                    {/* <h2>suggestions</h2> */}
                    <div className={ styles.image_container}>
                     <img src={Breakfast} alt="Breakfast food plate" className={styles.breakfast} />
                     <h3>Breakfast</h3>
                    </div>
                    <div className={ styles.image_container}>
                      <img src={Lunch} alt="Lunch food plate" className={styles.lunch} />
                       <h3>Lunch</h3>
                    </div>
                    <div className={ styles.image_container}>
                      <img src={Dinner} alt="Dinner food plate" className={styles.dinner} />
                      <h3>Dinner</h3>
                    </div>
                </div>
            </main>
      </div>
      <div className={ styles.featured}>
        <section className={styles.fsection}>
            <h2>featured</h2>
            <div className={styles.card}>
              <div className={styles.card3}>
               <img src={Jollof} alt="Jollof food plate" className={styles.feature}/>
               <div className={styles.card2}>
                  <div className={ styles.love}>
                    <p>jollof rice & chicken</p> 
                   <AiOutlineHeart className={styles.heart}/>
                  </div>
                  <div className={ styles.love2}>
                      <p className={styles.para}>High in Carbs . <span className={styles.grey}>6 Servings</span></p>
                      <p>4.5 <span><AiOutlineStar className={styles.heart}/></span></p>
                    </div>
                </div>
              </div>
              <div>
               <img src={Africa} alt="africa salad food plate" className={styles.feature}/>
               <div className={styles.card2}>
                  <div className={ styles.love}>
                  <p>african salad</p>
                    <AiOutlineHeart className={styles.heart}/>
                 </div>
                 <div className={ styles.love2}>
                   <p className={styles.para}>High in Carbs . <span className={styles.grey}>4 Servings</span></p>
                   <p>4.5 <span><AiOutlineStar className={styles.heart}/></span></p>
                  </div>
               </div>
              </div>
              <div>
              <img src={Akara} alt="akara and pap food plate" className={ styles.feature}/>
              <div className={styles.card2}>
                  <div className={ styles.love}>
                      <p>akara & pap</p>
                      <AiOutlineHeart className={styles.heart}/>
                  </div>
                  <div className={ styles.love2}>
                    <p className={styles.para}>High in Carbs . <span className={styles.grey}>4 Servings</span></p>
                    <p>4.5 <span><AiOutlineStar className={styles.heart}/></span></p>
                  </div>
              </div>
              </div>
            </div>
        </section>
      </div>
      <Footer/>
    </div>
  );
};

export default SubHome;
