import { useNavigate } from "react-router-dom";
import styles from "./shopHome.module.scss";
import { ShopItem } from "../shopItem/shopItem";
import { Button } from "../../Button";
import { Icon } from "../../icons";
import camisaRoxaFrente from "../../../assets/shop/camisaRoxaFrente.png";
import canecaBreakpoints from "../../../assets/shop/canecaBreakpoints.png";
import cadernetaBeijos from "../../../assets/shop/cadernetaBeijos.png";

export function ShopHome() {
    const items = [
        {
            "img": camisaRoxaFrente,
            "name": "Camisa Aprendizado",
            "price": 0,
        },
        {
            "img": canecaBreakpoints,
            "name": "Caneca Breakpoints",
            "price": 0,
        },
        {
            "img": cadernetaBeijos,
            "name": "Caderneta Beijos",
            "price": 0,
        },
    ];

    const navigate = useNavigate();
    const handleNavigation = () => {
        navigate('/loja');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    return (
        <div className={styles.shop}>
            <div className={styles.header}>
                <div className={styles.title}>
                    <h1>Loja oficial</h1>
                    <p>A venda dos produtos é apenas presencial</p>
                </div>
                <div className={styles.btn} onClick={handleNavigation}>
                    <Button.Root style="primary">
                        <Button.Content label="Ver todos os produtos" />
                        <Icon.Arrow />
                    </Button.Root>
                </div>
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
            <div className={styles.mobile} onClick={handleNavigation}>
                <Button.Root style="primary">
                    <Button.Content label="Ver todos os produtos" />
                    <Icon.Arrow />
                </Button.Root>
            </div>
        </div>
    );
}
