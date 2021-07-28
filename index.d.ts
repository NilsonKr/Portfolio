type TImage = {
	X1: string;
	X2: string;
};

type TtechIcons = {
	[key: string]: Array<string>;
};

interface TLanding {
	projects: {
		first: TImage;
		second: TImage;
		third: TImage;
	};
	figure: {
		ligth: TImage;
		dark: TImage;
	};
}

interface TExtras {
	contact: TImage;
	footer: TImage;
}

interface TProjects {
	id: string;
	title: string;
	complement: string;
	description: string;
	isSecondary?: boolean;
	images: TImage;
	technologies: TtechIcons;
	social: {
		github: string;
		web?: string;
	};
}

type TDataFormat = {
	landing: TLanding;
	projects: TProjects[];
	extras: TExtras;
};

type TAPIResponse = {
	record: TAPIResponse;
	metadata: any;
};
type TthemeStyles = 'ligth' | 'dark';

type Ttheme = {
	background: string;
	textMain: string;
	textSecond: string;
	current: TthemeStyles;
};

type TchangeTheme = {
	handleSwitchTheme: (pointer: HTMLElement) => void;
};

type TIconProps = {
	size: string;
	color: string;
};

type TemailInfo = {
	name: string;
	subject: string;
	email: string;
	message: string;
};

type TStatus = { error: null | string; loading: boolean };
