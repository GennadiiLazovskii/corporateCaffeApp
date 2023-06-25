import styles from "./UserBascet.module.scss";
import Cross from "../../../img/header/cross.png";
import Smile from "../../../img/shop/sad.png";
import { setModalContext } from "../../../features/buttonExit/buttonExitSlice";
import { deleteProduct, show } from "../../../features/bascet/bascetSlice";
import { useDispatch, useSelector } from "react-redux";

const UserBascet = ({ shop }) => {

  const orderId = useSelector((state) => state.order.order);
  const orderShow = useSelector((state) => state.order.show);

  const dispatch = useDispatch();

  const orderedProducts = shop.filter((product) => orderId.includes(product.id));

  const handleDeleteToCart = (productId) => {
    dispatch(deleteProduct(productId))
  }

  return (
    <>
      <div className={styles.userBascet}>
        <div className={styles.userBascetExit}>
          <button onClick={() => dispatch(setModalContext(false))}>
            <img src={Cross} alt="Exit" />
          </button>
        </div>
        {orderedProducts.length <= 0 && (
          <>
            <div className={styles.userBascetTitle}>
              <h2>You have no orders yet</h2>
            </div>
            <div className={styles.userBascetImg}>
              <img src={Smile} alt="Smile" />
            </div>
          </>
        )}
        {orderShow && orderedProducts.length > 0 && (
          <>
            <div className={styles.purchaseConfirmation} key={orderedProducts[orderedProducts.length - 1].id}>
              <div className={styles.purchaseConfirmationTitle}>
                <p>Confirm purchase <br /> {orderedProducts[orderedProducts.length - 1].nameProduct}</p>
              </div>
              <div className={styles.purchaseConfirmationBtn} onClick={() => dispatch(show(false))}>
                <p>Yes</p>
              </div>
            </div>
          </>
        )}
        {orderShow === false && orderedProducts.length > 0 && (
          <>
            <div className={styles.orderBascet}>
              <div className={styles.orderBascetTitle}>
                <h2>My orders</h2>
              </div>
              {orderedProducts.map((product) => (
                <div className={styles.orderBascetWrap} key={product.id}>
                  <div className={styles.orderBascetWrapImg}>
                    <img src={product.productImage} alt="shirt" />
                  </div>
                  <div className={styles.orderBascetWrapDescr}>
                    <p>{product.nameProduct}</p>
                  </div>
                  <div className={styles.orderBascetWrapStatus}>
                    <p>In delivery</p>
                  </div>
                  <div className={styles.orderBascetWrapDate}>
                    <p>Will be delivered <br />03/02/2023</p>
                  </div>
                  <div className={styles.userBascetDelet}>
                    <button onClick={() => handleDeleteToCart(product.id)}>
                      <img src={Cross} alt="Exit" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default UserBascet;


