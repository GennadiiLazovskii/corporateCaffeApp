import styles from './ButtonExit.module.scss';
import Cross from "../../img/header/cross.png";

const ButtonExit = ({handleHideModal}) => {

    return (
        <div className={styles.buttonExit}>
            <button onClick={handleHideModal}>
                <img src={Cross} alt="Exit" />
            </button>
        </div>
    )
}

export default ButtonExit;