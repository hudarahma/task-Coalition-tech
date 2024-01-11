import React, { useState } from 'react'
import styles from '../styles/CarouselImg.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleChevronLeft, faCircleChevronRight, faCircleXmark } from '@fortawesome/free-solid-svg-icons';


const CarouselImg = ({ imgs }) => {

    const [slideNumber, setSlideNumber] = useState(0);
    const [ openModal, setOpenModal ] = useState(false);

    // open Modal

    const handleOpenModal = (index) => {
        setSlideNumber(index);
        setOpenModal(true);
    }

    // close Modal
    const handleCloseModal = () => {
        setOpenModal(false);
    }
    // prev slide
    const prevSlide = () => {
       return (slideNumber === 0) ? setSlideNumber(imgs.length -1) : (slideNumber - 1); 
    }

    //  next slide
    const nextSlide = () => {
       return slideNumber +1 === imgs.length ? setSlideNumber(0) : setSlideNumber(slideNumber +1)
    }

  return (
      <div className={styles.carousel__container}>
      {
          openModal && 
          <div className={styles.slider__wrap}>
                <FontAwesomeIcon icon={faCircleXmark} className={styles.btn__close} onClick={handleCloseModal} />
                <FontAwesomeIcon icon={faCircleChevronLeft} className={styles.btn__left} onClick={prevSlide} />
                <FontAwesomeIcon icon={faCircleChevronRight} className={styles.btn__right} onClick={nextSlide} />
                <div className={styles.full_screen_img}>
                    <img src={imgs[slideNumber].img} alt='full-screen-imgs' />

                </div>
          </div>
          
      }

        <div className={styles.carousel__img__slider}>
            { imgs && imgs.map((slide, index)=> {
                return (
                    <div className={styles.single__img} key={index} onClick={ ()=> handleOpenModal(index)}>
                        <img className={styles.single__img__width} src={slide.img} key={index} alt='carousel' />
                    </div>
                )
            })}
            
        </div>
    </div>
  )
}

export default CarouselImg