import imageUrlBuilder from '@sanity/image-url';
const configuration = {
	projectId: 'cn926uvg',
	dataset: 'production',
	apiVersion: 'v2021-10-21',
	token: '',
	useCdn: false // `false` if you want to ensure fresh data
};

export type Fetch = (input: RequestInfo, init?: RequestInit) => Promise<Response>;
export type Params = Record<string, string>;

export const buildFetchUrl = (query: string, params?: Params) => {
	let url = `https://${configuration.projectId}.api.sanity.io/${
		configuration.apiVersion
	}/data/query/${configuration.dataset}?query=${encodeURIComponent(query)}`;

	if (params) {
		// Encode each parameter and add it to the fetch url
		const urlParameters = Object.entries(params)
			.map(([key, val]) => `&$${key}=${encodeURIComponent(`"${val}"`)}`)
			.join('');
		url += urlParameters;
	}

	return url;
};

export const builder = imageUrlBuilder(configuration);
