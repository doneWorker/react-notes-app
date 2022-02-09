import { useSelector } from 'react-redux';

import { RootState } from '../../store';
import { FilterType } from '../../store/filterSlice';

import { FaThList, FaStar } from 'react-icons/fa';
import './Toolbar.scss';

const toolbarClass = 'toolbar';

export const Toolbar = () => {
    const filterType: FilterType = useSelector((state: RootState) => {
        return state.filter.type;
    });

    const isAll = filterType === 'ALL';

    return (
        <aside className={toolbarClass}>
            <button
                title="All"
                className={`${toolbarClass}__button ${isAll ? 'active' : ''}`}
            >
                <FaThList />
            </button>
            <button
                title="Favorites"
                className={`${toolbarClass}__button ${!isAll ? 'active' : ''}`}
            >
                <FaStar />
            </button>
        </aside>
    );
};
