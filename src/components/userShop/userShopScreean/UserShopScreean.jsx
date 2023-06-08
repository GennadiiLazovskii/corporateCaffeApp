import UserShopBtn from '../userShopBtn/UserShopBtn';
import UserShopCard from '../userShopCard/UserShopCard';
import styles from './UserShopScreean.module.scss';
import Delivery from '../../../img/shop/delivery.png';

const UserShopScreean = () => {
    return (
        <div className={styles.userShopScreean}>
            <div className={styles.userShopScreeanHead}>
                <UserShopBtn />
                <div className={styles.userShopScreeanDeliv}>
                    <img src={Delivery} alt="Delivery" />
                </div>
            </div>
            <UserShopCard />
        </div>
    )
}

export default UserShopScreean;