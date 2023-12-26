import { ITextStyle } from '../types/ITestStyle';

const defaultTextStyle = {
	id: 'defaultTextStyle',
	name: 'defaultTextStyle',
	basedOn: 'Normal',
	next: 'Normal',
	quickFormat: true,
	run: {
		size: 28,
		color: '#000000',
		font: 'Times New Roman',
	},
	paragraph: {
		spacing: {
			after: 120,
		},
	},
};

const defaultHeadingStyle = {
	id: 'defaultHeadingStyle',
	name: 'defaultHeadingStyle',
	basedOn: 'Normal',
	next: 'Normal',
	quickFormat: true,
	run: {
		bold: true,
		size: 28,
		color: '#000000',
		font: 'Times New Roman',
	},
	paragraph: {
		spacing: {
			after: 120,
		},
	},
};

const defaultStyle: ITextStyle = {
	headingStyle: defaultHeadingStyle,
	textStyle: defaultTextStyle,
	name: 'Стандартные стили',
	description: '',
};

export { defaultStyle };
