import ProfileCard from '../mainScreenProfile/profileCard/ProfileCard';
import styles from './UserProfileScreean.module.scss';
import UserProfile from './userProfile/userProfile';

const UserProfileScreean = () => {

    console.log()
    return (
        <div className={styles.UserProfileScreean}>
            <ProfileCard/>
            <UserProfile/>
        </div>
    )
}

export default UserProfileScreean