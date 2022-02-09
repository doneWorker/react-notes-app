import { useDispatch, useSelector } from 'react-redux';

import { Note } from '../../models/Note';
import { Empty } from './Empty';
import { ListItem } from './ListItem';
import { RootState } from '../../store';
import { focus } from '../../store/notesSlice';

import './List.scss';

export const List = () => {
    const dispatch = useDispatch();
    const notes: Note[] = useSelector((state: RootState) => {
        const searchString = state.filter.searchString.toLowerCase();
        const filter = state.filter.type;

        return state.notes.all.filter((note) => {
            if (filter === 'FAVORITE' && !note.favorite) return;
            if (searchString) {
                return (
                    note.title.toLowerCase().indexOf(searchString) !== -1 ||
                    note.desc.toLowerCase().indexOf(searchString) !== -1
                );
            } else {
                return note;
            }
        });
    });

    const handleNoteFocus = (id: string) => {
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
