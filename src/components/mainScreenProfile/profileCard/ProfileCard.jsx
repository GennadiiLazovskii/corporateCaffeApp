import styles from "./ProfileCard.module.scss";
import userCrown from "../../../img/user/crown.png";
import Menu from "../../../img/user/main-menu.png";
import Book from "../../../img/user/open-book.png";
import Rating from "../../../img/user/rating.png";
import Shop from "../../../img/user/shopping-cart.png";
import Test from "../../../img/user/test.png";
import Trophy from "../../../img/user/trophy.png";
import Profile from "../../../img/user/user.png";
import Avatar from "../../../img/user/Avatar.png";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setProfileName } from "../../../features/header/headerSlice";

const ProfileCard = ({ users }) => {

    const dispatch = useDispatch();

    return (
        <>
            {users.map(user => (
                <div className={styles.profileWrap} key={user.id}>
                    <div className={styles.userInfo}>
                        <img src={user.avatar.length === 0 ? Avatar : user.avatar} alt="User Avatar" />
                        <p className={styles.userName}>{`${user.FirstName} ${user.LastName}`}</p>
                        <p className={styles.userPosition}>{user.jobTitle}</p>
                    </div>
                    <div className={styles.userPointInfo}>
                        <div className={styles.userLv}>{`${user.level} Level`}</div>
                        <div className={styles.userPoint}>
                            <img src={userCrown} alt="Crown" />
                            <p>{user.money}</p>
                        </div>
                    </div>
                    <div className={styles.userBtnWrap}>
                        <Link to="/" className={styles.linkBtn}>
                            <button onClick={() => dispatch(setProfileName('Main'))}>
                                <div className={styles.imgWrap}>
                                    <img src={Menu} alt="Menu" />
                                </div>
                                <p>Main</p>
                            </button>
                        </Link>
                        <Link to="/profile" className={styles.linkBtn}>
                            <button onClick={() => dispatch(setProfileName('Profile'))}>
                                <div className={styles.imgWrap}>
                                    <img src={Profile} alt="Profile" />
                                </div>
                                <p>Profile</p>
                            </button>
                        </Link>
                        <button onClick={() => dispatch(setProfileName('Achievement'))}>
                            <div className={styles.imgWrap}>
                                <img src={Trophy} alt="Achievement" />
                            </div>
                            <p>Achievement</p>
                        </button>
                        <button onClick={() => dispatch(setProfileName('Rating'))}>
                            <div className={styles.imgWrap}>
                                <img src={Rating} alt="Rating" />
                            </div>
                            <p>Rating</p>
                        </button>
                        <button onClick={() => dispatch(setProfileName('Test'))}>
                            <div className={styles.imgWrap}>
                                <img src={Test} alt="Test" />
                            </div>
                            <p>Testing</p>
                        </button>
                        <Link to="/library" className={styles.linkBtn}>
                            <button onClick={() => dispatch(setProfileName('Library'))}>
                                <div className={styles.imgWrap}>
                                    <img src={Book} alt="Library" />
                                </div>
                                <p>Library</p>
                            </button>
                        </Link >
                        <Link to="/shop" className={styles.linkBtn} >
                            <button onClick={() => dispatch(setProfileName('Shop'))}>
                                <div className={styles.imgWrap}>
                                    <img src={Shop} alt="Shop" />
                                </div>
                                <p>Shop</p>
                            </button>
                        </Link>
                    </div>
                </div>
            ))}
        </>
    );
};

export default ProfileCard;
