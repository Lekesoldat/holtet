const configuration = {
	projectId: 'cn926uvg',
	dataset: 'production',
	apiVersion: 'v2021-10-21', // use current UTC date - see "specifying API version"!
	token: '', // or leave blank for unauthenticated usage
	useCdn: false // `false` if you want to ensure fresh data
};

export const buildFetchUrl = ({
	query,
	parameters
}: {
	query: string;
	parameters?: Record<string, string>;
}) => {
	let url = `https://${configuration.projectId}.api.sanity.io/${
		configuration.apiVersion
	}/data/query/${configuration.dataset}?query=${encodeURIComponent(query)}`;

	if (parameters) {
		// Encode each parameter and add it to the fetch url
		const urlParameters = Object.entries(parameters)
			.map(([key, val]) => `&$${key}=${encodeURIComponent(`"${val}"`)}`)
			.join('');
		url += urlParameters;
	}

	return url;
};
