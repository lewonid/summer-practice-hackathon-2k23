import React, { useState, useEffect } from 'react'

import { FiShield } from 'react-icons/fi'
import { TiDelete } from 'react-icons/ti'
import { CountdownCircleTimer } from 'react-countdown-circle-timer'

import style from '../assets/GeneratedCode.module.css'

const GeneratedCode = ({ mfa, handleDelete }) => {

    const [code, setCode] = useState();

    useEffect(() => {
        const generateCode = () => {
            const code = Array.from({ length: 6 }, () => Math.floor(Math.random() * 10));
            setCode(code);
        }
        generateCode();

        const interval = setInterval(() => generateCode(), 30000);
        return () => {
            clearInterval(interval);
        };
    }, [])

    const handleDeleteButton = () => {
        handleDelete(mfa);
    }

    // const myInterval = setInterval(() => console.log('test'), 1000)

    return (
        <div className={style.GeneratedCode}>
            <FiShield id={style.FiShield} />
            <div className={style.CodeData}>
                <p>{mfa}</p>
                <h2>
                    {code}
                </h2>
            </div>
            <CountdownCircleTimer
                size={24}
                strokeWidth={2}
                trailStrokeWidth={2}
                isPlaying
                duration={30}
                colors={['#004777', '#F7B801', '#A30000', '#A30000']}
                colorsTime={[7, 5, 2, 0]}
                onComplete={() => {
                    return { shouldRepeat: true }
                }}
            />
            <TiDelete
                id={style.TiDelete}
                onClick={handleDeleteButton}
            />
        </div>
    )
}

export default GeneratedCode