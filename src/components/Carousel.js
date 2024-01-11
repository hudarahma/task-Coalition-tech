import React from 'react'
import styles from '../styles/Carousel.module.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';


// using react-silk package

function Carousel() {

    let settings = {
        dots: true,
        infinit: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
    };
  return (
    <div className={styles.carousal__container}>
      <div className={styles.carousal__wrapper}>
        <Slider {...settings} style={{width:"55vw"}}>
            <img className={styles.img} src='assets/thumb-1.png'/>
            <img className={styles.img} src='assets/thumb-2.png'/>
            <img className={styles.img} src='assets/thumb-1.png'/>
            <img className={styles.img} src='assets/thumb-2.png'/>
        </Slider>
      </div>
    </div>
  )
}

export default Carousel
