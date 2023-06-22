import styles from './UserBascet.module.scss';
import Cross from '../../../img/header/cross.png';
import Smile from '../../../img/shop/sad.png';
import { setModalContext } from '../../../features/buttonExit/buttonExitSlice';
import { useDispatch } from 'react-redux';

const UserBascet = () => {

  const dispatch = useDispatch();

  return (
    <div className={styles.userBascet}>
      <div className={styles.userBascetExit}>
        <button onClick={() => dispatch(setModalContext(false))}>
          <img src={Cross} alt="Exit" />
        </button>
      </div>
      <div className={styles.userBascetTitle}>
        <h2>You have no orders yet</h2>
      </div>
      <div className={styles.userBascetImg}>
        <img src={Smile} alt="Smile" />
      </div>
    </div>
  )
}

export default UserBascet
