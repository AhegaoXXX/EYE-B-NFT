import { ThirdwebNftMedia, useContract, useNFTs } from '@thirdweb-dev/react';
import { NextPage } from 'next';
import Header from '../components/Header';
import styles from '../styles/Nfts.module.css';

const Nfts: NextPage = () => {
	const { contract } = useContract(
		'0x5600880C1300281B48d9af5C977431C6A5386851',
	);
	const { data: nfts, isLoading, error } = useNFTs(contract);

	return (
		<div className={styles.container}>
			<Header />
			<section className={styles.info}>
				{isLoading ? (
					<p>Loading...</p>
				) : (
					nfts?.map((nft) => {
						return (
							<div key={nft.metadata.id}>
								<ThirdwebNftMedia
									metadata={nft.metadata}
									height="200"
									style={{
										borderRadius: '10px',
									}}
								/>
								<p>{nft.metadata.name}</p>
							</div>
						);
					})
				)}
			</section>
		</div>
	);
};

export default Nfts;
