import styles from "./styles.module.scss";
import image1 from "../../assets/images/1.png";
import image2 from "../../assets/images/2.png";
import image3 from "../../assets/images/3.png";
import image4 from "../../assets/images/4.png";
import image5 from "../../assets/images/5.png";
import { useEffect, useState } from "react";

const images = [image1, image2, image3, image4, image5];

export function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(
        currentSlide === images.length - 1 ? 0 : currentSlide + 1
      );
    }, 3000);
    return () => clearInterval(interval);
  }, [currentSlide]);

  return (
    <div className={styles.slideshow}>
      <div className={styles.slides}  style={{ transform: `translateX(-${currentSlide * 100}%)`}}>
        {images.map((image, i) => (
          <img
            key={i}
            className={styles.slider}
            src={image}
            alt={`Imagem ${i}`}
          />
        ))}
      </div>
    </div>
  );
}
