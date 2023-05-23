import styles from './Header.module.scss';
import arowLeft from '../../img/header/arowLeft.png';

const Header = () => {

    return(
        <div className={styles.headerWrap}>
            <div className={styles.headerExit}>
                <button>
                    <img src={arowLeft} alt="arowLeft" />
                </button>
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