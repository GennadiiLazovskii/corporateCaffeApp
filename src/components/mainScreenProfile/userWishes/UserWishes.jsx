import styles from './UserWishes.module.scss';
import Tshirt from '../../../img/user/t-shirt.png';
import Ellipse from '../../../img/user/Ellipse.png';
import Crown from '../../../img/user/crown.png';
import UserWishesProgres from './userWishesProgres/userWishesProgres';

const UserWishes = () => {

    const progress = 77;

    return (
        <div className={styles.userWishes}>
            <div>
                <p>Collecting for a T-shirt</p>
            </div>
            <div className={styles.userWishesImg}>
                <div className={styles.userWishesImgItem}>
                    <img src={Tshirt} alt="T-shirt" />
                </div>
                <div className={styles.userWishesImgItem}>
                    <img src={Ellipse} alt="T-shirt shadow" />
                </div>
            </div>
            <div className={styles.userWishesProgresWrap}>
                <div className={styles.userWishesProgresWrapImg}>
                    <img src={Crown} alt="Crown" />
                </div>
                <div className={styles.userWishesProgresCollected}>
                    <div className={styles.userWishesProgresCollectedItem}>
                        <p>Collected</p>
                        <p>123/200</p>
                    </div>
                    <UserWishesProgres progress={progress} />
                </div>
            </div>
        </div>
    )
}

export default UserWishes;