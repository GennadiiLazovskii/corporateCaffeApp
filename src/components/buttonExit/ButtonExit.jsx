import styles from './ButtonExit.module.scss';
import Cross from "../../img/header/cross.png";

const ButtonExit = () => {

    return (
        <div className={styles.buttonExit}>
            <button>
                <img src={Cross} alt="Exit" />
            </button>
        </div>
    )
}

export default ButtonExit;