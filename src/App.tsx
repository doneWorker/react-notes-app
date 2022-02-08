import React from 'react';
import { Header } from './components/header';
import { Toolbar } from './components/toolbar';
import { List } from './components/notes/List';
import { Single } from './components/notes/Single';

function App() {
    return (
        <div className="App">
            <Header />
            <main>
                <Toolbar />
                <List />
                <Single />
            </main>
        </div>
    );
}

export default App;
