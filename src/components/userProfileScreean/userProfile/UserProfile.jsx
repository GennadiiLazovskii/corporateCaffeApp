import styles from "./UserProfile.module.scss";
import Avatar from "../../../img/user/avatar.png";
import Crown from "../../../img/user/crown.png";
import Karma from "../../../img/user/karma.png";

const UserProfile = () => {
    return (
        <div className={styles.UserProfile}>
            <div className={styles.UserProfileWrap}>
                <div className={styles.UserProfileUser}>
                    <div className={styles.UserProfileDescr}>
                        <div className={styles.UserProfileDescrImg}>
                            <img src={Avatar} alt="Avatar" />
                        </div>
                        <div className={styles.UserProfileDescrUser}>
                            <div className={styles.UserProfileDescrUserName}>
                                <p>Мария Иванова, 21 год</p>
                            </div>
                            <div className={styles.UserProfileDescrUserPosition}>
                                <p>waiter</p>
                                <div className={styles.UserProfileDescrUserPositionLvl}>
                                    <p>1 Lvl</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.line}></div>
                    <div className={styles.UserProfileMoney}>
                        <p>All the money</p>
                        <div className={styles.UserProfileMoneyDescr}>
                            <div className={styles.UserProfileMoneyItem}>
                                <img src={Crown} alt="Crown" />
                                <p>1346</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.line}></div>
                    <div className={styles.UserProfileKarma}>
                        <h2>Karma</h2>
                        <div className={styles.UserProfileKarmaItem}>
                            <div className={styles.UserProfileKarmaItMouth}>
                                <img src={Karma} alt="Karma" />
                                <p>4567</p>
                            </div>
                            <div className={styles.UserProfileKarmaItMouth}>
                                <img src={Karma} alt="Karma" />
                                <p>17912</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.UserProfileSkills}>
                    <div className={styles.UserProfileSkillsText}>
                        <h2>Place of work:</h2>
                        <p>Kyiv, st.Prospekt, 23</p>
                    </div>
                    <div className={styles.UserProfileSkillsText}>
                        <h2>Hobbies:</h2>
                        <p>Cats and football</p>
                    </div>
                    <div className={styles.UserProfileSkillsText}>
                        <h2>Dream:</h2>
                        <p>See Rome</p>
                    </div>
                    <div className={styles.UserProfileSkillsText}>
                        <h2>Languages:</h2>
                        <p>English, French</p>
                    </div>
                    <div className={styles.UserProfileSkillsText}>
                        <h2>Want in 5 years:</h2>
                        <p>Living in Paris</p>
                    </div>
                    <div className={styles.UserProfileSkillsText}>
                        <h2>Best in me:</h2>
                        <p>Smile</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;
