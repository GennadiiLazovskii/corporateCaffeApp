import styles from './MainScreanProfile.module.scss';
import UserAchievements from './userAchievements/UserAchievements';
import ProfileCard from './profileCard/ProfileCard.jsx';
import UserGoal from './userGoal/UserGoal';
import UserTotalKarma from './userTotalKarma/UserTotalKarma';

const MainScreanProfile = () => {

    return(
        <div className={styles.mainScreanProfile}>
            {/* <ProfileCard/>
            <div className={styles.mainScreanProfileCenter}>
                <UserGoal/>
                <UserAchievements/>
            </div> */}
            <div>
                <UserTotalKarma/>
            </div>
        </div>
    )
}

export default MainScreanProfile;