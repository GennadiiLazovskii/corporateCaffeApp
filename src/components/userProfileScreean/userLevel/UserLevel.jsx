import styles from "./UserLevel.module.scss";
import UserWishesProgres from "../../mainScreenProfile/userWishes/userWishesProgres/UserWishesProgres.jsx";
import LvlOne from "../../../img/Lvl/Lvl-1.png";
import LvlTwo from "../../../img/Lvl/Lvl-2.png";
import LvlThree from "../../../img/Lvl/Lvl-3.png";
import LvlFour from "../../../img/Lvl/Lvl-4.png";

const UserLevel = ({ users }) => {

    return (
        <>
            {users.map(user => (
                <div className={styles.userLevel} key={user.id}>
                    <div className={styles.userLevelImg}>
                        <img src={LvlOne} alt="level One" />
                        <img src={LvlTwo} alt="level Two" />
                        <img src={LvlThree} alt="level Three" />
                        <img src={LvlFour} alt="level Four" />
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
