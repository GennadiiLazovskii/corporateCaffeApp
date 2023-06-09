import styles from './UserTotalKarma.module.scss';
import Karma from '../../../img/user/karma.png';

const UserTotalKarma = ({ handleShowContestMonth, users }) => {
    return (
        <>
            {users.map(user => (
                <div className={styles.userTotalKarma} key={user.id}>
                    <div className={styles.userTotalKarmaHead}>
                        <p>Total Karma</p>
                    </div>
                    <div className={styles.userTotalKarmaAdress}>
                        <p>Coffe, Kyiv city, Khoryva street</p>
                    </div>
                    <div className={styles.userTotalKarmaItem}>
                        <img src={Karma} alt="Karma" />
                        <p>{user.karma.totalKarma}</p>
                    </div>
                    <div className={styles.userTotalKarmaBtn}>
                        <button onClick={handleShowContestMonth}>Сontest of the month</button>
                    </div>
                </div>
            ))}
        </>
    );
};

export default UserTotalKarma;
