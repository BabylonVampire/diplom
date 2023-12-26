import { AlignmentType, Document, Paragraph } from 'docx';
import { IParagraph } from '../../../types/IParagraph';
import { ITextStyle } from '../../../types/ITestStyle';
import { saveDoc } from './saveDoc';

export const createDoc = (paragraphs: IParagraph[], textStyle?: ITextStyle) => {
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
