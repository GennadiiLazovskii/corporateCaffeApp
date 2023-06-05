import styles from './btnLibrary.module.scss';

const BtnLibrary = () => {

    return(
        <div className={styles.btnLibraryWrap}>
            <div className={styles.btnLibraryItem}>
                <h2>Library</h2>
                    <div className={styles.btnLibraryBtnItem}>
                        <button className={styles.btnLibraryBtn}>About coffee</button>
                        <button className={styles.btnLibraryBtn}>About company</button>
                        <button className={styles.btnLibraryBtn}>Onboarding</button>
                    </div>
            </div>
        </div>
    )
}

export default BtnLibrary;