import CustomButton from '../../customButton/CustomButton.jsx';
import styles from './btnLibrary.module.scss';

const BtnLibrary = () => {

    return(
        <div className={styles.btnLibraryWrap}>
            <div className={styles.btnLibraryItem}>
                <h2>Library</h2>
                    <div className={styles.btnLibraryBtnItem}>
                        <CustomButton title={"About coffee"} onClick={() => {}}/>
                        <CustomButton title={"About company"} onClick={() => {}}/>
                        <CustomButton title={"Onboarding"} onClick={() => {}}/>
                    </div>
            </div>
        </div>
    )
}

export default BtnLibrary;