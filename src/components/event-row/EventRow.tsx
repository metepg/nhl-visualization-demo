import React from "react";
import Content from "../content/Content.tsx";
import {GameEvent} from "../../interfaces.ts";

interface EventProps {
    events: GameEvent[];
    date: string;
}

const EventRow: React.FC<EventProps> = ({events, date}) => {
    return (
        <Content events={events} date={date}/>
    )
}

export default EventRow
