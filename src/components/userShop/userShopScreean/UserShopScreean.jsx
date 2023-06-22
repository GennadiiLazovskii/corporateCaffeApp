import UserShopBtn from '../userShopBtn/UserShopBtn';
import UserShopCard from '../userShopCard/UserShopCard';
import styles from './UserShopScreean.module.scss';
import Delivery from '../../../img/shop/delivery.png';
import UserBascet from '../userBascet/UserBascet';


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
            {/* <UserBascet/> */}
        </div>
    )
}

export default UserShopScreean;