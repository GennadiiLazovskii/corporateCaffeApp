import styles from './UserAchievements.module.scss';
import ListAchievements from '../listAchievements/ListAchievements';

const UserAchievements = ({showDescrActiveTask}) => {

    return (
        <div className={styles.userAchievementsWrap}>
            <div className={styles.userAchievementsDescr}>
                <p>Description</p>
                <p>Award</p>
                <p>Progress</p>
                <p>Time</p>
            </div>
            <ListAchievements showDescrActiveTask={showDescrActiveTask} />
        </div>
    )
}

export default UserAchievements;