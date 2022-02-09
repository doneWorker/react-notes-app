import React from 'react';

import { Note } from '../../models/Note';
import { getReadableDateFromTS } from '../../utils/date-utils';

import './ListItem.scss';

type ListItemProps = Partial<Note> & {
    isSelected?: boolean;
    onClick: Function;
};

export const ListItem = ({ title, desc, date, onClick }: ListItemProps) => {
    return (
        <div className="notes-item" onClick={() => onClick()}>
            <div className="notes-item__headline">
                <div>
                    <b>{title || 'New Note'}</b>
                    <time>{date && getReadableDateFromTS(date)}</time>
                </div>
            </div>
            <div>{desc || 'No additional text'}</div>
        </div>
    );
};
