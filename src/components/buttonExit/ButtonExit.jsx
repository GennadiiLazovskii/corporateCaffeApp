import styles from './ButtonExit.module.scss';
import Cross from "../../img/header/cross.png";

const ButtonExit = ({hideContestMonth}) => {

    return (
        <div className={styles.buttonExit}>
            <button onClick={hideContestMonth}>
                <img src={Cross} alt="Exit" />
            </button>
        </div>
    )
}

export default ButtonExit;