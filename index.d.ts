type TImage = {
	X1: string;
	X2: string;
};

type TtechIcons = {
	ligth: Array<string>;
	dark: Array<string>;
};

interface TLanding {
	projects: {
		first: TImage;
		second: TImage;
		third: TImage;
	};
	figure: TImage;
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
	projects: TProjects;
	extras: TExtras;
};

type TAPIResponse = {
	record: TAPIResponse;
	metadata: any;
};

type Ttheme = {
	background: string;
	textMain: string;
	textSecond: string;
};

type TIconProps = {
	size: string;
	color: string;
};
