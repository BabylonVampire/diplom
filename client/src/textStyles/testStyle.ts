import { ITextStyle } from '../types/ITestStyle';

const testTextStyle = {
	id: 'testTextStyle',
	name: 'testTextStyle',
	basedOn: 'Normal',
	next: 'Normal',
	quickFormat: true,
	run: {
		size: 28,
		color: '#121212',
		font: 'Calibri',
	},
	paragraph: {
		spacing: {
			after: 120,
		},
	},
};

const testHeadingStyle = {
	id: 'testHeadingStyle',
	name: 'testHeadingStyle',
	basedOn: 'Normal',
	next: 'Normal',
	quickFormat: true,
	run: {
		bold: true,
		size: 28,
		color: '#656565',
		font: 'Calibri',
	},
	paragraph: {
		spacing: {
			after: 120,
		},
	},
};

const testStyle: ITextStyle = {
	headingStyle: testTextStyle,
	textStyle: testTextStyle,
	name: 'Тестовый стиль',
	description: '',
};

export { testStyle };
