import styles from "./shopHome.module.scss";
import { ShopItem } from "../shopItem/shopItem";
// import { Button } from "../../Button";
// import { Icon } from "../../icons";
import copoBeijos from "../../../assets/shop/copoBeijos.png";
import cadernoYouAreMyCss from "../../../assets/shop/cadernoYouAreMyCss.png";
import pins from "../../../assets/shop/pins.png";
// import copoBeakpoint from "../../../assets/shop/copoBreakPoints.png";
// import ecobagAprendizado from "../../../assets/shop/ecobagAprendizado.png";

export function ShopHome() {
    const items = [
        {
            img: copoBeijos,
            name: "Copo Beijos",
            price: 0,
        },
        {
            img: cadernoYouAreMyCss,
            name: "Caderno You Are The Css to my Html",
            price: 0,
        },
        {
            img: pins,
            name: "Pins",
            price: 0,
        },
    ];

    return (
        <div className={styles.shop}>
            <div className={styles.header}>
                <div className={styles.title}>
                    <h1>Loja oficial</h1>
                    <p>A venda dos produtos é apenas presencial</p>
                </div>
                {/* <Button.Root style="primary">
                    <Button.Content label="Ver todos os produtos" />
                    <Icon.Arrow />
                </Button.Root> */}
            </div>
            <section className={styles.itens}>
                {items.map((item, index) => (
                    <ShopItem
                        key={index}
                        img={item.img}
                        name={item.name}
                        price={item.price}
                    />
                ))}
            </section>
            {/* <span className={styles.btn}>
                <Button.Root style="primary">
                    <Button.Content label="Ver todos" />
                    <Icon.Arrow />
                </Button.Root>
            </span> */}
        </div>
    );
}
