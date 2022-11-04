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
					<Link href="/*" onClick={() => setIsOpen(!isOpen)}>
						Как пройти
					</Link>
					<Link href="/*" onClick={() => setIsOpen(!isOpen)}>
						Календарь
					</Link>
					<Link href="/*" onClick={() => setIsOpen(!isOpen)}>
						Мероприятия
					</Link>
					<Link href="/*" onClick={() => setIsOpen(!isOpen)}>
						Залы
					</Link>
					<Link href="/*" onClick={() => setIsOpen(!isOpen)}>
						Сертификаты
					</Link>
					<Link href="/*" onClick={() => setIsOpen(!isOpen)}>
						Оборудование
					</Link>
					<Link href="/*" onClick={() => setIsOpen(!isOpen)}>
						Контакты
					</Link>
				</div>
			</div>
			<ul>
				<Link href="/*">Как пройти</Link>
				<Link href="/*">Календарь</Link>
				<Link href="/*">Мероприятия</Link>
			</ul>
			<div className={styles.logo}>
				<h2>STORIES</h2>
				<span>studio</span>
			</div>
			<ul>
				<Link href="/*">Залы</Link>
				<Link href="/*">Сертификаты</Link>
				<Link href="/*">Оборудование</Link>
				<Link href="/*">Контакты</Link>
			</ul>
		</header>
	);
};

export default Header;
