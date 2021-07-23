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

interface TProjects {
	id: string;
	complement: string;
	title: string;
	description: string;
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
};

type TAPIResponse = {
	record: TAPIResponse;
	metadata: any;
};
