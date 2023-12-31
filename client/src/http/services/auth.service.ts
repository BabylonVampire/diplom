import api from '..';
import { Tokens } from '../../types';

export default class AuthService {
	static async login({
		email,
		password,
	}: {
		email: string;
		password: string;
	}): Promise<Tokens> {
		const response = await api.post<Tokens>(
			`http://localhost:3000/api/auth/local/signIn`,
			{
				email,
				password,
			}
		);
		return response.data;
	}

	static async registration({
		first_name,
		last_name,
		email,
		password,
	}: {
		first_name: string;
		last_name: string;
		email: string;
		password: string;
	}): Promise<Tokens> {
		const response = await api.post<Tokens>(
			`http://localhost:3000/api/auth/local/signUp`,
			{
				first_name,
				last_name,
				email,
				password,
			}
		);
		return response.data;
	}

	static async logout(): Promise<{ message: string }> {
		const response = await api.post<{ message: string }>(
			`http://localhost:3000/api/auth/logout`
		);
		return response.data;
	}
}
