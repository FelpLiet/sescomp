import { useState } from "react";
import styles from "./styles.module.scss";
// import { Button } from "../../components/Button";
// import { Icon } from "../../components/icons";
import { ShopItem } from "../../components/ShopComponents/shopItem/shopItem";
import { produtos } from "../../data/products";

export function Shop() {
    const [selectedCategory, setSelectedCategory] = useState<string | null>(
        "Todos"
    );

    const handleCategoryClick = (category: string) => {
        setSelectedCategory(category);

        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    const filteredProducts = produtos.filter((produto) => {
        if (selectedCategory === "Todos") return true;
        return produto.categoria === selectedCategory;
    });

    return (
        <>
            <section id="Shop" className={styles.shop}>
                <div className={styles.title}>
                    <h1>Loja oficial</h1>
                    <p>A venda dos produtos é apenas presencial</p>
                </div>
                <div className={styles.categoriasContainer}>
                    <button
                        className={
                            selectedCategory === "Todos" ? styles.selected : ""
                        }
                        onClick={() => handleCategoryClick("Todos")}
                    >
                        Todos
                    </button>
                    <button
                        className={
                            selectedCategory === "Copos" ? styles.selected : ""
                        }
                        onClick={() => handleCategoryClick("Copos")}
                    >
                        Copos
                    </button>
                    <button
                        className={
                            selectedCategory === "Camisas"
                                ? styles.selected
                                : ""
                        }
                        onClick={() => handleCategoryClick("Camisas")}
                    >
                        Camisas
                    </button>
                    <button
                        className={
                            selectedCategory === "Cadernetas"
                                ? styles.selected
                                : ""
                        }
                        onClick={() => handleCategoryClick("Cadernetas")}
                    >
                        Cadernetas
                    </button>
                </div>
                <div className={styles.products}>
                    {filteredProducts.map((produto, index) => (
                        <ShopItem
                            key={`${produto.nome}-${selectedCategory}-${index}`} // chave única
                            name={produto.nome}
                            price={produto.preco}
                            imgFront={produto.imgFront}
                            imgBack={produto.imgBack}
                        />
                    ))}
                </div>
            </section>
        </>
    );
}
