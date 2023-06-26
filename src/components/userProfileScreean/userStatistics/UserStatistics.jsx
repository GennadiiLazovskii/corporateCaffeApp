import styles from "./UserStatistics.module.scss";
import { useSelector } from "react-redux";

const UserStatistics = () => {

    const users = useSelector((state) => state.user.users);

    return (
        <>
            {users.map(user => (
                <div className={styles.userStatisticsWrap} key={user.id}>
                    <div className={styles.userStatisticsHeader}>
                        <h2>Your statistics</h2>
                    </div>
                    <div className={styles.userStatisticsItem}>
                        <div className={styles.userStatisticsDescr}>
                            <h2>{user.yourStatistics.dayWorkedOut}</h2>
                            <p>Day worked out</p>
                        </div>
                        <div className={styles.line}></div>
                        <div className={styles.userStatisticsDescr}>
                            <h2>{user.yourStatistics.checksPunched}</h2>
                            <p>Checks punched</p>
                        </div>
                        <div className={styles.line}></div>
                        <div className={styles.userStatisticsDescr}>
                            <h2>{user.yourStatistics.coffeeIsBrewed}</h2>
                            <p>Coffee is brewed</p>
                        </div>
                        <div className={styles.line}></div>
                        <div className={styles.userStatisticsDescr}>
                            <h2>{user.yourStatistics.totalAmountOfChecks}</h2>
                            <p>Total amount of checks</p>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}

export default UserStatistics