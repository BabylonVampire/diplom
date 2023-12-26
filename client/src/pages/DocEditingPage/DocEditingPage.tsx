import { FC } from 'react';
import { Button, Empty, Input } from 'antd';
import { useState } from 'react';
import { IParagraph } from '../../types/IParagraph';
import './DocEditingPage.scss';
import { MenuOutlined } from '@ant-design/icons';
import { ITextStyle } from '../../types/ITestStyle';
import { createDoc } from './utils/createDoc';
// import { createPdf } from './utils/createPdf';

interface IDocEditingPageProps {
	setTextStyle: React.Dispatch<React.SetStateAction<ITextStyle | undefined>>;
	textStyle: ITextStyle | undefined;
}

const DocEditingPage: FC<IDocEditingPageProps> = ({
	// setTextStyle,
	textStyle,
}) => {
	const { TextArea } = Input;
	const [paragraphs, setParagraphs] = useState<IParagraph[]>([]);

	return (
		<main className="docEditingPage">
			<div className="docEditingPage-paragraphContainer">
				{paragraphs.length === 0 ? (
					<Empty description={false} />
				) : (
					<></>
				)}
				{paragraphs.map((item) => {
					return (
						<div className="paragraph">
							<p className="paragraph_heading">
								Глава №{paragraphs.indexOf(item) + 1}
							</p>
							<div className="paragraph-editing">
								<div className="paragraph-editing-inputBoxes">
									<Input
										placeholder="Название главы"
										onChange={(e) => {
											const newState = paragraphs;
											newState[
												paragraphs.indexOf(item)
											].heading = e.target.value;
											setParagraphs(newState);
										}}
									/>
									<TextArea
										placeholder="Содержание главы"
										rows={4}
										onChange={(e) => {
											const newState = paragraphs;
											newState[
												paragraphs.indexOf(item)
											].content = e.target.value;
											setParagraphs(newState);
										}}
									/>
								</div>
								<Button type="primary">
									<MenuOutlined />
								</Button>
							</div>
						</div>
					);
				})}
			</div>
			<div className="docEditingPage-buttonContainer">
				<Button
					size="large"
					type="primary"
					onClick={() =>
						setParagraphs([
							...paragraphs,
							{ content: '', heading: '' },
						])
					}
				>
					Добавить главу
				</Button>
				<Button
					size="large"
					type="primary"
					onClick={() => {
						createDoc(paragraphs, textStyle);
					}}
				>
					Создать документ в формате Docx
				</Button>
				{/* <Button
					size="large"
					type="primary"
					onClick={() => {
						createPdf(paragraphs);
					}}
				>
					Создать документ в формате PDF
				</Button> */}
			</div>
		</main>
	);
};

export default DocEditingPage;
