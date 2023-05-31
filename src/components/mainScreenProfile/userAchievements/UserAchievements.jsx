import styles from './UserAchievements.module.scss';
import ListAchievements from '../listAchievements/ListAchievements';

const UserAchievements = () => {

    return (
        <div className={styles.userAchievementsWrap}>
            <div className={styles.userAchievementsDescr}>
                <p>Description</p>
                <p>Award</p>
                <p>Progress</p>
                <p>Time</p>
            </div>
            <ListAchievements />
        </div>
    )
}

export default UserAchievements;