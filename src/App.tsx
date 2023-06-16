import React from 'react';
import './styles.css';
import EventRow from "./components/event-row/EventRow.tsx";
import data from './data';
import ContentHeader from "./components/content-header/ContentHeader.tsx";
import {GameData} from "./interfaces.ts";


const App: React.FC = () => {
    const exampleData: GameData[] = data;

    return (
        <div className="content-wrapper">
            <ContentHeader />
            {exampleData.map((gameData: GameData) => (
                <EventRow key={gameData.game} events={gameData.events} date={gameData.date} />
            ))}
        </div>
    );
};

export default App;
