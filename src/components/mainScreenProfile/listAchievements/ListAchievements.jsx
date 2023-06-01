import styles from './ListAchievements.module.scss';
import ProgressCircle from '../progresCircle/ProgresCircle';
import Crown from '../../../img/user/crown.png';
import Karma from '../../../img/user/karma.png';

const ListAchievements = ({showDescrActiveTask}) => {

    const progress = 30;
    
    return (
        <div className={styles.userAchievementsAward}>
            <div className={styles.userAchievementsNumber}>
                <p> 1 </p>
            </div>
            <div className={styles.userAchievementsTask}>
                <p onClick={showDescrActiveTask}>Продать 100 кофе + десерт</p>
            </div>
            <div className={styles.userAchievementsBonus}>
                <div className={styles.userAchievementsBonusCrown}>
                    <img src={Crown} alt="Crown" />
                    <p>+ 500</p>
                </div>
                <div className={styles.userAchievementsBonusKarma}>
                    <img src={Karma} alt="Karma" />
                    <p>+ 1500</p>
                </div>
            </div>
            <div>
                <ProgressCircle progress={progress} />
            </div>
            <div className={styles.userAchievementsDate}>
                <p>До 31.07</p>
            </div>
        </div>
    )
}

export default ListAchievements
