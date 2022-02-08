import { Search } from './Search';
import { CreateNote } from './CreateNote';

import './Header.scss';

export const Header = () => {
    return (
        <header>
            <Search />
            <CreateNote />
        </header>
    );
};
