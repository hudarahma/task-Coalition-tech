import React from 'react'
import styles from './Home.module.css';
import Logo from '../components/Logo';
import Schedule from '../components/Schedule';
import Footer from '../components/Footer';
import CarouselImg from '../components/CarouselImg';
// import Carousel from '../components/Carousel';

function Home() {
    const imgs = [
        {
          img: '/assets/thumb-1.png'
        },
        {
         img: '/assets/thumb-2.png'
        },
        {
          img: '/assets/thumb-1.png'
        },
        {
         img: '/assets/thumb-2.png'
        },
          
    ]

    return (
        <div className={styles.home__container}>

            <div className={styles.landing__page}>
                    {/* navbar header logo */}
                    {/* background */}
                <div className={styles.header}>
                    <Logo />
                    <div className={styles.tabs}>
                        <a href='#history'>01. History</a>
                        <a href='#team'>02. Team</a>
                    </div>
                </div>
                <img className={styles.losangeles} src='/assets/LOSANGELES MOUNTAINS-cuirved.png' alt='losangeles'/>
                
            </div>

                {/* HISTORY SECTION */}
            <section id="history" className={styles.history__section}>
                <div className={styles.history__header}>
                    <div className={styles.logo__header}>
                        <Logo />
                        <img src='/assets/LOSANGELES MOUNTAINS.png' />
                    </div>
                    <div className={styles.history__tabs}>
                        <a href='#history'>01. History</a>
                        <a href='#team'>02. Team</a>
                    </div>
                </div>
                <div className={styles.history__contents}>
                    <div className={styles.history__title}>
                        <h1>01.</h1>
                        <h3>History</h3>
                    </div>
                    <div className={styles.history__discription}>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione alias incidunt commodi error amet veniam quae non, cum nihil? Officia animi voluptatem repellat. Aliquam aspernatur voluptatem minima culpa repellat quibusdam?</p>
                    </div>
                </div>

                {/* <Carousel /> */}
                <CarouselImg imgs={imgs} />

            </section>
           
          
            <section id="team" className={styles.climb__section}>
                    <div className={styles.climb__contents}>
                        <div className={styles.climb__title}>
                            <h1>02.</h1>
                            <h3>Climb</h3>
                        </div>
                        <div className={styles.climb__discription}>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione alias incidunt commodi error amet veniam quae non, cum nihil?</p>
                        </div>
                    </div>

                    <div className={styles.climb__tabs}>
                        <div className={styles.mountain__tabs}>
                            <a>Mountain 1</a>
                            <a>Mountain 2</a>
                        </div>
                    </div>
                    <div className={styles.climb__schedule}>
                        <Schedule />
                    </div>
            </section>
        <Footer />
    </div>
  )
}

export default Home
