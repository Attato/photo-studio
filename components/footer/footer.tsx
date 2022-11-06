import Link from 'next/link';
import Image from 'next/image';
import styles from './footer.module.scss';

const Footer = () => {
	return (
		<>
			<div className={styles.contact__section} id="contacts">
				<h1>Контакты</h1>
				<span>г. Екатеринбург, Мамина-сибиряка, 101, офис 2.16</span>
				<Link href="tel:+79120371164">+7 (912) 037-11-64</Link>
				<Link
					href="https://vk.com/public217020824"
					target="_blank"
					className={styles.social}
				>
					<Image src="/vk.svg" width={22} height={22} alt="svg"></Image>
					Мы Вконтакте
				</Link>
			</div>

			<footer className={styles.footer}>
				<div className={styles.logo}>
					<h2>ICON</h2>
					<span>studio</span>
				</div>
			</footer>
		</>
	);
};

export default Footer;
