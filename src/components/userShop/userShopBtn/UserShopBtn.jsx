import styles from './UserShopBtn.module.scss';

const UserShopBtn = () => {

    return(
        <div className={styles.userShopBtnWrap}>
            <div className={styles.userShopBtnItem}>
                <h2>Gift shop</h2>
                    <div className={styles.userShopBtnItemWrap}>
                        <button className={styles.userShopBtn}>New</button>
                        <button className={styles.userShopBtn}>Education</button>
                        <button className={styles.userShopBtn}>Cloth</button>
                    </div>
            </div>
        </div>
    )
}

export default UserShopBtn;