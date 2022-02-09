import { FaThList, FaStar } from 'react-icons/fa';
import './Toolbar.scss';

export const Toolbar = () => {
    return (
        <aside className="toolbar">
            <button title="All" className="toolbar__button">
                <FaThList />
            </button>
            <button title="Favorites" className="toolbar__button">
                <FaStar />
            </button>
        </aside>
    );
};
