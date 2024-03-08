import {
	ThirdwebNftMedia,
	useAddress,
	useContract,
	useNFTs,
} from '@thirdweb-dev/react';
import { NextPage } from 'next';
import { ReactNode, useState } from 'react';
import Header from '../components/Header';
import styles from '../styles/MyNfts.module.css';

const MyNfts: NextPage = () => {
	const { contract } = useContract(
		'0x5600880C1300281B48d9af5C977431C6A5386851',
	);
	const address = useAddress();
	const { data: nfts, isLoading, error } = useNFTs(contract);
	const [msg, setMsg] = useState<ReactNode>();

	const readNote = (id: string) => {
		contract
			?.call('notes', id as unknown as string[])
			.then((data) => setMsg(data))
			.catch((err) => setMsg(''));
	};

	return (
		<div className={styles.container}>
			<Header />
			{msg ? <p>Note: {msg}</p> : null}
			<section className={styles.info}>
				{isLoading ? (
					<p>Loading...</p>
				) : (
					nfts
						?.filter((nft) => nft.owner === address)
						?.map((nft) => {
							return (
								<div key={nft.metadata.id}>
									<ThirdwebNftMedia
										metadata={nft.metadata}
										height="200"
										style={{
											borderRadius: '10px',
										}}
									/>
									<p>
										ID:{nft.metadata.id} |{' '}
										{nft.metadata.name}
									</p>
									<button
										onClick={() =>
											readNote(nft.metadata.id)
										}
									>
										Read Note
									</button>
								</div>
							);
						})
				)}
			</section>
		</div>
	);
};

export default MyNfts;
