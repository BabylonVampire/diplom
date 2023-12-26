//НА СЕРВАК
import PDFDocument from 'pdfkit';
import blobStream from 'blob-stream';
import { IParagraph } from '../../../types/IParagraph';
// import { createWriteStream } from 'fs';

export const createPdf = (paragraphs: IParagraph[]) => {
	const styles = {
		fontSize: 14,
		fontColor: '#000000',
		fontFamily: 'Times-Roman',
		fontFamilyBold: 'Times-Bold',
	};
	const doc = new PDFDocument({ size: 'A4' });
	// doc.pipe(createWriteStream('output.pdf'));
	const stream = doc.pipe(blobStream());

	doc.fontSize(styles.fontSize);
	doc.fillColor(styles.fontColor);
	paragraphs.forEach((paragraph) => {
		doc.moveDown();
		doc.font(styles.fontFamilyBold).text(paragraph.heading, {
			width: 410,
			align: 'justify',
		});
		doc.moveDown();
		doc.font(styles.fontFamily).text(paragraph.content, {
			width: 410,
			align: 'justify',
		});
	});

	doc.end();
	stream.on('finish', () => {
		// const blob = stream.toBlob('application/pdf');

		const url = stream.toBlobURL('application/pdf');
		console.log(url);
	});
};
