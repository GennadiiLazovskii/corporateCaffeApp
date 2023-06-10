import styles from "./UserShopItemDescr.module.scss";
import tShirt from "../../../img/user/t-shirt.png";
import Ellipse from "../../../img/user/Ellipse.png";
import Crown from "../../../img/user/crown.png";
import ShopBtnExit from "../shopBtnExit/ShopBtnExit.jsx";

const UserShopItemDescr = ({product, hideShopItemDescr}) => {

    return (
        <div className={styles.userShopItemDescr}>
            <div className={styles.userShopItemDescrWrap}>
                <div className={styles.userShopItemDescrExit}>
                    <ShopBtnExit hideShopItemDescr={hideShopItemDescr}/>
                </div>
                <div className={styles.userShopItemDescrItem}>
                    <div className={styles.userShopItemDescrItemLeft}>
                        <img src={product.productImage} alt={product.nameProduct} />
                        <img className={styles.Ellipse} src={Ellipse} alt="Ellipse" />
                        <div className={styles.userShopItemDescrItemLeftPrice}>
                            <img src={Crown} alt="Crown" />
                            <p>{product.price}</p>
                        </div>
                    </div>
                    <div className={styles.userShopItemDescrItemCenter}></div>
                    <div className={styles.userShopItemDescrItemRight}>
                        <h2>{product.nameProduct}</h2>
                        <p>{product.productDescription}</p>
                        <button>Buy</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserShopItemDescr;
