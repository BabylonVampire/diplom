import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { register, setError } from '../../store/slices/authSlice';
import { AppDispatch, RootState } from '../../store/store';
import './RegisterPage.scss';

const RegisterPage = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch<AppDispatch>();
	const [error, setLocalError] = useState<boolean>(false);
	const { loading, isAuth } = useSelector((state: RootState) => state.auth);

	const handleRegister = async ({
		first_name,
		last_name,
		email,
		password,
		passwordConfirm,
	}: {
		first_name: string;
		last_name: string;
		email: string;
		password: string;
		passwordConfirm: string;
	}) => {
		if (password !== passwordConfirm) {
			setLocalError(true);
		} else {
			dispatch(
				register({
					first_name: first_name,
					last_name: last_name,
					email: email,
					password: password,
				})
			)
				.then(() => {
					setError(null);
					navigate('/');
				})
				.catch((err) => {
					setError(err.message);
					setLocalError(true);
				});
		}
	};
	return (
		<div className="registrationPage">
			<div className="registrationPage-innerBox">
				{isAuth ? (
					<>
						<p>Вы уже вошли в систему</p>
						<Link className="link" to="/">
							Главная
						</Link>
					</>
				) : (
					<div className="registrationForm">
						<h2 className="registrationPage__title">Регистрация</h2>
						<Form
							name="normal_register"
							initialValues={{ remember: true }}
							onFinish={handleRegister}
						>
							<Form.Item
								name="first_name"
								rules={[
									{
										required: true,
										message: 'Please input your name!',
									},
								]}
							>
								<Input
									prefix={
										<LockOutlined className="site-form-item-icon" />
									}
									placeholder="Name"
								/>
							</Form.Item>
							<Form.Item
								name="last_name"
								rules={[
									{
										required: true,
										message: 'Please input your surname!',
									},
								]}
							>
								<Input
									prefix={
										<LockOutlined className="site-form-item-icon" />
									}
									placeholder="Surname"
								/>
							</Form.Item>
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
							<Form.Item
								name="passwordConfirm"
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
										className="registrationForm__button"
										size="large"
									>
										Зарегистрироваться
									</Button>
									<span className="registrationPage__or">
										или
									</span>
									<Button
										type="link"
										htmlType="submit"
										className="registrationForm__button"
										size="large"
									>
										<Link to="/authorization">Войти</Link>
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
export default RegisterPage;
