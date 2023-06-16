import React from "react";
import styles from './Content.module.css'
import Timeline from "../timeline/Timeline.tsx";
import styled from "styled-components";
import {GameEvent} from "../../interfaces.ts";


interface EventProps {
    events: GameEvent[];
    date: string;
}

const CircleContainer = styled.div`
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100%;
    `;
const Circle = styled.div<{ winner?: string }>`
      width: 25px;
      height: 25px;
      border-radius: 50%;
      justify-content: center;
      background-color: ${(props) => (props?.winner === 'home' ? 'var(--red)' : 'var(--black)')};
    `;
const Result = styled.div<{winner?: string}>`
      display: flex;
      background-color: ${(props) => (props?.winner === 'home' ? 'var(--red)' : 'var(--black)')};
      border: ${(props) => (props?.winner === 'home' ? '1px solid var(--red)' : '1px solid var(--black)')};
      border-radius: 20px;
      justify-content: center;
      align-items: center;
      color: var(--white);
      width: 100%;
      height: 25px;
    `;
const Content: React.FC<EventProps> = ({events, date}) => {
    const homeGoals = events.filter((e) => !!e.player).length;
    const awayGoals = events.length - homeGoals;
    const winner = homeGoals > awayGoals ? 'home' : 'away';

    const period1 = events.filter((e) => e.period === 1);
    const period2 = events.filter((e) => e.period === 2);
    const period3 = events.filter((e) => e.period === 3);
    const shootout = events.filter((e) => e.period === 4);

    return (
        <div className={styles.container}>
            <div className={styles.column}>
                <div className={styles.content}>{date}</div>
            </div>
            <div className={styles.column}>
                <div className={styles.content}>CAR-FLO</div>
            </div>
            <div className={styles.column}>
                <div className={styles.content}>
                    <Timeline events={period1}/>
                </div>
            </div>
            <div className={styles.column}>
                <div className={styles.content}>
                    <Timeline events={period2}/>
                </div>
            </div>
            <div className={styles.column}>
                <div className={styles.content}>
                    <Timeline events={period3}/>
                </div>
            </div>
            <div className={styles.column}>
                <div className={styles.content}>
                    <Timeline events={shootout} shootout={true}/>
                </div>
            </div>
            <div className={styles.column}>
                <div className={styles.content}>
                    <CircleContainer>
                        <Circle winner={winner}></Circle>
                    </CircleContainer>
                </div>
            </div>
            <div className={styles.column}>
                <div className={styles.content}>
                    <Result winner={winner}>{homeGoals}-{awayGoals}</Result>
                </div>
            </div>
            <div className={styles.column}>
                <div className={styles.content}>V</div>
            </div>
        </div>
    )
}

export default Content
