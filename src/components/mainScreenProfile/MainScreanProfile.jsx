import styles from './MainScreanProfile.module.scss';
import UserAchievements from './userAchievements/UserAchievements';
import ProfileCard from './profileCard/ProfileCard';
import UserGoal from './userGoal/UserGoal';
import UserTotalKarma from './userTotalKarma/UserTotalKarma';
import UserWishes from './userWishes/UserWishes';
import DescrActiveTask from './descrActiveTask/DescrActiveTask';
import ContestMonth from './contestMonth/ContestMonth';
import { modalReducer } from '../reducers/modalReducer';
import { useReducer } from 'react'
import { showContestMonth, showDescrActiveTask, hideModal } from '../actions/modalActions';

const MainScreanProfile = () => {

    const initialState = {
        openContestMonth: false,
        openDescrActiveTask: false,
    }

    const [state, dispatch] = useReducer(modalReducer, initialState);

    const handleShowContestMonth = () => {
        dispatch(showContestMonth());
    }

    const handleShowDescrActiveTask = () => {
        dispatch(showDescrActiveTask());
    }

    const handleHideModal = () => {
        dispatch(hideModal());
    }
    

    return (
        <div className={styles.mainScreanProfile}>
            <ProfileCard/>
            <div className={styles.mainScreanProfileCenter}>
                <UserGoal />
                <UserAchievements handleShowDescrActiveTask={handleShowDescrActiveTask} />
            </div>
            <div className={styles.mainScreanProfileRight}>
                <UserTotalKarma handleShowContestMonth={handleShowContestMonth} />
                <UserWishes />
            </div>
            {state.openContestMonth && (
                <div className={styles.contestMonthContainer}>
                    <div className={styles.blurBackground} />
                    <div className={styles.contestMonth}>
                        <ContestMonth handleHideModal={handleHideModal} />
                    </div>
                </div>
            )}
            {state.openDescrActiveTask && (
                <div className={styles.contestMonthContainer}>
                    <div className={styles.blurBackground} />
                    <div className={styles.contestMonth}>
                        <DescrActiveTask handleHideModal={handleHideModal} />
                    </div>
                </div>
            )}
        </div>
    );
};

export default MainScreanProfile;
