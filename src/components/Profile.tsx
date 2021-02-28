import { useContext } from 'react';
import { challengeContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Profile.module.css';

export function Profile(){

    const { level } = useContext(challengeContext);

    return(
        <div className={styles.profileContainer}>
            <img src="https://pbs.twimg.com/profile_images/378800000246041736/fcd89516aeb33289a983d9bfb595e173.jpeg" alt="Nohan Morais"/>
            <div>
                <strong>Nohan Morais</strong>
                <p>
                    <img src="icons/level.svg" alt="Level" />
                    Level {level}
                </p>
            </div>
        </div>

    );
}