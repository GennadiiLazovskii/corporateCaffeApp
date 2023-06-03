import './ProgressCircle.scss';
import { useEffect, useState } from 'react';

const ProgressCircle = ({ progress }) => {
    const [offset, setOffset] = useState(0);
    const circleSize = 100;

    useEffect(() => {
        const circumference = 2 * Math.PI * (circleSize / 2);
        const progressOffset = ((100 - progress) / 100) * circumference;

        setOffset(progressOffset);
    }, [progress, circleSize]);

    return (
        <div className="progress-circle">
            <svg className="progress-circle__svg" width={circleSize} height={circleSize}>
                <circle className="progress-circle__background" cx="50%" cy="50%" r="45%" />
                <circle
                    className="progress-circle__bar"
                    cx="50%"
                    cy="50%"
                    r="45%"
                    style={{
                        strokeDashoffset: `${offset}`
                    }}
                />
            </svg>
            <div className="progress-circle__label">{`${progress}%`}</div>
        </div>
    );
};

export default ProgressCircle;





