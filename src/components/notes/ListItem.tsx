import React from 'react';
import { Note } from '../../models/Note';

import './ListItem.scss';

type ListItemProps = Partial<Note> & {
    onClick: Function;
};

export const ListItem = ({ title, desc, date, onClick }: ListItemProps) => {
    return (
        <div className="notes-item" onClick={() => onClick()}>
            <div>{date?.toString()}</div>
            <div>{title}</div>
            <div>{desc}</div>
        </div>
    );
};
