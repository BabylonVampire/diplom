// export const savePdf = (doc: PDFKit.PDFDocument) => {
// 	return new Promise((resolve, reject) => {
// 		const chunks: Uint8Array[] = [];

// 		doc.on('data', (chunk: Uint8Array) => {
// 			chunks.push(chunk);
// 		});

// 		doc.on('end', () => {
// 			const result = Buffer.concat(chunks);
// 			resolve('data:application/pdf;base64,' + result.toString('base64'));
// 		});

// 		doc.on('error', (error: any) => {
// 			reject(error);
// 		});

// 		doc.end();
// 	});
// };
