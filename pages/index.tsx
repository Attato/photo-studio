import { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import styles from 'styles/Home.module.scss';
import Header from 'components/header/header';
import Footer from 'components/footer/footer';

import vintage from 'pages/api/vintage.json';
import interior from 'pages/api/interior.json';
import scandi from 'pages/api/scandi.json';
import bohemia from 'pages/api/bohemia.json';

const Home: NextPage = () => {
	return (
		<div className={styles.container}>
			<Head>
				<title>Фотостудия Екатеринбург</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Header />
			<main className={styles.main}>
				<div className={styles.masthead}>
					<div className={styles.masthead__content}>
						<h1>Интерьерная фотостудия Екатеринбурга</h1>
						<span>Здесь рождаются ваши истории...</span>
						<div className={styles.buttons__wrap}>
							<Link href="https://yandex.ru/maps/-/CCU66XW99B" target="blank">
								Как к нам пройти
							</Link>
							<Link href="/#contacts">Наши контакты</Link>
						</div>
					</div>
				</div>

				<div className={styles.title__section}>
					<span id="hall" className={styles.hall}></span>
					<h1>Зал VINTAGE</h1>
					<div className={styles.column}>
						<span>Площадь - 40 кв. м</span>
						<span>Высота потолков - 3.5 м.</span>
						<span>Стоимость 1 часа - 1500р.</span>
					</div>
				</div>

				<div className={styles.gallery}>
					{vintage.map((images, id) => {
						return (
							<div className={styles.card} key={id}>
								<div
									className={styles.image}
									draggable="false"
									style={{ backgroundImage: `url(${images.image})` }}
								></div>
							</div>
						);
					})}
				</div>

				<div className={styles.title__section}>
					<h1>Зал ИНТЕРЬЕР</h1>
					<div className={styles.column}>
						<span>Площадь - 60 кв. м</span>
						<span>Высота потолков - 3.5 м</span>
						<span>Стоимость 1 часа (пн-чт) - 1400р.</span>
						<span>Стоимость 1 часа (пт-вс) - 1700р.</span>
					</div>
				</div>

				<div className={styles.gallery}>
					{interior.map((images, id) => {
						return (
							<div className={styles.card} key={id}>
								<div
									className={styles.image}
									draggable="false"
									style={{ backgroundImage: `url(${images.image})` }}
								></div>
							</div>
						);
					})}
				</div>

				<div className={styles.title__section}>
					<h1>Зал SCANDI</h1>
					<div className={styles.column}>
						<span>Площадь - 65 кв. м</span>
						<span>Высота потолков - 4.6 м</span>
						<span>Стоимость 1 часа (пн-чт) - 1400р.</span>
						<span>Стоимость 1 часа (пт-вс) - 1700р.</span>
					</div>
				</div>

				<div className={styles.gallery}>
					{scandi.map((images, id) => {
						return (
							<div className={styles.card} key={id}>
								<div
									className={styles.image}
									draggable="false"
									style={{ backgroundImage: `url(${images.image})` }}
								></div>
							</div>
						);
					})}
				</div>

				<div className={styles.title__section}>
					<h1>Зал BOHEMIA</h1>
					<div className={styles.column}>
						<span>Площадь - 60 кв. м</span>
						<span>Высота потолков - 4.6 м</span>
						<span>Стоимость 1 часа (пн-чт) - 1400р.</span>
						<span>Стоимость 1 часа (пт-вс) - 1700р.</span>
					</div>
				</div>

				<div className={styles.gallery}>
					{bohemia.map((images, id) => {
						return (
							<div className={styles.card} key={id}>
								<div
									className={styles.image}
									draggable="false"
									style={{ backgroundImage: `url(${images.image})` }}
								></div>
							</div>
						);
					})}
				</div>

				<div className={styles.title__section}>
					<h1>Отмена и перенос брони</h1>
					<span>
						Правила действуют во всех случаях, независимо от причины отмены
						(включая форс-мажоры).
					</span>
					<div className={styles.row}>
						<div className={styles.column}>
							<h3>1. Более чем за 3 календарных дня:</h3>
							<span>• предоплата возвращается 100%.</span>
						</div>
						<div className={styles.column}>
							<h3>2. От 3х полных дней до 1го дня:</h3>
							<span>• возврат 50%.</span>
						</div>
						<div className={styles.column}>
							<h3>3. Менее чем за сутки:</h3>
							<span>• предоплата не возвращается.</span>
						</div>
					</div>
				</div>

				<Footer />
			</main>
		</div>
	);
};

export default Home;
