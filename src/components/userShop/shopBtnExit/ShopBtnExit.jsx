import styles from './ShopBtnExit.module.scss';
import Cross from "../../../img/header/cross.png";

const ShopBtnExit = ({ hideShopItemDescr }) => {

    return (
        <div className={styles.shopBtnExit}>
            <button onClick={hideShopItemDescr}>
                <img src={Cross} alt="Exit" />
            </button>
        </div>
    )
}

export default ShopBtnExit;