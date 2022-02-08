import React from 'react';

import { Note } from '../../models/Note';
import { getReadableDateFromTS } from '../../utils/date-utils';

import './ListItem.scss';

type ListItemProps = Partial<Note> & {
    onClick: Function;
};

export const ListItem = ({ title, desc, date, onClick }: ListItemProps) => {
    return (
        <div className="notes-item" onClick={() => onClick()}>
            <div className="notes-item__headline">
                <div>
                    <b>{title || 'New Note'}</b>
                </div>
                <div>{date && getReadableDateFromTS(date)}</div>
            </div>
            <div>{desc || 'No additional text'}</div>
        </div>
    );
};
