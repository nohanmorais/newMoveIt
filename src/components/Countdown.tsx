import { useContext, useEffect, useState } from 'react';
import { challengeContext } from '../contexts/ChallengesContext';
import { CountdownContext } from '../contexts/CountdownContext';
import styles from '../styles/components/Countdown.module.css';

let countdownTimeout: NodeJS.Timeout;

export function Countdown(){

    const { seconds, 
        minutes, 
        hasFinished, 
        isActive, 
        resetCountDown, 
        startCountDown} = useContext(CountdownContext)

   

    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
    const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');


    return(
        <div>
            <div className={styles.countdownContainer}>
            <div>
                <span>{minuteLeft}</span>
                <span>{minuteRight}</span>
            </div>
            <span>:</span>
            <div>
                <span>{secondLeft}</span>
                <span>{secondRight}</span>
            </div>
        </div>

        {hasFinished ? (
            <button 
                disabled 
                className={styles.countdownButton}
            >   
                Ciclo encerrado
            </button>
        ): (
            <>
                {isActive ? (
                <button 
                    type="button" 
                    className={`${styles.countdownButton} ${styles.countdownButtonActive}`}
                    onClick={resetCountDown} 
                >   
                    Abandonar Ciclo
                </button>
            ) : (
                <button 
                    type="button" 
                    className={styles.countdownButton}
                    onClick={startCountDown} 
                >   
                    Iniciar Ciclo
                </button>    
                )}
            </>
        )}

        
    
        

    
        </div>

    )
}