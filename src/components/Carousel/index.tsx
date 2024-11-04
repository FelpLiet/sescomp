import React, { useState, useEffect } from "react";
import styles from "./Carousel.module.scss";
interface CarouselProps {
  visibleItems: number;
  children: React.ReactNode;
}

const Carousel = ({ children, visibleItems = 1 }: CarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalItems = React.Children.count(children);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + visibleItems >= totalItems ? 0 : prevIndex + visibleItems
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalItems - visibleItems : prevIndex - visibleItems
    );
  };

  const slideOffset = {
    transform: `translateX(-${currentIndex * (100 / visibleItems)}%)`,
    // justifyContent: visibleItems == 1 ? "" : "center",
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }
    , 3000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className={styles.sliderContainer}>
      <button className={styles.navButton} onClick={prevSlide}>
        <svg
          width="48"
          height="49"
          viewBox="0 0 48 49"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M32.3055 13.5448C27.5004 18.7291 22.6952 23.9134 17.8901 29.0977L16.4755 23.7286C23.4563 26.4755 29.7687 30.5247 35.0623 35.8668C37.973 38.804 33.4414 43.3492 30.5287 40.4098C26.0525 35.8927 20.6958 32.2552 14.771 29.9239C12.5279 29.0412 11.5971 26.4529 13.3564 24.5547C18.1616 19.3704 22.9667 14.1861 27.7719 9.00176C30.586 5.96564 35.112 10.5169 32.3055 13.5448Z"
            fill="white"
          />
        </svg>
      </button>

      <div className={styles.slider}>
        <div className={styles.sliderWrapper} style={slideOffset}>
          {React.Children.map(children, (child) => (
            <div
              className={styles.sliderItem}
              style={{
                flex: `0 0 ${100 / visibleItems}%`,
                // margin: visibleItems !== 1 ? "0 -20px" : "",
              }}
            >
              {child}
            </div>
          ))}
        </div>
      </div>

      <button className={styles.navButton} onClick={nextSlide}>
        <svg
          width="48"
          height="49"
          viewBox="0 0 48 49"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15.6945 13.5448C20.4996 18.7291 25.3048 23.9134 30.1099 29.0977L31.5245 23.7286C24.5437 26.4755 18.2313 30.5247 12.9377 35.8668C10.027 38.804 14.5586 43.3492 17.4713 40.4098C21.9475 35.8927 27.3042 32.2552 33.229 29.9239C35.4721 29.0412 36.4029 26.4529 34.6436 24.5547C29.8384 19.3704 25.0333 14.1861 20.2281 9.00176C17.414 5.96564 12.888 10.5169 15.6945 13.5448Z"
            fill="white"
          />
        </svg>
      </button>
    </div>
  );
};

export default Carousel;