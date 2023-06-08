import styles from "./UserShopItemDescr.module.scss";
import tShirt from "../../../img/user/t-shirt.png";
import Ellipse from "../../../img/user/Ellipse.png";
import Crown from "../../../img/user/crown.png";
import ShopBtnExit from "../shopBtnExit/ShopBtnExit.jsx";

const UserShopItemDescr = ({hideShopItemDescr}) => {

    return (
        <div className={styles.userShopItemDescr}>
            <div className={styles.userShopItemDescrWrap}>
                <div className={styles.userShopItemDescrExit}>
                    <ShopBtnExit hideShopItemDescr={hideShopItemDescr}/>
                </div>
                <div className={styles.userShopItemDescrItem}>
                    <div className={styles.userShopItemDescrItemLeft}>
                        <img src={tShirt} alt="tShirt" />
                        <img className={styles.Ellipse} src={Ellipse} alt="Ellipse" />
                        <div className={styles.userShopItemDescrItemLeftPrice}>
                            <img src={Crown} alt="Crown" />
                            <p>341</p>
                        </div>
                    </div>
                    <div className={styles.userShopItemDescrItemCenter}></div>
                    <div className={styles.userShopItemDescrItemRight}>
                        <h2>Branded T-shirt "Coffee"</h2>
                        <p>
                            In the same way, the implementation of the planned targets
                            indicates the possibility of withdrawing current assets. Also,
                            independent states are nothing more than the quintessence of the
                            victory of marketing over reason and should be turned into a
                            laughing stock, although their very existence brings undoubted
                            benefits to society. And also interactive prototypes are indicated
                            as contenders for the role of key factors.
                        </p>
                        <button>Buy</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserShopItemDescr;
