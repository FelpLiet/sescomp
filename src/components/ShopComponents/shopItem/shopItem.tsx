import { useState } from "react";
import styles from "./shopItem.module.scss";

interface ShopItemProps {
    imgFront: string;
    imgBack?: string;
    name: string;
    price: number;
}

export function ShopItem({ imgFront, imgBack, name, price }: ShopItemProps) {
    const [isHovered, setIsHovered] = useState(false);
    const previousPrice = price * 1.1;

    return (
        <div
            className={styles.shopItem}
            onMouseEnter={() => {
                if (imgBack)
                setIsHovered(true);
            }}
            onMouseLeave={() => {
                setIsHovered(false);
            }}
        >
            <div className={styles.itemImg}>
                <img
                    src={imgFront}
                    alt={name}
                    className={isHovered ? styles.hidden : styles.visible}
                />
                {imgBack && (
                    <img
                        src={imgBack}
                        alt={name}
                        className={isHovered ? styles.visible : styles.hidden}
                    />
                )}
            </div>
            <div className={styles.itemInfo}>
                <h4>{name}</h4>
                <div className={styles.prices}>
                    {price === 0 ? (
                        <>
                            <span>R$0,00</span>
                            <h6>Preço em breve</h6>
                        </>
                    ) : (
                        <>
                            <span>
                                R$
                                {previousPrice.toLocaleString("pt-BR", {
                                    minimumFractionDigits: 2,
                                    maximumFractionDigits: 2,
                                })}
                            </span>
                            <h6>
                                R$
                                {price.toLocaleString("pt-BR", {
                                    minimumFractionDigits: 2,
                                    maximumFractionDigits: 2,
                                })}
                            </h6>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}
