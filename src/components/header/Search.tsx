import { FaSearch } from 'react-icons/fa';

import { setNeedle } from '../../store/notesSlice';

import './Search.scss';
import { useDispatch } from 'react-redux';

export const Search = () => {
    const dispatch = useDispatch();

    const handleNeedleChange = (needle: string) => {
        dispatch(setNeedle(needle));
    };

    return (
        <div className="search-input">
            <FaSearch />
            <input
                placeholder="Search"
                onChange={(e) => handleNeedleChange(e.target.value)}
            />
        </div>
    );
};
