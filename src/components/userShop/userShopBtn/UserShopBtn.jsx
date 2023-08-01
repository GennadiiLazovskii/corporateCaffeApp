import CustomButton from '../../customButton/CustomButton';
import styles from './UserShopBtn.module.scss';

const UserShopBtn = () => {

    return(
        <div className={styles.userShopBtnWrap}>
            <div className={styles.userShopBtnItem}>
                <h2>Gift shop</h2>
                    <div className={styles.userShopBtnItemWrap}>
                        <CustomButton title={'New'} onClick={() => {}}/>
                        <CustomButton title={'Education'} onClick={() => {}}/>
                        <CustomButton title={'Cloth'} onClick={() => {}}/>
                    </div>
            </div>
        </div>
    )
}

export default UserShopBtn;