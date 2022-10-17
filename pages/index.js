import Head from "next/head";
import Image from "next/image";
import styles from "../css/Home.module.css";
import cpus from "../js/products/AMD_CPUs.json";
import gpus from "../js/products/GPUs.json";

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>Вариклечко</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
				<link rel="preconnect" href="https://app.snipcart.com" />
				<link rel="preconnect" href="https://cdn.snipcart.com" />
				<link
					rel="stylesheet"
					href="https://cdn.snipcart.com/themes/v3.2.2/default/snipcart.css"
				/>
			</Head>
			<main className={styles.main}>
				<h1>
					<img src="variklechko.png" />
				</h1>
				{/*<div className="Header-grid - logo, searchbar, deals, wunschlisten, einstellungen, anmelden"></div>*/}
				{/*<nav className="NavBar - hardware, telefone, video's fotos"></div>*/}
				{/*<div className="filters"></div>*/}
				{/*<div className="SearchBar"></div>*/}
				"terzito nishto ne razbira"
				<nav>
					<ul>
						<li>
							<a href="gpus">GPU</a>
						</li>
						<li>
							<a href="#">CPU</a>
						</li>
						<li>
							<a href="#">RAM</a>
						</li>
					</ul>
				</nav>
				<h1 font-weight="bold" className={styles.title}>
					Добре дошъл във Вариклечко!
				</h1>
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
										data-item-id={product}
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
					hidden
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
		</div>
	);
}
