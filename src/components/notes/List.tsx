import { Note } from '../../models/Note';
import { Empty } from './Empty';
import { ListItem } from './ListItem';
import { RootState } from '../../store';
import { focus } from '../../store/notesSlice';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

import './List.scss';

export const List = () => {
    const notes: Note[] = useSelector((state: RootState) => state.notes.all);
    const dispatch = useDispatch();

    const handleNoteFocus = (id: string) => {
        console.log(`will be focused: ${id}`);
        dispatch(focus(id));
    };

    return (
        <div className="notes-list">
            {notes.length === 0 ? (
                <Empty />
            ) : (
                notes.map((note) => (
                    <ListItem
                        onClick={() => handleNoteFocus(note.id)}
                        key={note.id}
                        {...note}
                    />
                ))
            )}
        </div>
    );
};
