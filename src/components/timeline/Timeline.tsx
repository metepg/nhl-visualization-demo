import React from 'react';
import styled from 'styled-components';
import {GameEvent} from "../../interfaces.ts";

const TimelineWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center; /* Added */
  height: 50px;
  width: 100%;
  margin: 0 auto; /* Added */
`;

const EventCircle = styled.div<{ player?: number }>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: ${(props) => (props?.player ? '25px' : '12.5px')};
  height: ${(props) => (props?.player ? '25px' : '12.5px')};
  border-radius: 50%;
  border: 2px solid var(--white);
  background-color: ${(props) => (props?.player ? 'var(--red)' : 'var(--black)')};
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
`;

const TimelineLine = styled.div<{shootout?: boolean}>`
  width: ${(props) => (props?.shootout ? '53px' : '212px')};
  border-radius: 3px;
  height: 5px;
  background-color: var(--dark-grey);
  z-index: 1;
`;

const EventText = styled.div`
  font-size: 12px;
  font-weight: bold;
  color: var(--white);
`;

interface TimelineProps {
    events: GameEvent[];
    shootout?: boolean
}

const Timeline: React.FC<TimelineProps> = ({events, shootout}) => {
    const getCirclePosition = (time: number): string => {
        return ((time / 1200) * 100).toString();
    };

    return (
        <>
            <TimelineWrapper>
                {events.map((event: GameEvent, index: number) => (
                    <EventCircle key={index} player={event.player}
                                 style={{left: `${getCirclePosition(event.timeInSeconds)}%`}}>
                        <EventText>{event?.player}</EventText>
                    </EventCircle>
                ))}
                <TimelineLine shootout={shootout}/>
            </TimelineWrapper>
        </>
    );
};

export default Timeline;
