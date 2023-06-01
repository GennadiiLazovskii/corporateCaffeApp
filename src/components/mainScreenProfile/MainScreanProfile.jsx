import styles from './MainScreanProfile.module.scss';
import UserAchievements from './userAchievements/UserAchievements';
import ProfileCard from './profileCard/ProfileCard.jsx';
import UserGoal from './userGoal/UserGoal';
import UserTotalKarma from './userTotalKarma/UserTotalKarma';
import UserWishes from './userWishes/UserWishes';
import DescrActiveTask from './descrActiveTask/DescrActiveTask';
import ContestMonth from './contestMonth/ContestMonth';
import { useState } from 'react'

const MainScreanProfile = ({showProfileScreean}) => {

    const [openContestMonth, setOpenContestMonth] = useState(false);
    const [openDescrActiveTask, setDescrActiveTask] = useState(false)

    const showContestMonth = () => {
        setOpenContestMonth(true);
    };

    const hideModal = () => {
        setOpenContestMonth(false)
        setDescrActiveTask(false)
    }

    const showDescrActiveTask = () => {
        setDescrActiveTask(true);
    };

    return (
        <div className={styles.mainScreanProfile}>
            <ProfileCard showProfileScreean={showProfileScreean} />
            <div className={styles.mainScreanProfileCenter}>
                <UserGoal />
                <UserAchievements showDescrActiveTask={showDescrActiveTask} />
            </div>
            <div className={styles.mainScreanProfileRight}>
                <UserTotalKarma showContestMonth={showContestMonth} />
                <UserWishes />
            </div>
            {openContestMonth && (
                <div className={styles.contestMonthContainer}>
                    <div className={styles.blurBackground} />
                    <div className={styles.contestMonth}>
                        <ContestMonth hideModal={hideModal} />
                    </div>
                </div>
            )}
            {openDescrActiveTask && (
                <div className={styles.contestMonthContainer}>
                    <div className={styles.blurBackground} />
                    <div className={styles.contestMonth}>
                        <DescrActiveTask hideModal={hideModal}/>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MainScreanProfile;