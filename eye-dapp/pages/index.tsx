import { Web3Button } from '@thirdweb-dev/react';
import { NextPage } from 'next';
import Header from '../components/Header';
import { customLightTheme } from '../shared/constants';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
	return (
		<div className={styles.container}>
			<Header />
			<section className={styles.info}>
				<img className={styles.eyeLogo} src="./logo.png" alt="logo" />
				<h1>The EYE B Project</h1>
				<p>Welcome to the NFT site using thirdweb.</p>
				<br />
				<Web3Button
					theme={customLightTheme}
					contractAddress="0x5600880C1300281B48d9af5C977431C6A5386851"
					action={(contract) => {
						contract.erc721.claim(1);
					}}
				>
					{' '}
					Claim Eye
				</Web3Button>
			</section>
		</div>
	);
};

export default Home;
