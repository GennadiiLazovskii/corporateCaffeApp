import styles from './MainScreanProfile.module.scss';
import UserAchievements from './userAchievements/UserAchievements';
import ProfileCard from './profileCard/ProfileCard.jsx';
import UserGoal from './userGoal/UserGoal';
import UserTotalKarma from './userTotalKarma/UserTotalKarma';
import UserWishes from './userWishes/UserWishes';
import DescrActiveTask from './descrActiveTask/DescrActiveTask';
import ContestMonth from './contestMonth/ContestMonth';
import { useState } from 'react'

const MainScreanProfile = () => {

    const [openContestMonth, setOpenContestMonth] = useState(false);

    const showContestMonth = () => {
        setOpenContestMonth(true);
    };

    const hideContestMonth = () => {
        setOpenContestMonth(false)
    }

    return (
        <div className={styles.mainScreanProfile}>
            <ProfileCard />
            <div className={styles.mainScreanProfileCenter}>
                <UserGoal />
                <UserAchievements />
            </div>
            <div className={styles.mainScreanProfileRight}>
                <UserTotalKarma showContestMonth={showContestMonth} />
                <UserWishes />
            </div>
            {openContestMonth && (
                <div className={styles.contestMonthContainer}>
                    <div className={styles.blurBackground} />
                    <div className={styles.contestMonth}>
                        <ContestMonth hideContestMonth={hideContestMonth} />
                    </div>
                </div>
            )}
        </div>
    );
};

export default MainScreanProfile;