import styles from "./shopItem.module.scss";

interface ShopItemProps {
    img: string;
    name: string;
    price: number;
    }

export function ShopItem({ img, name, price }: ShopItemProps) {
    const previousPrice = price * 1.1;
    
    return (
        <div className={styles.shopItem}>
            <div className={styles.itemImg}>
                <img src={img} alt={name} />
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
                            <span>R${previousPrice.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                            <h6>R${price.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</h6>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}