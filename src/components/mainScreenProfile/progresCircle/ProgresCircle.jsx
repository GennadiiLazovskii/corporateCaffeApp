import './ProgressCircle.scss';

const ProgressCircle = ({ progress }) => {
    const circleSize = 100; 

    return (
        <div className="progress-circle" style={{ '--progress': `${progress}%` }}>
            <svg className="progress-circle__svg" width={circleSize} height={circleSize}>
                <circle className="progress-circle__background" cx={circleSize / 2} cy={circleSize / 2} r={circleSize / 2 - 5} />
                <circle
                    className="progress-circle__bar"
                    cx={circleSize / 2}
                    cy={circleSize / 2}
                    r={circleSize / 2 - 5}
                />
            </svg>
            <div className="progress-circle__label">{`${progress}%`}</div>
        </div>
    );
};

export default ProgressCircle;




