import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout/Layout';
import AuthPage from './pages/AuthPage/AuthPage';
import DocCreatePage from './pages/DocCreatePage/DocCreatePage';
import DocEditingPage from './pages/DocEditingPage/DocEditingPage';
import MainPage from './pages/MainPage/MainPage';
import { checkAuth, setTokens } from './store/slices/authSlice';
import { AppDispatch } from './store/store';
import { ITextStyle } from './types/ITestStyle';
import RegisterPage from './pages/RegisterPage/RegisterPage';

const App = () => {
	const [currentTextStyle, setCurrentTextStyle] = useState<ITextStyle>();
	const dispatch = useDispatch<AppDispatch>();

	useEffect(() => {
		if (localStorage.getItem('refreshToken')) {
			dispatch(
				setTokens({
					refreshToken: localStorage.getItem('refreshToken')!,
					accessToken: localStorage.getItem('accessToken')!,
				})
			);
			dispatch(checkAuth());
		}
	}, [dispatch]);

	return (
		<Layout>
			<Routes>
				<Route path="/authorization" element={<AuthPage />} />
				<Route path="/registration" element={<RegisterPage />} />
				<Route path="/" element={<MainPage />} />
				<Route
					path="/editing"
					element={
						<DocEditingPage
							textStyle={currentTextStyle}
							setTextStyle={setCurrentTextStyle}
						/>
					}
				/>
				<Route
					path="/createDoc"
					element={
						<DocCreatePage setTextStyle={setCurrentTextStyle} />
					}
				/>
				<Route path="/createStyle" />
			</Routes>
		</Layout>
	);
};

export default App;
