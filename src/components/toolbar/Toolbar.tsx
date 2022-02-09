import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '../../store';
import { FilterType, showAll, showFavorites } from '../../store/filterSlice';

import { FaThList, FaStar } from 'react-icons/fa';
import './Toolbar.scss';

const toolbarClass = 'toolbar';

export const Toolbar = () => {
    const dispatch = useDispatch();
    const filterType: FilterType = useSelector((state: RootState) => {
        return state.filter.type;
    });
    const isAll = filterType === 'ALL';

    const handleShowAll = () => {
        dispatch(showAll());
    };

    const handleShowFavorite = () => {
        dispatch(showFavorites());
    };

    return (
        <aside className={toolbarClass}>
            <button
                title="All"
                className={`${toolbarClass}__button ${isAll ? 'active' : ''}`}
                onClick={handleShowAll}
            >
                <FaThList />
            </button>
            <button
                title="Favorites"
                className={`${toolbarClass}__button ${!isAll ? 'active' : ''}`}
                onClick={handleShowFavorite}
            >
                <FaStar />
            </button>
        </aside>
    );
};
