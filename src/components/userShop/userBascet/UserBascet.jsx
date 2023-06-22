import styles from "./UserBascet.module.scss";
import Cross from "../../../img/header/cross.png";
import Smile from "../../../img/shop/sad.png";
import { setModalContext } from "../../../features/buttonExit/buttonExitSlice";
import { useDispatch } from "react-redux";
import { useState } from "react";

const UserBascet = () => {
  const [show, setShow] = useState(true);
  const [show1, setShow1] = useState(false);


  const dispatch = useDispatch();

  return (
    <div className={styles.userBascet}>
      <div className={styles.userBascetExit}>
        <button onClick={() => dispatch(setModalContext(false))}>
          <img src={Cross} alt="Exit" />
        </button>
      </div>
      {show && (
        <>
          <div className={styles.userBascetTitle}>
            <h2>You have no orders yet</h2>
          </div>
          <div className={styles.userBascetImg}>
            <img src={Smile} alt="Smile" />
          </div>
        </>
      )}
      {show1 && (
        <>
        <div className={styles.orderBascet}>
          <div className={styles.orderBascetTitle}>
            <h2>My orders</h2>
          </div>
          <div className={styles.orderBascetWrap}>
            <div className={styles.orderBascetWrapImg}>
              <img src="https://mkarapuz.com.ua/wp-content/uploads/2019/05/muzhskaya-futbolka-chernaya-1006.png" alt="shirt" />
            </div>
            <div className={styles.orderBascetWrapDescr}>
              <p>Branded T-shirt "Coffee"</p>
            </div>
            <div className={styles.orderBascetWrapStatus}>
              <p>In delivery</p>
            </div>
            <div className={styles.orderBascetWrapDate}>
              <p>Will be delivered <br/>03/02/2023</p>
            </div>
          </div>
        </div>
        </>
      )}
    </div>
  );
};

export default UserBascet;
