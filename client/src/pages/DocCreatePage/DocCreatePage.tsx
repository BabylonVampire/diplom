import { Button, Select, SelectProps } from 'antd';
import { FC, useState } from 'react';
import textStyles from '../../textStyles';
import './DocCreatePage.scss';
import { Link } from 'react-router-dom';
import { ITextStyle } from '../../types/ITestStyle';

interface IDocCreatePageProps {
	setTextStyle: React.Dispatch<React.SetStateAction<ITextStyle | undefined>>;
}

const DocCreatePage: FC<IDocCreatePageProps> = ({ setTextStyle }) => {
	const options: SelectProps['options'] = [];
	const [selectedStyle, setSelectedStyle] = useState<number>(0);

	textStyles.forEach((style) => {
		options.push({
			value: textStyles.indexOf(style),
			label: style.name,
		});
	});

	const handleChange = (value: string) => {
		setSelectedStyle(+value);
	};

	return (
		<div className="docCreatePage">
			<div className="docCreatePage-innerBox">
				<div className="styleSelect_heading">
					Стиль форматирования документа
				</div>
				<Select
					style={{ width: 200 }}
					placeholder="Стиль форматирования"
					onChange={handleChange}
					options={options}
				/>
				<div className="docCreatePage-innerBox_createButton">
					<Button type="primary">
						<Link
							to="/editing"
							onClick={() =>
								setTextStyle(textStyles[selectedStyle])
							}
						>
							Создать новый документ
						</Link>
					</Button>
				</div>
			</div>
		</div>
	);
};

export default DocCreatePage;
