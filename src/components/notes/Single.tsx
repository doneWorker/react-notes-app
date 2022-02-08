import { useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Editor, EditorState, RichUtils } from 'draft-js';

import { Note } from '../../models/Note';
import { updateDesc, updateTitle } from '../../store/notesSlice';
import { RootState } from '../../store';

import './Single.scss';

export const Single = () => {
    const note: Note | undefined = useSelector((state: RootState) => {
        const { selectedId } = state.notes;
        return state.notes.all.find((note) => note.id === selectedId);
    });
    const dispatch = useDispatch();

    const handleChangeTitle = (title: string) => {
        note && dispatch(updateTitle({ id: note.id, title }));
    };

    const handleChangeDesc = (desc: string) => {
        note && dispatch(updateDesc({ id: note.id, desc }));
    };

    return note ? (
        <div className="single-note">
            <input
                className="single-note__title"
                placeholder="Title"
                value={note.title}
                onChange={(e) => handleChangeTitle(e.target.value)}
            />
            <textarea
                className="single-note__desc"
                value={note.desc}
                onChange={(e) => handleChangeDesc(e.target.value)}
            />
        </div>
    ) : (
        <></>
    );
};
