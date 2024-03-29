import { memo } from 'react';

import { Note } from '../../models/Note';
import { getReadableDateFromTS } from '../../utils/date-utils';

import './ListItem.scss';
import { useTraceUpdate } from '../../hooks/useTraceUpdate';

type ListItemProps = Partial<Note> & {
    isSelected?: boolean;
    onClick: Function;
};

export const ListItem = memo(
    ({
        id,
        title,
        desc,
        date,
        isSelected,
        onClick,
    }: ListItemProps): JSX.Element => {
        return (
            <div
                className={`notes-item ${isSelected ? 'active' : ''}`}
                onClick={() => onClick(id)}
            >
                <div className="notes-item__headline">
                    <div>
                        <b>{title || 'New Note'}</b>
                        <time>{date && getReadableDateFromTS(date)}</time>
                    </div>
                </div>
                <div>{desc || 'No additional text'}</div>
            </div>
        );
    }
);
