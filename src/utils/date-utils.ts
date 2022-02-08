import { formatDistanceStrict } from 'date-fns';

export const getReadableDateFromTS = (ts: number): string => {
    const now = new Date();
    const provided = new Date(ts);

    return formatDistanceStrict(now, provided);
};
