import styles from './UserProfileScreean.module.scss';
import UserLevel from './userLevel/UserLevel';
import UserProfile from './userProfile/userProfile';
import UserStatistics from './userStatistics/UserStatistics';

const UserProfileScreean = ({users}) => {

    return (
        <div className={styles.UserProfileScreean}>
            <div className={styles.UserProfileScreeanRig}>
                <UserProfile users={users}/>
                <UserStatistics users={users}/>
                <UserLevel users={users}/>
            </div>
        </div>
    )
}

export default UserProfileScreean;
