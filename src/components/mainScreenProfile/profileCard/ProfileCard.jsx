import styles from './ProfileCard.module.scss';
import userImg from '../../../img/user/avatar.png';
import userCrown from '../../../img/user/crown.png';
import Menu from '../../../img/user/main-menu.png';
import Book from '../../../img/user/open-book.png';
import Rating from '../../../img/user/rating.png';
import Shop from '../../../img/user/shopping-cart.png';
import Test from '../../../img/user/test.png';
import Trophy from '../../../img/user/trophy.png';
import Profile from '../../../img/user/user.png';


const ProfileCard = () => {

    return (
        <div className={styles.profileWrap}>
            <div className={styles.userInfo}>
                <img src={userImg} alt="User Avatar" />
                <p className={styles.userName}>Мария Иванова</p>
                <p className={styles.userPosition}>официант</p>
            </div>
            <div className={styles.userPointInfo}>
                <div className={styles.userLv}>1 level</div>
                <div className={styles.userPoint}>
                    <img src={userCrown} alt="Crown" />
                    <p>1346</p>
                </div>
            </div>
            <div className={styles.userBtnWrap}>
                <button>
                    <div className={styles.imgWrap}>
                        <img src={Menu} alt="Menu" />
                    </div>
                    Main
                </button>
                <button>
                    <div className={styles.imgWrap}>
                        <img src={Profile} alt="Profile" />
                    </div>
                    Profile
                </button>
                <button>
                    <div className={styles.imgWrap}>
                        <img src={Trophy} alt="Achievement" />
                    </div>
                    Achievement
                </button>
                <button>
                    <div className={styles.imgWrap}>
                        <img src={Rating} alt="Rating" />
                    </div>
                    Rating
                </button>
                <button>
                    <div className={styles.imgWrap}>
                        <img src={Test} alt="Test" />
                    </div>
                    Testing
                </button>
                <button>
                    <div className={styles.imgWrap}>
                        <img src={Book} alt="Library" />
                    </div>
                    Library
                </button>
                <button>
                    <div className={styles.imgWrap}>
                        <img src={Shop} alt="Shop" />
                    </div>
                    Shop
                </button>
            </div>
        </div>
    )
}

export default ProfileCard;