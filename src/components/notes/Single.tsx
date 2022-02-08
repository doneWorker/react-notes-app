import { Note } from '../../models/Note';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

export const Single = () => {
    const note: Note | undefined = useSelector((state: RootState) => {
        const { selectedId } = state.notes;
        return state.notes.all.find((note) => note.id === selectedId);
    });

    return note ? (
        <div>
            {note.date}
            {note.title}
            <br />
            {note.desc}
        </div>
    ) : (
        <></>
    );
};
