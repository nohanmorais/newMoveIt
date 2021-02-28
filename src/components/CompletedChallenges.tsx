
import { useContext } from 'react';
import { challengeContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/CompletedChallenge.module.css';

export function CompletedChallenges() {
    
    const { challengesCompleted } = useContext(challengeContext);


    return (
        <div className={styles.completedChallengesContainer}>
            <span>Desafios completos</span>
            <span>{challengesCompleted }</span>
        </div>
    )
}