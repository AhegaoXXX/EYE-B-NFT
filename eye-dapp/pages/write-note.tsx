import { useContract, useContractWrite } from '@thirdweb-dev/react';
import { NextPage } from 'next';
import { useState } from 'react';
import Header from '../components/Header';
import styles from '../styles/WriteNote.module.css';

const WriteNote: NextPage = () => {
	const { contract } = useContract(
		'0x5600880C1300281B48d9af5C977431C6A5386851',
	);
	const {
		mutate: write,
		isLoading,
		error,
	} = useContractWrite(contract, 'writeNote');

	const [id, setId] = useState('');
	const [note, setNote] = useState('');

	return (
		<div className={styles.container}>
			<Header />
			<section className={styles.info}>
				<p className="label">ID:</p>
				<input
					type="text"
					name="id"
					value={id}
					onChange={(e) => setId(e.target.value)}
				/>
				<p className="label">Note:</p>
				<textarea
					name="note"
					rows={10}
					value={note}
					onChange={(e) => setNote(e.target.value)}
				/>
				<br />
				<button
					disabled={isLoading}
					onClick={() => write({ args: [id, note] })}
				>
					Write Note
				</button>
				{error ? <p>{error.toString()}</p> : null}
			</section>
		</div>
	);
};

export default WriteNote;
