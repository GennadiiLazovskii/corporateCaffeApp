import { modalReducer } from '../../reducers/modalReducer';
import { showUserShopItemDescr, hideUserShopItemDescr } from '../../actions/modalActions';
import { useReducer } from 'react';
import styles from "./UserShopCard.module.scss";
import Crown from "../../../img/user/crown.png";
import tShirt from "../../../img/user/t-shirt.png";
import Ellipse from "../../../img/user/Ellipse.png"
import UserShopItemDescr from '../userShopItemDescr/UserShopItemDescr';

const UserShopCard = () => {

    const initialState = {
        openShopItemDescr: false,
    }

    const [state, dispatch] = useReducer(modalReducer, initialState);

    const handleShowUserShopItemDescr = () => {
        dispatch(showUserShopItemDescr());
    };

    const handleHideUserShopItemDescr = () => {
        dispatch(hideUserShopItemDescr());
    };

    return (
        <div className={styles.userShopCard}>
            <div className={styles.userShopCardWrap}>
                <div className={styles.userShopCardHeader}>
                    <p>Branded T-shirt "Coffee" </p>
                </div>
                <div className={styles.userShopCardImg}>
                    <img onClick={handleShowUserShopItemDescr} src={tShirt} alt="t-Shirt" />
                    <img className={styles.userShopCardImgEllipse} src={Ellipse} alt="Ellipse" />
                </div>
                <div className={styles.userShopCardPrice}>
                    <img src={Crown} alt="Crown" />
                    <p>341</p>
                </div>
                <div className={styles.userShopCardBtn}>
                    <button>
                        <p>Buy</p>
                    </button>
                </div>
            </div>
            {state.openShopItemDescr && (
                <div className={styles.contestMonthContainer}>
                    <div className={styles.blurBackground} />
                    <div className={styles.contestMonth}>
                        <UserShopItemDescr hideShopItemDescr={handleHideUserShopItemDescr} />
                    </div>
                </div>
            )}
        </div>
    )
}

export default UserShopCard;
