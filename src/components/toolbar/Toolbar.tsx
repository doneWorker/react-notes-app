import { ReactElement } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '../../store';
import { FilterType, showAll, showFavorites } from '../../store/filterSlice';

import { FaThList, FaStar } from 'react-icons/fa';
import './Toolbar.scss';

const toolbarClass = 'toolbar';

interface ToolbarButtonProps {
    title: string;
    isActive: boolean;
    icon: ReactElement;
    onClick: () => void;
}

const ToolbarButton = ({
    title,
    isActive,
    icon,
    onClick,
}: ToolbarButtonProps): JSX.Element => (
    <button
        title={title}
        className={`${toolbarClass}__button ${isActive ? 'active' : ''}`}
        onClick={onClick}
    >
        {icon}
    </button>
);

export const Toolbar = (): JSX.Element => {
    const dispatch = useDispatch();
    const filterType: FilterType = useSelector(
        (state: RootState) => state.filter.type
    );
    const isAll = filterType === 'ALL';

    const handleShowAll = () => {
        dispatch(showAll());
    };

    const handleShowFavorite = () => {
        dispatch(showFavorites());
    };

    return (
        <aside className={toolbarClass}>
            <ToolbarButton
                title="All"
                onClick={handleShowAll}
                isActive={isAll}
                icon={<FaThList />}
            />
            <ToolbarButton
                title="Favorite"
                onClick={handleShowFavorite}
                isActive={!isAll}
                icon={<FaStar />}
            />
        </aside>
    );
};
