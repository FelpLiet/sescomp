import { useState } from "react";
import styles from "./styles.module.scss";
// import { Button } from "../../components/Button";
// import { Icon } from "../../components/icons";
import { Header } from "../../shared/header";
import { ShopItem } from "../../components/ShopComponents/shopItem/shopItem";
import copoBeijos from "../../assets/shop/copoBeijos.png";
import cadernoYouAreMyCss from "../../assets/shop/cadernoYouAreMyCss.png";
import pins from "../../assets/shop/pins.png";
import copoBeakpoint from "../../assets/shop/copoBreakPoints.png";
import ecobagAprendizado from "../../assets/shop/ecobagAprendizado.png";

const produtos = [
    {
        nome: "Copo Beijos",
        preco: 0,
        categoria: "Copos",
        img: copoBeijos,
    },
    {
        nome: "Copo Breakpoints",
        preco: 0,
        categoria: "Copos",
        img: copoBeakpoint,
    },
    {
        nome: "Pin Logo Sescomp",
        preco: 0,
        categoria: "Pins",
        img: pins,
    },
    {
        nome: "Caderno You Are The Css to my Html",
        preco: 0,
        categoria: "Cadernos",
        img: cadernoYouAreMyCss,
    },
    {
        nome: "Ecobag Aprendizado & diversão & networking",
        preco: 0,
        categoria: "Ecobags",
        img: ecobagAprendizado,
    },
];

export function Shop() {
	const [selectedCategory, setSelectedCategory] = useState<string | null>("Copos");

	const handleCategoryClick = (category: string) => {
		setSelectedCategory(category);
		const element = document.getElementById("Shop");
		const offset = 76;
		const bodyRect = document.body.getBoundingClientRect().top;
		const elementRect = element?.getBoundingClientRect().top || 0;
		const elementPosition = elementRect - bodyRect;
		const offsetPosition = elementPosition - offset;
	
		window.scrollTo({
			top: offsetPosition,
			behavior: "smooth"
		});
	}

	const filteredProducts = selectedCategory ? produtos.filter(produto => produto.categoria === selectedCategory) : produtos;

    return (
        <>
            <Header title="Loja oficial" />
            <section id="Shop" className={styles.shop}>
                <div className={styles.title}>
                    <h1>Loja oficial</h1>
                    <p>A venda dos produtos é apenas presencial</p>
                </div>
                <div className={styles.categoriasContainer}>
					<button
						className={selectedCategory === "Copos" ? styles.selected : ""}
						onClick={() => handleCategoryClick("Copos")}
					>
						Copos
					</button>
					<button
						className={selectedCategory === "Pins" ? styles.selected : ""}
						onClick={() => handleCategoryClick("Pins")}
					>
						Pins
					</button>
					<button
						className={selectedCategory === "Cadernos" ? styles.selected : ""}
						onClick={() => handleCategoryClick("Cadernos")}
					>
						Cadernos
					</button>
					<button
						className={selectedCategory === "Ecobags" ? styles.selected : ""}
						onClick={() => handleCategoryClick("Ecobags")}
					>
						Ecobags
					</button>
                </div>
                <div className={styles.products}>
                    {filteredProducts.map((produto, index) => (
                        <ShopItem
                            key={index}
                            name={produto.nome}
                            price={produto.preco}
                            img={produto.img}
                        />
                    ))}
                </div>
            </section>
        </>
    );
}
