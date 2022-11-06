import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
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
						href="https://yandex.ru/maps/-/CCU66XW99B"
						target="blank"
						onClick={() => setIsOpen(!isOpen)}
					>
						Как пройти
					</Link>
					<Link href="/#hall" onClick={() => setIsOpen(!isOpen)}>
						Залы
					</Link>
					<Link href="/#contacts" onClick={() => setIsOpen(!isOpen)}>
						Контакты
					</Link>
					<Link
						href="https://vk.com/public217020824"
						target="_blank"
						className={styles.social}
					>
						<Image src="/vk.svg" width={22} height={22} alt="svg"></Image>
						Мы Вконтакте
					</Link>
				</div>
			</div>
			<ul>
				<Link href="https://yandex.ru/maps/-/CCU66XW99B" target="blank">
					Как пройти
				</Link>
			</ul>
			<Link href="/" className={styles.logo}>
				<h2>ICON</h2>
				<span>studio</span>
			</Link>
			<ul>
				<Link href="#hall">Залы</Link>
				<Link href="#contacts">Контакты</Link>
			</ul>
		</header>
	);
};

export default Header;
