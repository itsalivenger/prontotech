import React, { useState, useEffect } from 'react';

const CountdownTimer = ({ hours = 0, minutes = 0, seconds = 0 }) => {
    const [time, setTime] = useState({
        hours,
        minutes,
        seconds,
    });

    const updateTimer = () => {
        setTime(prevTime => {
            const { hours, minutes, seconds } = prevTime;

            if (seconds > 0) {
                return { hours, minutes, seconds: seconds - 1 };
            } else if (minutes > 0) {
                return { hours, minutes: minutes - 1, seconds: 59 };
            } else if (hours > 0) {
                return { hours: hours - 1, minutes: 59, seconds: 59 };
            } else {
                return prevTime; // Timer is done
            }
        });
    };

    useEffect(() => {
        const timer = setInterval(updateTimer, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div>
            {`${time.hours.toString().padStart(2, '0')}:${time.minutes.toString().padStart(2, '0')}:${time.seconds.toString().padStart(2, '0')}`}
        </div>
    );
};

export default CountdownTimer;
