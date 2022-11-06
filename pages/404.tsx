import Header from 'components/header/header';

import Head from 'next/head';
import Link from 'next/link';

import { NextPage } from 'next';

import styles from 'styles/404.module.scss';

const errorPage: NextPage = () => {
	return (
		<div className="container">
			<Head>
				<title>404</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Header />

			<main className="main">
				<div className={styles.error}>
					<h1>Упс! 404.</h1>
					<p>Данной страницы не существует.</p>
					<Link href="/">На главную.</Link>
				</div>
			</main>
		</div>
	);
};

export default errorPage;