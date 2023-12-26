import { FC } from 'react';
import './StyleCreatePage.module.scss';

interface IStyleCreatePageProps {}

const StyleCreatePage: FC<IStyleCreatePageProps> = () => {
	return (
		<div className="styleCreatePage">
			<div className="styleCreatePage-innerBox"></div>
		</div>
	);
};

export default StyleCreatePage;
