import { Packer, Document } from 'docx';
import { saveAs } from 'file-saver';

export const saveDoc = (doc: Document, fileName: string) => {
	Packer.toBlob(doc).then((blob) => {
		saveAs(blob, fileName);
		console.log('Document created successfully');
	});
};
