import styles from "./UserProfile.module.scss";
import Crown from "../../../img/user/crown.png";
import Karma from "../../../img/user/karma.png";

const UserProfile = ({ users }) => {
    return (
        <>
            {users.map((user) => (
                <div className={styles.UserProfile} key={user.id}>
                    <div className={styles.UserProfileWrap}>
                        <div className={styles.UserProfileUser}>
                            <div className={styles.UserProfileDescr}>
                                <div className={styles.UserProfileDescrImg}>
                                    <img src={user.avatar} alt="Avatar" />
                                </div>
                                <div className={styles.UserProfileDescrUser}>
                                    <div className={styles.UserProfileDescrUserName}>
                                        <p>{`${user.FirstName} ${user.LastName}`}</p>
                                    </div>
                                    <div className={styles.UserProfileDescrUserPosition}>
                                        <p>{user.jobTitle}</p>
                                        <div className={styles.UserProfileDescrUserPositionLvl}>
                                            <p>{`${user.level} Lvl`}</p>
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
                                        <p>{user.money}</p>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.line}></div>
                            <div className={styles.UserProfileKarma}>
                                <h2>Karma</h2>
                                <div className={styles.UserProfileKarmaItem}>
                                    <div className={styles.UserProfileKarmaItMouth}>
                                        <img src={Karma} alt="Karma" />
                                        <p>{user.karma.value}</p>
                                    </div>
                                    <div className={styles.UserProfileKarmaItMouth}>
                                        <img src={Karma} alt="Karma" />
                                        <p>{user.karma.totalKarma}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.UserProfileSkills}>
                            <div className={styles.UserProfileSkillsText}>
                                <h2>Place of work:</h2>
                                <p>{user.placeOfWork}</p>
                            </div>
                            <div className={styles.UserProfileSkillsText}>
                                <h2>Hobbies:</h2>
                                <p>{user.hobbies.join(', ')}</p>
                            </div>
                            <div className={styles.UserProfileSkillsText}>
                                <h2>Dream:</h2>
                                <p>{user.dream}</p>
                            </div>
                            <div className={styles.UserProfileSkillsText}>
                                <h2>Languages:</h2>
                                <p>{user.languages.join(', ')}</p>
                            </div>
                            <div className={styles.UserProfileSkillsText}>
                                <h2>Want in 5 years:</h2>
                                <p>{user.wantIn5Years}</p>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
};

export default UserProfile;
