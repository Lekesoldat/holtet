export const formatDateString = (date: string) => {
	const newDate = new Date(date);
	const month = newDate.toLocaleString('default', { month: 'short' }).toLowerCase();
	const year = newDate.getFullYear();

	return `${month}. ${year}`;
};
