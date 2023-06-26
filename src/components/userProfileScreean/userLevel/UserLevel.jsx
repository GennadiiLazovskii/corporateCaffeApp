import styles from "./UserLevel.module.scss";
import UserWishesProgres from "../../mainScreenProfile/userWishes/userWishesProgres/UserWishesProgres.jsx";
import LvlOne from "../../../img/Lvl/Lvl-1.png";
import LvlTwo from "../../../img/Lvl/Lvl-2.png";
import LvlThree from "../../../img/Lvl/Lvl-3.png";
import LvlFour from "../../../img/Lvl/Lvl-4.png";
import { useSelector } from "react-redux";

const UserLevel = () => {

    const users = useSelector((state) => state.user.users);

    return (
        <>
            {users.map(user => (
                <div className={styles.userLevel} key={user.id}>
                    <div className={styles.userLevelImg}>
                        <img className={user.level === 1 ? styles.userLevelImgActive : ''} src={LvlOne} alt="level One" />
                        <img className={user.level === 2 ? styles.userLevelImgActive : ''} src={LvlTwo} alt="level Two" />
                        <img className={user.level === 3 ? styles.userLevelImgActive : ''} src={LvlThree} alt="level Three" />
                        <img className={user.level === 4 ? styles.userLevelImgActive : ''} src={LvlFour} alt="level Four" />
                    </div>
                    <div className={styles.userLevelNextLvl}>
                        <h2>To move to the second level you need:</h2>
                        <div className={styles.userLevelNextLvlDescr}>
                            <ul>
                                <li>Successfully pass the test</li>
                                <UserWishesProgres progress={user.moveNextLevelProcent.successfullyPassTest} />
                                <li>Brew 300 cups of coffee</li>
                                <UserWishesProgres progress={(user.moveNextLevelProcent.brew300CupsOfCoffee/300*100)} />
                                <li>Knock out 300 checks</li>
                                <UserWishesProgres progress={(user.moveNextLevelProcent.knockOut300Checks/300*100)} />
                            </ul>
                            <ul>
                                <li>Brew a cappuccino in 120 seconds</li>
                                <UserWishesProgres progress={(user.moveNextLevelProcent.brewCappuccinoIn120Seconds/120*100)} />
                                <li>The amount of the checks must exceed 200 thousand hryvnias</li>
                                <UserWishesProgres progress={(user.moveNextLevelProcent.amountOfChecksExceed200K/200000*100)} />
                            </ul>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
};

export default UserLevel;  
