import ProfileCard from '../mainScreenProfile/profileCard/ProfileCard';
import styles from './UserProfileScreean.module.scss';
import UserProfile from './userProfile/userProfile';
import UserStatistics from './userStatistics/UserStatistics';

const UserProfileScreean = () => {

    return (
        <div className={styles.UserProfileScreean}>
            <ProfileCard/>
            <div className={styles.UserProfileScreeanRig}>
                <UserProfile/>
                <UserStatistics/>
            </div>
        </div>
    )
}

export default UserProfileScreean;
