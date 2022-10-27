import Head from "next/head";
import Image from "next/image";
import styles from "./Home.module.scss";
import gpus from "../products_database/GPUs.json";
import React, { useState } from "react";

function buildCat(category, subref, ...subcategory) {
	category = category.toString();

	return (
		<li className={styles.startpage_cat}>
			<a
				className={styles.startpage_cat_img}
				href={"categories/" + category}
				title={category}
			>
				<img src={"../img/" + category + ".jpg"} title={category}></img>
			</a>
			<div>
				<a
					className={styles.startpage_cat_title}
					title={"show " + category + " subcategories"}
					href={"categories/" + category}
				>
					<h2>{category}</h2>
				</a>
				<p className={styles.x}>{buildSubcat(subref, subcategory)}</p>
			</div>
		</li>
	);
}

function buildSubcat(subref, ...subcategory) {
	let subcat = "";
	for (let i = 0; i < subcategory.length; i++) {
		subcat = (
			<a className={styles.startpage_cat_sub} href={subref.toString()}>
				{subcategory[i].toString()}
			</a>
		);
	}
	return subcat;
}

export default function Home() {
	const [isLogged, setIsLogged] = useState(false);
	if (!isLogged) {
		return (
			<div className={styles.container}>
				<Head>
					<title>Вариклечко</title>
					<meta name="description" content="Generated by create next app" />
					<link rel="icon" href="../img/variklechko.png" />
					<link rel="preconnect" href="https://app.snipcart.com" />
					<link rel="preconnect" href="https://cdn.snipcart.com" />
					<link
						rel="stylesheet"
						href="https://cdn.snipcart.com/themes/v3.2.2/default/snipcart.css"
					/>
					<link
						href="https://use.fontawesome.com/releases/v5.6.1/css/all.css"
						rel="stylesheet"
					/>
					<link
						href="https://fonts.googleapis.com/css2?family=Lato&display=swap"
						rel="stylesheet"
					/>
				</Head>
				<div className={styles.nav_top}>
					<a className="active" href="">
						<img src="../img/variklechko.png" />
					</a>
					<a href="">
						<h1>ВАРИКЛЕЧКО</h1>
					</a>
					<input
						className={styles.searchBox}
						type="text"
						id="searchBox"
						placeholder="Търси артикул ..."
						enterKeyHint="search"
						//autocomplete="off"
						//aria-label="Search"
						//aria-autocomplete="list"
						//aria-controls="autocomplete-list"
					/>

					<a className={styles.nav_top_button} href="components/wishlist">
						Wishlist
					</a>
					<a className={styles.nav_top_button} href="components/contact">
						Contact
					</a>
					<a className={styles.nav_top_button} onClick="">
						Login
					</a>
				</div>
				<div className={styles.nav_category}>
					<ul className={styles.nav_category}>
						<li className={styles.nav_category_button}>
							<a href="categories/Hardware">Hardware</a>
						</li>
						<li className={styles.nav_category_button}>
							<a href="categories/Phone">Phone</a>
						</li>
						<li className={styles.nav_category_button}>
							<a href="categories/Video">Video, Photo & TV</a>
						</li>
						<li className={styles.nav_category_button}>
							<a href="categories/Audio">Audio & HiFi</a>
						</li>
						<li className={styles.nav_category_button}>
							<a href="categories/Home">Home</a>
						</li>
						<li className={styles.nav_category_button}>
							<a href="categories/Pharmacy">Pharmacy</a>
						</li>
						<li className={styles.nav_category_button}>
							<a href="categories/Sports">Sports & Freetime</a>
						</li>
						<li className={styles.nav_category_button}>
							<a href="categories/Diy">DIY & Garden</a>
						</li>
						<li className={styles.nav_category_button}>
							<a href="categories/Car">Car & Motorcycle</a>
						</li>
						<li className={styles.nav_category_button}>
							<a href="categories/Toy">Toy & Model Making</a>
						</li>
						<li className={styles.nav_category_button}>
							<a href="categories/Games">Games</a>
						</li>
						<li className={styles.nav_category_button}>
							<a href="categories/Movies">Movies</a>
						</li>
						<li className={styles.nav_category_button}>
							<a href="categories/Software">Software</a>
						</li>
						<li className={styles.nav_category_button}>
							<a href="categories/Office">Office & School</a>
						</li>
						<li className={styles.nav_category_button}>
							<a href="categories/Services">Services</a>
						</li>
					</ul>
				</div>
				<div className={styles.header}>
					<h1>VARIKLECHKO: Пазарувай лесно и евтино от Германия!</h1>
				</div>
				<div className={styles.startpage_content}>
					<ul className={styles.startpage_cat}>
						{buildCat(
							"Хардуеар",
							"",
							"Процесори (CPU)",
							" графични карти",
							" дънни платки",
							" таблети",
							" твърди дискове и SSD",
							" калъфи",
							" други..."
						)}
						{buildCat(
							"Телефон",
							"",
							" Мобилни телефони",
							" Smartwatch",
							" още..."
						)}
						{buildCat(
							"TV",
							"",
							"Телевизори",
							" Фотография",
							" домашно видео",
							" фото/видео аксесоари",
							" видеокамери",
							" излъчватели",
							" още..."
						)}
						{buildCat(
							"Аудио",
							"",
							"Слушалки",
							" HiFi компоненти",
							" професионално аудио",
							" озвучителна техника",
							" преносимо аудио",
							" инструменти",
							" още..."
						)}
						{buildCat(
							"Дом",
							"",
							"Прахосмукачки и почистване",
							" съдомиялни машини",
							" хладилници и фризери",
							" пране и сушене",
							" малки кухненски уреди",
							" още..."
						)}
						{buildCat(
							"Дрогерия и лекарства",
							"",
							" Здравеопазване",
							" първа помощ и хигиена",
							" лекарства и хранителни добавки",
							" грижа за устната кухина и зъбите",
							" контактни лещи",
							" парфюмерия",
							" още..."
						)}
						{buildCat(
							"Спорт",
							"",
							" Часовници",
							" Outdoor",
							" ролкови спортове",
							" функционално облекло",
							" фитнес",
							" катерене",
							" още..."
						)}
						{buildCat(
							"DIY",
							"",
							"Сградна автоматизация и сигурност",
							" производство и съхранение на електроенергия",
							" оборудване за работилници",
							" батерии и зарядни устройства",
							" градинска техника",
							" аксесоари и консумативи за инструменти",
							" още..."
						)}
						{buildCat(
							"Автомобили и мотоциклети",
							"",
							"Автомобили и мотоциклети",
							" автомобилни гуми и джанти",
							" аксесоари",
							" мотоциклети",
							" поддръжка и грижа",
							" транспорт",
							" системи за електронно зареждане",
							" още..."
						)}
						{buildCat(
							"Играчки и създаване на модели",
							"",
							" Създаване на RC модели",
							" игри за конструиране и строителство",
							" други играчки",
							" кукли и фигури",
							" забавление",
							" обучение и експериментиране",
							" още..."
						)}
						{buildCat(
							"Игри",
							"",
							"PlayStation 5 (PS5)",
							" Nintendo Switch",
							" Xbox Series X & Series S",
							" PlayStation 4 (PS4)",
							" Игри за PC",
							" Книги за решаване и други",
							" още..."
						)}
						{buildCat(
							"Филми",
							"",
							"Филми",
							" Blu-ray",
							" Филми DVD",
							" още..."
						)}
						{buildCat(
							"Софтуеaр",
							"",
							"Операционни системи",
							" Офис",
							" Графика и видео",
							" Сигурност и архивиране",
							" Езици и обучение",
							" Навигация",
							" още..."
						)}
						{buildCat(
							"Офис и училище",
							"",
							"Принтери и скенери",
							" презентации",
							" офис мебели",
							" консумативи",
							" архивиране и сортиране",
							" консумативи за рисуване и занаяти",
							"още... "
						)}
					</ul>
				</div>
				{/*
		
			<div className={styles.grid}>
				{gpus.map((product) => {
					return (
						<div key={product.Title} className={styles.list}>
							<h4>
								<img
									src={product.Image}
									//width="auto"
									//height="auto"
									alt={`Preview of ${product.Title}`}
								/>
								{product.Title}
							</h4>
							<p>{product.Info}</p>
							<p>
								More info at:
								<a href={product.Title_URL}> geizhals.de</a>
							</p>
							<p>
								{product.Retailers <= 1
									? product.Price
									: product.Price.substring(2)}
							</p>
							<p>
								<button
									className="snipcart-add-item"
									data-item-id={product.itemId}
									data-item-image={product.Title_URL}
									data-item-name={product.Info}
									data-item-price={product.Price.substring(2)}
								>
									Добави в количка
								</button>
							</p>
						</div>
					);
				})}
			</div>

		<footer className={styles.footer}>
			<script
				async
				src="https://cdn.snipcart.com/themes/v3.2.2/default/snipcart.js"
			/>
			<div
				id="snipcart"
				data-api-key="MTk5ZjVjMTQtY2U0ZC00OTUyLWExZDUtMzhhOTNhNTY3MTY4NjM4MDE0NjE5OTcxNjg1MTcy"
			/>
			<a
				href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
				target="_blank"
				rel="noopener noreferrer"
			>
				Powered by{" "}
				<span className={styles.logo}>
					<Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
				</span>
			</a>
		</footer>
		*/}
			</div>
		);
	} else {
	}
}
