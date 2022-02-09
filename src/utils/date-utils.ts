import { formatDistanceStrict, differenceInMinutes } from 'date-fns';

const LESS_THAN_MINUTE_LABEL = 'Now';

export const getReadableDateFromTS = (ts: number): string => {
    const now = new Date();
    const provided = new Date(ts);

    return differenceInMinutes(now, provided) <= 1
        ? LESS_THAN_MINUTE_LABEL
        : formatDistanceStrict(now, provided);
};
