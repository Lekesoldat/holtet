import type { TimelineEntryData } from '@lib/types/timeline';
import { compareAsc } from 'date-fns';

export const ascendngDateSort = (a: TimelineEntryData, b: TimelineEntryData) => {
	// Equal end time or both active -> newest entry first
	if (a.toDate === b.toDate) {
		return compareAsc(new Date(a.fromDate), new Date(b.fromDate));
	}

	// a still active, put after b
	if (a.toDate === null || a.toDate === undefined) return 1;

	// b still active, put after a
	if (b.toDate === null || b.toDate === undefined) return -1;

	return compareAsc(new Date(a.toDate), new Date(b.toDate));
};
