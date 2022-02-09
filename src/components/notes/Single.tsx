import { useDispatch, useSelector } from 'react-redux';

import { Note } from '../../models/Note';
import { updateDesc, updateTitle, deleteNote } from '../../store/notesSlice';
import { RootState } from '../../store';
import { FaTrash, FaStar } from 'react-icons/fa';

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

    const handleDeleteNote = () => {
        note && dispatch(deleteNote(note.id));
    };

    return note ? (
        <div className="single-note">
            <div className="single-note__toolbar">
                <button
                    title="Delete Note"
                    className="single-note__toolbar-button"
                    onClick={handleDeleteNote}
                >
                    <FaTrash />
                </button>
                <button
                    title="Add Note to favorite"
                    className="single-note__toolbar-button"
                >
                    <FaStar />
                </button>
            </div>
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
