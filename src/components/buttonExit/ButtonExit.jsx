import styles from './ButtonExit.module.scss';
import Cross from "../../img/header/cross.png";

const ButtonExit = ({hideModal}) => {

    return (
        <div className={styles.buttonExit}>
            <button onClick={hideModal}>
                <img src={Cross} alt="Exit" />
            </button>
        </div>
    )
}

export default ButtonExit;