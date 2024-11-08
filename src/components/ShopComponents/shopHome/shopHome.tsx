import { ShopItem } from "../shopItem/shopItem";
import { Button } from "../../Button";
import { Icon } from "../../icons";
import { produtos } from "../../../data/products";
import { useNavigate } from "react-router-dom";
import styles from "./shopHome.module.scss";

export function ShopHome() {
    const filteredItems = produtos.reduce((acc, item) => {
        const categories = acc.map(produto => produto.categoria);
        if (
            (item.categoria === "Camisas" && !categories.includes("Camisas")) ||
            (item.categoria === "Canecas" && !categories.includes("Canecas")) ||
            (item.categoria === "Cadernetas" && !categories.includes("Cadernetas"))
        ) {
            acc.push(item);
        }
        return acc;
    }, [] as typeof produtos);

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
                {filteredItems.map((produto) => (
                    <ShopItem
                        key={produto.nome}
                        imgFront={produto.imgFront}
                        imgBack={produto.imgBack}
                        name={produto.nome}
                        price={produto.preco}
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
