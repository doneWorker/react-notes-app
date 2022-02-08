import { useDispatch } from 'react-redux';
import { create } from '../../store/notesSlice';
import { FaEdit } from 'react-icons/fa';

import './CreateNote.scss';

export const CreateNote = () => {
    const dispatch = useDispatch();

    const handleNoteCreate = () => {
        dispatch(create());
    };

    return (
        <button className="create-note" onClick={() => handleNoteCreate()}>
            Create <FaEdit />
        </button>
    );
};
