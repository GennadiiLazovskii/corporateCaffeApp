import styles from './MainScreanProfile.module.scss';
import ProfileCard from './profileCard/ProfileCard.jsx';
import UserGoal from './userGoal/UserGoal';

const MainScreanProfile = () => {

    return(
        <div className={styles.mainScreanProfile}>
            <ProfileCard/>
            <UserGoal/>
        </div>
    )
}

export default MainScreanProfile;