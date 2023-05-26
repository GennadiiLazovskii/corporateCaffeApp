import styles from './MainScreanProfile.module.scss';
import UserAchievements from './userAchievements/UserAchievements';
// import ProfileCard from './profileCard/ProfileCard.jsx';
// import UserGoal from './userGoal/UserGoal';

const MainScreanProfile = () => {

    return(
        <div className={styles.mainScreanProfile}>
            {/* <ProfileCard/>
            <UserGoal/> */}
            <UserAchievements/>
        </div>
    )
}

export default MainScreanProfile;