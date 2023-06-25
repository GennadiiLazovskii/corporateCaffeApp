import styles from "./UserWishes.module.scss";
import Tshirt from "../../../img/user/t-shirt.png";
import Ellipse from "../../../img/user/Ellipse.png";
import Crown from "../../../img/user/crown.png";
import UserWishesProgres from "./userWishesProgres/userWishesProgres";

const UserWishes = ({ users }) => {
    
    const progress = users.map((user) => (user.money / 200) * 100);

    return (
        <>
            {users.map((user) => (
                <div className={styles.userWishes} key={user.id}>
                    <div>
                        <p>Collecting for a T-shirt</p>
                    </div>
                    <div className={styles.userWishesImg}>
                        <div className={styles.userWishesImgItem}>
                            <img className={styles.userWishesImgItemAnimated} src={Tshirt} alt="T-shirt" />
                        </div>
                        <div className={styles.userWishesImgItem}>
                            <img src={Ellipse} alt="T-shirt shadow" />
                        </div>
                    </div>
                    <div className={styles.userWishesProgresWrap}>
                        <div className={styles.userWishesProgresWrapImg}>
                            <img src={Crown} alt="Crown" />
                        </div>
                        <div className={styles.userWishesProgresCollected}>
                            <div className={styles.userWishesProgresCollectedItem}>
                                <p>Collected</p>
                                <p>{`${user.money}/200`}</p>
                            </div>
                            <UserWishesProgres progress={progress} />
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
};

export default UserWishes;
