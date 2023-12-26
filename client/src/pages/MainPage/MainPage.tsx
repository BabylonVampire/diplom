import { Button } from 'antd';
import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../../store/slices/authSlice';
import { AppDispatch, RootState } from '../../store/store';
import './MainPage.scss';
interface IMainPageProps {}

const MainPage: FC<IMainPageProps> = () => {
	const { isAuth } = useSelector((state: RootState) => state.auth);

	const dispatch = useDispatch<AppDispatch>();

	const handleLogout = () => {
		dispatch(logout());
	};

	return (
		<main className="mainPage">
			{isAuth ? (
				<>
					<div className="mainPage-innerBox">
						<Button type="primary" size="large">
							<Link to="/createDoc">Создать новый документ</Link>
						</Button>
						<Button
							className="logoutButton"
							type="primary"
							danger
							onClick={handleLogout}
						>
							Выйти из аккаунта
						</Button>
					</div>
				</>
			) : (
				<div className="authBox">
					<Button
						type="link"
						htmlType="submit"
						className="registrationForm__button"
						size="large"
					>
						<Link className="link" to="/authorization">
							Войти
						</Link>
					</Button>
					<p>или</p>
					<Button
						type="primary"
						htmlType="submit"
						className="registrationForm__button"
						size="large"
					>
						<Link className="link" to="/registration">
							Зарегистрироваться
						</Link>
					</Button>
				</div>
			)}
		</main>
	);
};

export default MainPage;
