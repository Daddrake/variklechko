import styles from "./Home.module.scss";
import React, { useState } from "react";
import Navbar from "./Navbar";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

export default function Home() {
	/*let reg = confirm(
		"Искате ли да спечелите купон за пазаруване на стойност от 500лв?\nРегистрирай се сега!\nДобави артикули на стойност до 500лв в количката си.\nСпечели!"
	);if (Navbar.reg) {
		window.location.href = "../components/contact";
	}*/
	const [isLogged, setIsLogged] = useState(false);
	if (!isLogged) {
		return (
			<div className={styles.container}>
				<Navbar />
				<div>
					<p></p>
				</div>
				<div>
					<p></p>
				</div>
				{/*<Popup
					trigger={
						<button>
							Искате ли да спечелите купон за пазаруване на стойност от 500лв?
							<br /> Регистрирай се сега! <br /> Добави артикули на стойност до
							500лв в количката си и <br /> СПЕЧЕЛИ!
						</button>
					}
					position="bottom"
				>
					<div>Popup content here !!</div>
				</Popup>*/}
				<div className={styles.header}>
					<h1>VARIKLECHKO: Пазарувай лесно и евтино от Германия!</h1>
				</div>
				<div className={styles.startpage_content}>
					<ul className={styles.startpage_cat}>
						{buildCat(
							"Хардуеар",
							"Hardware",
							"CPU",
							"Процесори (CPU),",
							"GPU",
							" графични карти,",
							"Mobo",
							" дънни платки,",
							"Tab",
							" таблети,",
							"HDD",
							" твърди дискове и SSD,",
							"Case",
							" калъфи,",
							"m_hw",
							" други..."
						)}
						{buildCat(
							"Телефон",
							"Mobile",
							"Phones",
							"Мобилни телефони,",
							"Smartwatch",
							" Smartwatch,",
							"m_mobile",
							" други..."
						)}
						{buildCat(
							"TV",
							"TV",
							"Tvs",
							"Телевизори,",
							"Photo",
							" Фотография,",
							"Homecinema",
							" домашно видео,",
							"PhotoVid",
							" фото/видео аксесоари,",
							"Video",
							" видеокамери,",
							"Beamer",
							" излъчватели,",
							"m_tv",
							" други..."
						)}
						{buildCat(
							"Аудио",
							"Audio",
							"Headphones",
							"Слушалки",
							"HiFi",
							" HiFi компоненти,",
							"ProAudio",
							" професионално аудио,",
							"Soundsys",
							" озвучителна техника,",
							"Portable",
							" преносимо аудио,",
							"Instruments",
							" инструменти,",
							"m_audio",
							" други..."
						)}
						{buildCat(
							"Дом",
							"Home",
							"Vacuum",
							"Прахосмукачки и почистване,",
							"Dishwasher",
							" съдомиялни машини,",
							"Fridge",
							" хладилници и фризери,",
							"Laundry",
							" пране и сушене,",
							"kitchen",
							" малки кухненски уреди,",
							"m_home",
							" други..."
						)}
						{buildCat(
							"Дрогерия и лекарства",
							"Pharmacy",
							"Здравеопазване,",
							" първа помощ и хигиена,",
							" лекарства и хранителни добавки,",
							" грижа за устната кухина и зъбите,",
							" контактни лещи,",
							" парфюмерия,",
							" други..."
						)}
						{buildCat(
							"Спорт",
							"Sport",
							"Часовници,",
							" Outdoor,",
							" ролкови спортове,",
							" функционално облекло,",
							" фитнес,",
							" катерене,",
							" други..."
						)}
						{buildCat(
							"DIY",
							"Diy",
							"Сградна автоматизация и сигурност,",
							" производство и съхранение на електроенергия,",
							" оборудване за работилници,",
							" батерии и зарядни устройства,",
							" градинска техника,",
							" аксесоари и консумативи за инструменти,",
							" други..."
						)}
						{buildCat(
							"Автомобили и мотоциклети",
							"Car",
							"Автомобили и мотоциклети,",
							" автомобилни гуми и джанти,",
							" аксесоари,",
							" мотоциклети,",
							" поддръжка и грижа,",
							" транспорт,",
							" системи за електронно зареждане,",
							" други..."
						)}
						{buildCat(
							"Играчки и създаване на модели",
							"Toy",
							" Създаване на RC модели,",
							" игри за конструиране и строителство,",
							" други играчки,",
							" кукли и фигури,",
							" забавление,",
							" обучение и експериментиране,",
							" други..."
						)}
						{buildCat(
							"Игри",
							"Games",
							"PlayStation 5 (PS5),",
							" Nintendo Switch,",
							" Xbox Series X & Series S,",
							" PlayStation 4 (PS4),",
							" Игри за PC",
							" Книги за решаване и други,",
							" други..."
						)}
						{buildCat(
							"Филми",
							"Movies",
							"Филми,",
							" Blu-ray,",
							" Филми DVD,",
							" други..."
						)}
						{buildCat(
							"Софтуеaр",
							"Software",
							"Операционни системи,",
							" Офис,",
							" Графика и видео,",
							" Сигурност и архивиране,",
							" Езици и обучение,",
							" Навигация,",
							" други..."
						)}
						{buildCat(
							"Офис и училище",
							"Office",
							"Принтери и скенери,",
							" презентации,",
							" офис мебели,",
							" консумативи,",
							" архивиране и сортиране,",
							" консумативи за рисуване и занаяти,",
							"други... "
						)}
					</ul>
				</div>
				{/*
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

function buildCat(category, ref, ...subcategory) {
	category = category.toString();
	return (
		<li className={styles.startpage_cat}>
			<a
				className={styles.startpage_cat_img}
				href={"./categories/" + ref}
				title={category}
			>
				<img src={"../img/" + category + ".jpg"} title={category}></img>
			</a>
			<div>
				<a
					className={styles.startpage_cat_title}
					title={"show " + category + " subcategories"}
					href={"./categories/" + ref}
				>
					<h2>{category}</h2>
				</a>
				<p className={styles.x}>{buildSubcat(subcategory)}</p>
			</div>
		</li>
	);
}

function buildSubcat(...subcategory) {
	let subcats = [];
	for (let i = 0; i < subcategory[0].length; i++) {
		let subcat = (
			<a className={styles.startpage_cat_sub} href={subcategory[0][i]}>
				{subcategory[0][i + 1]}
			</a>
		);
		subcats.push(subcat);
		i++;
	}
	return [subcats];
}
