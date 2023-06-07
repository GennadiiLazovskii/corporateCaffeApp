import styles from './Header.module.scss';
import arowLeft from '../../img/header/arowLeft.png';
import { Link } from 'react-router-dom';

const Header = () => {

    return (
        <div className={styles.headerWrap}>
            <div className={styles.headerExit}>
                <Link to='/'>
                    <button>
                        <img src={arowLeft} alt="arowLeft" />
                    </button>
                </Link>
                <p>Exit</p>
            </div>
            <div className={styles.headerProfile}>
                <p>Profile</p>
            </div>
            <div className={styles.headerMesage}>
                <button>Chat</button>
                <button>Mesage</button>
            </div>
        </div>
    )
}

export default Header;