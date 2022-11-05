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
				{isOpen && (
					<div className={styles.blur} onClick={() => setIsOpen(false)} />
				)}

				<div className={styles.menu__content}>
					<Link
						href="https://yandex.ru/maps/-/CCU6ZGejcC"
						target="blank"
						onClick={() => setIsOpen(!isOpen)}
					>
						Как пройти
					</Link>
					<Link href="/#hall" onClick={() => setIsOpen(!isOpen)}>
						Залы
					</Link>
					<Link href="/*" onClick={() => setIsOpen(!isOpen)}>
						Оборудование
					</Link>
					<Link href="/#contacts" onClick={() => setIsOpen(!isOpen)}>
						Контакты
					</Link>
				</div>
			</div>
			<ul>
				<Link href="https://yandex.ru/maps/-/CCU6ZGejcC" target="blank">
					Как пройти
				</Link>
			</ul>
			<Link href="/" className={styles.logo}>
				<h2>STORIES</h2>
				<span>studio</span>
			</Link>
			<ul>
				<Link href="#hall">Залы</Link>
				<Link href="/*">Оборудование</Link>
				<Link href="#contacts">Контакты</Link>
			</ul>
		</header>
	);
};

export default Header;
