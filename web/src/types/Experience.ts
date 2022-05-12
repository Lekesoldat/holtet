export interface Experience {
	employer: string;
	title: string;
	description: string;
	fromDate: string;
	toDate?: string;
	tags: Tag[];
}

export type Tag = LocalIcons;

interface LocalIcons {
	name: string;
	iconName: string;
}
