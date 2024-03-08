import { ConnectWallet } from '@thirdweb-dev/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { customLightTheme } from '../shared/constants';
import styles from '../styles/Header.module.css';

const Header: React.FC = () => {
	const router = useRouter();
	return (
		<div className={styles.container}>
			<div>
				<Link
					href={'/'}
					className={
						router.pathname === '/' ? styles.active : styles.link
					}
				>
					Claim
				</Link>
				<Link
					href={'/nfts'}
					className={
						router.pathname === '/nfts'
							? styles.active
							: styles.link
					}
				>
					NFTS
				</Link>
				<Link
					href={'/my-nfts'}
					className={
						router.pathname === '/my-nfts'
							? styles.active
							: styles.link
					}
				>
					My NFTS
				</Link>
				<Link
					href={'/write-note'}
					className={
						router.pathname === '/write-note'
							? styles.active
							: styles.link
					}
				>
					Write Note
				</Link>
			</div>
			<ConnectWallet theme={customLightTheme} />
		</div>
	);
};

export default Header;
