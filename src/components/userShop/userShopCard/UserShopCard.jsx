import { modalReducer } from '../../reducers/modalReducer';
import { showUserShopItemDescr, hideUserShopItemDescr } from '../../actions/modalActions';
import { useReducer, useState } from 'react';
import styles from "./UserShopCard.module.scss";
import Crown from "../../../img/user/crown.png";
import Ellipse from "../../../img/user/Ellipse.png"
import UserShopItemDescr from '../userShopItemDescr/UserShopItemDescr';
import { useDispatch, useSelector } from 'react-redux';
import { addOrder, show } from '../../../features/bascet/bascetSlice.js';
import { setModalContext } from '../../../features/buttonExit/buttonExitSlice';
import UserBascet from '../userBascet/UserBascet';

const UserShopCard = ({ shop }) => {

    const dispatchOrder = useDispatch();
    const cartStatus = useSelector((state) => state.modal.modalState);

    const initialState = {
        openShopItemDescr: false,
    }

    const [state, dispatch] = useReducer(modalReducer, initialState);
    const [prodId, setProdId] = useState(null);

    const handleShowUserShopItemDescr = (productId) => {
        setProdId(productId);
        dispatch(showUserShopItemDescr());
    };

    const handleHideUserShopItemDescr = () => {
        dispatch(hideUserShopItemDescr());
    };

    const handleAddToCart = (productId) => {
        dispatchOrder(addOrder(productId));
        dispatchOrder(show(true));
        dispatchOrder(setModalContext(true));
    }

    return (
        <>
            {shop.map((product) => (
                <div className={styles.userShopCard} key={product.id}>
                    <div className={styles.userShopCardWrap}>
                        <div className={styles.userShopCardHeader}>
                            <p>{product.nameProduct}</p>
                        </div>
                        <div className={styles.userShopCardImg}>
                            <img onClick={() => handleShowUserShopItemDescr(product.id)} src={product.productImage} alt="t-Shirt" />
                            <img className={styles.userShopCardImgEllipse} src={Ellipse} alt="Ellipse" />
                        </div>
                        <div className={styles.userShopCardPrice}>
                            <img src={Crown} alt="Crown" />
                            <p>{product.price}</p>
                        </div>
                        <div className={styles.userShopCardBtn}>
                            <button onClick={() => handleAddToCart(product.id)}>
                                <p>Buy</p>
                            </button>
                        </div>
                    </div>

                    {cartStatus && (
                        <div className={styles.userBascetContainer}>
                            <div className={styles.userBascetblurBackground} />
                            <div className={styles.userBascet}>
                                <UserBascet shop={shop} />
                            </div>
                        </div>
                    )}
                    {state.openShopItemDescr && prodId === product.id && (
                        <div className={styles.contestMonthContainer}>
                            <div className={styles.blurBackground} />
                            <div className={styles.contestMonth}>
                                <UserShopItemDescr
                                    product={product}
                                    hideShopItemDescr={handleHideUserShopItemDescr}
                                />
                            </div>
                        </div>
                    )}
                </div>
            ))}
        </>
    )
}

export default UserShopCard;
