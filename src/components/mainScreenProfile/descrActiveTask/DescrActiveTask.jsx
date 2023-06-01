import styles from "./DescrActiveTask.module.scss";
import UserAchievements from "../userAchievements/UserAchievements";
import ButtonExit from "../../buttonExit/ButtonExit";

const DescrActiveTask = ({hideModal}) => {
    return (
        <div className={styles.DescrActiveTaskWrap}>
            <ButtonExit hideModal={hideModal}/>
            <UserAchievements />
            <div className={styles.DescrActiveTaskDescr}>
                <p>
                    In the same way, the implementation of the planned targets indicates
                    the possibility of withdrawing current assets. Also, independent
                    states are nothing more than the quintessence of the victory of
                    marketing over reason and should be turned into a laughing stock,
                    although their very existence brings undoubted benefits to society.
                    And also interactive prototypes are indicated as contenders for the
                    role of key factors.
                </p>
            </div>
        </div>
    );
};

export default DescrActiveTask;
