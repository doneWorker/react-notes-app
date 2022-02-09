import { useDispatch, useSelector } from 'react-redux';

import { Note } from '../../models/Note';
import {
    updateDesc,
    updateTitle,
    deleteNote,
    toggleFavorites,
} from '../../store/notesSlice';
import { RootState } from '../../store';
import { FaTrash, FaStar } from 'react-icons/fa';

import './Single.scss';

const noteClass = 'single-note';

const IsNotSelected = () => <div className={noteClass}>Please Select Note</div>;

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

    const handleDeleteNote = () => {
        note && dispatch(deleteNote(note.id));
    };

    const handleAddToFavorites = () => {
        note && dispatch(toggleFavorites(note.id));
    };

    return note ? (
        <div className={noteClass}>
            <div className={`${noteClass}__toolbar`}>
                <button
                    title="Delete Note"
                    className={`${noteClass}__toolbar-button`}
                    onClick={handleDeleteNote}
                >
                    <FaTrash />
                </button>
                <button
                    title="Add Note to favorite"
                    className={`${noteClass}__toolbar-button ${
                        note.favorite ? 'active' : ''
                    }`}
                    onClick={handleAddToFavorites}
                >
                    <FaStar />
                </button>
            </div>
            <input
                className={`${noteClass}__title`}
                placeholder="Title"
                value={note.title}
                onChange={(e) => handleChangeTitle(e.target.value)}
            />
            <textarea
                className={`${noteClass}__desc`}
                value={note.desc}
                onChange={(e) => handleChangeDesc(e.target.value)}
            />
        </div>
    ) : (
        <IsNotSelected />
    );
};
