import Head from "next/head";
import Image from "next/image";
import styles from "./Home.module.scss";
import cpus from "../products/AMD_CPUs.json";
import gpus from "../products/GPUs.json";

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>Вариклечко</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/variklechko.png" />
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
				<a className="active" href="#">
					<img src="variklechko.png" />
				</a>
				<a href="#">
					<h1>ВАРИКЛЕЧКО</h1>
				</a>
				<input
					className={styles.searchBox}
					type="text"
					id="searchBox"
					placeholder="Търси артикул ..."
				/>

				<a className={styles.nav_top_button} href="#about">
					Wishlist
				</a>
				<a className={styles.nav_top_button} href="#contact">
					Contact
				</a>
				<a className={styles.nav_top_button} href="#login.html">
					Login
				</a>
			</div>
			<ul className={styles.nav_category}>
				<li className={styles.nav_category_button}>
					<a href="#Hardware">Hardware</a>
				</li>
				<li className={styles.nav_category_button}>
					<a href="#Phone">Phone</a>
				</li>
				<li className={styles.nav_category_button}>
					<a href="#Video">Video, Photo & TV</a>
				</li>
				<li className={styles.nav_category_button}>
					<a href="#Audio">Audio & HiFi</a>
				</li>
				<li className={styles.nav_category_button}>
					<a href="#Home">Home</a>
				</li>
				<li className={styles.nav_category_button}>
					<a href="#Pharmacy">Pharmacy</a>
				</li>
				<li className={styles.nav_category_button}>
					<a href="#Sports">Sports & Freetime</a>
				</li>
				<li className={styles.nav_category_button}>
					<a href="#Diy">DIY & Garden</a>
				</li>
				<li className={styles.nav_category_button}>
					<a href="#Car">Car & Motorcycle</a>
				</li>
				<li className={styles.nav_category_button}>
					<a href="#Toy">Toy & Model Making</a>
				</li>
				<li className={styles.nav_category_button}>
					{" "}
					<a href="#Games">Games</a>
				</li>
				<li className={styles.nav_category_button}>
					<a href="#Movies">Movies</a>
				</li>
				<li className={styles.nav_category_button}>
					<a href="#Software">Software</a>
				</li>
				<li className={styles.nav_category_button}>
					<a href="#Office">Office & School</a>
				</li>
				<li className={styles.nav_category_button}>
					<a href="#Services">Services</a>
				</li>
			</ul>
			{/*
			<main className={styles.main}>
				{/*<div className="Header-grid - logo, searchbar, deals, wunschlisten, einstellungen, anmelden"></div>*/}
			{/*<nav className="NavBar - hardware, telefone, video's fotos"></div>*/}
			{/*<div className="filters"></div>*/}
			{/*<div className="SearchBar"></div>}
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
			</main>

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
}
