import styles from './MainScreanProfile.module.scss';
import UserAchievements from './userAchievements/UserAchievements';
import ProfileCard from './profileCard/ProfileCard.jsx';
import UserGoal from './userGoal/UserGoal';
import UserTotalKarma from './userTotalKarma/UserTotalKarma';
import UserWishes from './userWishes/UserWishes';
import DescrActiveTask from './descrActiveTask/DescrActiveTask';
import ContestMonth from './contestMonth/ContestMonth';

const MainScreanProfile = () => {

    return(
        <div className={styles.mainScreanProfile}>
            {/* <ProfileCard/>
            <div className={styles.mainScreanProfileCenter}>
                <UserGoal/>
                <UserAchievements/>
            </div>
            <div className={styles.mainScreanProfileRight}>
                <UserTotalKarma/>
                <UserWishes/>
            </div> */}
                {/* <DescrActiveTask/> */}
                <ContestMonth/>
        </div>
    )
}

export default MainScreanProfile;