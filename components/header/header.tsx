import { useState } from 'react';
import Link from 'next/link';
import styles from './header.module.scss';

const Header = () => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<header className={styles.header}>
			<button
				onClick={() => setIsOpen(!isOpen)}
				className={styles.burger}
			></button>
			<div className={isOpen ? styles.menu__active : styles.menu}>
				<div className={styles.blur} onClick={() => setIsOpen(false)} />
				<div className={styles.menu__content}>
					<Link href="/" onClick={() => setIsOpen(!isOpen)}>
						Главная
					</Link>
					<Link href="/movies" onClick={() => setIsOpen(!isOpen)}>
						Фильмы
					</Link>
					<Link href="/cartoons" onClick={() => setIsOpen(!isOpen)}>
						Подписка
					</Link>
				</div>
			</div>
			<ul>
				<Link href="/">Как пройти</Link>
				<Link href="/">Календарь</Link>
				<Link href="/">Мероприятия</Link>
			</ul>
			<div className={styles.logo}>
				<h2>STORIES</h2>
				<span>studio</span>
			</div>
			<ul>
				<Link href="/">Залы</Link>
				<Link href="/">Сертификаты</Link>
				<Link href="/">Оборудование</Link>
				<Link href="/">Контакты</Link>
			</ul>
		</header>
	);
};

export default Header;
