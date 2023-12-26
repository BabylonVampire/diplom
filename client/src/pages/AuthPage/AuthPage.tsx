import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { login, setError } from '../../store/slices/authSlice';
import { AppDispatch, RootState } from '../../store/store';
import './AuthPage.scss';

const AuthPage = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch<AppDispatch>();
	const [error, setLocalError] = useState<boolean>(false);
	const { loading, isAuth } = useSelector((state: RootState) => state.auth);

	const handleLogin = async ({
		email,
		password,
	}: {
		email: string;
		password: string;
	}) => {
		dispatch(login({ email: email, password: password }))
			.then(() => {
				setError(null);
				navigate('/');
			})
			.catch((err) => {
				setError(err.message);
				setLocalError(true);
			});
	};
	return (
		<div className="authPage">
			<div className="authPage-innerBox">
				{isAuth ? (
					<>
						<p>Вы уже вошли в систему</p>
						<Link className="link" to="/">
							Главная
						</Link>
					</>
				) : (
					<div className="loginForm">
						<h2 className="authPage__title">Вход</h2>
						<Form
							name="normal_login"
							initialValues={{ remember: true }}
							onFinish={handleLogin}
						>
							<Form.Item
								name="email"
								rules={[
									{
										required: true,
										message: 'Please input your Email!',
									},
								]}
							>
								<Input
									prefix={
										<UserOutlined className="site-form-item-icon" />
									}
									type="email"
									placeholder="Email"
								/>
							</Form.Item>
							<Form.Item
								name="password"
								rules={[
									{
										required: true,
										message: 'Please input your Password!',
									},
								]}
							>
								<Input
									prefix={
										<LockOutlined className="site-form-item-icon" />
									}
									type="password"
									placeholder="Password"
								/>
							</Form.Item>
							{error && (
								<Form.Item>Некорректные данные</Form.Item>
							)}
							{loading && <Form.Item>Запрос идет</Form.Item>}
							<Form.Item>
								<div className="registrationPage-loginRegisterButtons">
									<Button
										type="primary"
										htmlType="submit"
										size="large"
									>
										Войти
									</Button>
									<span className="registrationPage__or">
										или
									</span>
									<Button
										type="link"
										htmlType="submit"
										size="large"
									>
										<Link to="/registration">
											Зарегистрироваться
										</Link>
									</Button>
								</div>
							</Form.Item>
						</Form>
					</div>
				)}
			</div>
		</div>
	);
};

export default AuthPage;
