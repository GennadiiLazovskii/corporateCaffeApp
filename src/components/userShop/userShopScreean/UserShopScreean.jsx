import UserShopBtn from '../userShopBtn/UserShopBtn';
import UserShopCard from '../userShopCard/UserShopCard';
import styles from './UserShopScreean.module.scss';
import Delivery from '../../../img/shop/delivery.png';
const UserShopScreean = ({shop}) => {

    return (
        <div className={styles.userShopScreean}>
            <div className={styles.userShopScreeanHead}>
                <UserShopBtn />
                <div className={styles.userShopScreeanDeliv}>
                    <img src={Delivery} alt="Delivery" />
                </div>
            </div>
            <UserShopCard shop={shop} />
        </div>
    )
}

export default UserShopScreean;