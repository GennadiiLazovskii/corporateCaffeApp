import UserShopBtn from '../userShopBtn/UserShopBtn';
import UserShopCard from '../userShopCard/UserShopCard';
import styles from './UserShopScreean.module.scss';
import Delivery from '../../../img/shop/delivery.png';
import UserBascet from '../userBascet/UserBascet.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { setModalContext } from '../../../features/buttonExit/buttonExitSlice.js';

const UserShopScreean = () => {

    const dispatch = useDispatch();
    const cartStatus = useSelector((state) => state.modal.modalState);

    return (
        <div className={styles.userShopScreean}>
            <div className={styles.userShopScreeanHead}>
                <UserShopBtn />
                <div className={styles.userShopScreeanDeliv} onClick={() => dispatch(setModalContext(true))}>
                    <img src={Delivery} alt="Delivery" />
                </div>
            </div>
            <UserShopCard/>
            {cartStatus && (
                <div className={styles.userBascetContainer}>
                    <div className={styles.userBascetblurBackground} />
                    <div className={styles.userBascet}>
                        <UserBascet/>
                    </div>
                </div>
            )}
        </div>
    )
}

export default UserShopScreean;