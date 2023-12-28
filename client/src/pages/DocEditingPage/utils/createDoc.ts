import { AlignmentType, Document, Paragraph } from 'docx';
import { IParagraph } from '../../../types/IParagraph';
import { ITextStyle } from '../../../types/ITestStyle';
import { saveDoc } from './saveDoc';
import { UseDocs } from '../../../hooks/useDocs';

export const createDoc = (paragraphs: IParagraph[], textStyle?: ITextStyle) => {
	const { createDoc } = UseDocs();
	createDoc({
		title: paragraphs[0].heading,
		content: JSON.stringify(paragraphs),
	});
	const resultDoc: Paragraph[] = [];
	paragraphs.forEach((paragraph) => {
		resultDoc.push(
			new Paragraph({
				text: paragraph.heading.toUpperCase(),
				alignment: AlignmentType.JUSTIFIED,
				style: textStyle?.headingStyle.id,
			})
		);
		resultDoc.push(
			new Paragraph({
				text: paragraph.content,
				alignment: AlignmentType.JUSTIFIED,
				style: textStyle?.textStyle.id,
			})
		);
	});
	const doc = new Document({
		styles: {
			paragraphStyles: [textStyle?.textStyle, textStyle?.headingStyle],
		},
		sections: [
			{
				properties: {},
				children: resultDoc,
			},
		],
	});
	saveDoc(doc, 'example.docx');
};
