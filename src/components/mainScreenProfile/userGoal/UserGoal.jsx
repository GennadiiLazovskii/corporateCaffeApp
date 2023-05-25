import styles from './UserGoal.module.scss';

const UserGoal = () => {

    return(
        <div className={styles.userGoalWrap}>
            <div className={styles.userGoalItem}>
                <h2>Goal</h2>
                    <div className={styles.userGoaBtnItem}>
                        <button className={styles.userGoaBtn}>Active</button>
                        <button className={styles.userGoaBtn}>Archival</button>
                        <button className={styles.userGoaBtn}>New</button>
                    </div>
            </div>
        </div>
    )
}

export default UserGoal;