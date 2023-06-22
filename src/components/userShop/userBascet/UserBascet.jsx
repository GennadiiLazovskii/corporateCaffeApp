import styles from './UserBascet.module.scss';
import Cross from '../../../img/header/cross.png';
import Smile from '../../../img/shop/sad.png';

const UserBascet = () => {
  return (
    <div className={styles.userBascet}>
      <div className={styles.userBascetExit}>
        <button>
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
