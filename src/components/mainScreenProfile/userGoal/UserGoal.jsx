import CustomButton from '../../customButton/CustomButton.jsx';
import styles from './UserGoal.module.scss';

const UserGoal = () => {

    return(
        <div className={styles.userGoalWrap}>
            <div className={styles.userGoalItem}>
                <h2>Goal</h2>
                    <div className={styles.userGoaBtnItem}>
                        <CustomButton title={"Active"} onClick={() => {}}/>
                        <CustomButton title={"Archival"} onClick={() => {}}/>
                        <CustomButton title={"New"} onClick={() => {}}/>
                    </div>
            </div>
        </div>
    )
}

export default UserGoal;