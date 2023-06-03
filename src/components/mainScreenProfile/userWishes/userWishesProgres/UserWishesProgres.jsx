import { FaCheck } from 'react-icons/fa';
import './ProgressBar.scss';

const UserWishesProgres = ({ progress }) => {
    console.log(progress)
    return (
        <div className="progress-bar">
            <div className="progress-bar__fill" style={{ width: `${progress}%`, marginLeft: 0  }}>
                {progress === 100 && <FaCheck className="progress-bar__icon" />}
            </div>
        </div>
    );
};

export default UserWishesProgres;