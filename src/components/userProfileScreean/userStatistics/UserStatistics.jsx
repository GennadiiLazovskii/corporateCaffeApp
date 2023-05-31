import styles from "./UserStatistics.module.scss";

const UserStatistics = () => {

    return (
        <div className={styles.userStatisticsWrap}>
            <div className={styles.userStatisticsHeader}>
                <h2>Your statistics</h2>
            </div>
            <div className={styles.userStatisticsItem}>
                <div className={styles.userStatisticsDescr}>
                    <h2>61</h2>
                    <p>Day worked out</p>
                </div>
                <div className={styles.line}></div>
                <div className={styles.userStatisticsDescr}>
                    <h2>356</h2>
                    <p>Checks punched</p>
                </div>
                <div className={styles.line}></div>
                <div className={styles.userStatisticsDescr}>
                    <h2>91</h2>
                    <p>Coffee is brewed</p>
                </div>
                <div className={styles.line}></div>
                <div className={styles.userStatisticsDescr}>
                    <h2>210 673</h2>
                    <p>Total amount of checks</p>
                </div>
            </div>
        </div>
    )
}

export default UserStatistics