import styles from "./styles.module.scss";
import ImgBanner from "../../assets/banners.svg";
import ImgBannerMobile from "../../assets/bannersmobile.svg";
import {useEffect, useState} from "react";

export function Banner() {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 475);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className={styles.banner}>
        <img src={isMobile? ImgBannerMobile : ImgBanner } alt="Banner" />
    </div>
  );
}
