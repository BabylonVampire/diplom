import { useEffect, useState } from 'react';
import { DocAPI } from '../api/DocApi';

export function UseDocs() {
	const [docs, setDocs] = useState<{ title: string; content: string }[]>([]);

	const fetchDocs = async () => {
		try {
			const response = await DocAPI.getDocs();
			setDocs(response);
		} catch (error) {
			console.error(error);
		}
	};

	const createDoc = async ({
		title,
		content,
	}: {
		title: string;
		content: string;
	}) => {
		try {
			const response = await DocAPI.createDoc({ title, content });
			setDocs((prev) => [...prev, response.data]);
		} catch (error) {
			console.error(error);
		}
	};

	const refetch = () => {
		fetchDocs();
	};

	useEffect(() => {
		fetchDocs();
	}, []);

	return { docs, refetch, createDoc };
}
