export class DocAPI {
	static async createDoc({
		title,
		content,
	}: {
		title: string;
		content: string;
	}) {
		const response = await fetch(
			`${import.meta.env.VITE_API_URL}/university`,
			{
				method: 'POST',
				body: JSON.stringify({
					title,
					content,
				}),
				headers: {
					'Content-Type': 'application/json',
				},
			}
		);
		return response.json();
	}
	static async getDocs() {
		const response = await fetch(
			`${import.meta.env.VITE_API_URL}/university`,
			{ method: 'GET' }
		);
		return response.json();
	}
	static async getDocById(id: string) {
		const response = await fetch(
			`${import.meta.env.VITE_API_URL}/university/${id}`,
			{ method: 'GET' }
		);
		return response.json();
	}
	static async updateDoc(
		id: string,
		{ title, content }: { title: string; content: string }
	) {
		const response = await fetch(
			`${import.meta.env.VITE_API_URL}/university/${id}`,
			{
				method: 'PUT',
				body: JSON.stringify({
					title,
					content,
				}),
				headers: {
					'Content-Type': 'application/json',
				},
			}
		);
		return response.json();
	}
	static async deleteDoc(id: string) {
		const response = await fetch(
			`${import.meta.env.VITE_API_URL}/university/${id}`,
			{ method: 'DELETE' }
		);
		return response.json();
	}
}
