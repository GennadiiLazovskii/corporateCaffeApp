import styles from "./UserLevel.module.scss";
import UserWishesProgres from "../../mainScreenProfile/userWishes/userWishesProgres/UserWishesProgres.jsx";
import LvlOne from "../../../img/Lvl/Lvl-1.png";
import LvlTwo from "../../../img/Lvl/Lvl-2.png";
import LvlThree from "../../../img/Lvl/Lvl-3.png";
import LvlFour from "../../../img/Lvl/Lvl-4.png";

const UserLevel = () => {
    const progres = [
        {
            test: {
                progresProc: 30
            },
            cups: {
                progresProc: 40
            },
            checks: {
                progresProc: 23
            },
            cappuccino: {
                progresProc: 50
            },
            amountChecks: {
                progresProc: 67
            },
        }
    ];

    return (
        <div className={styles.userLevel}>
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
                        <UserWishesProgres progress={progres[0].test.progresProc} />
                        <li>Brew 300 cups of coffee</li>
                        <UserWishesProgres progress={progres[0].cups.progresProc} />
                        <li>Knock out 300 checks</li>
                        <UserWishesProgres progress={progres[0].checks.progresProc} />
                    </ul>
                    <ul>
                        <li>Brew a cappuccino in 120 seconds</li>
                        <UserWishesProgres progress={progres[0].cappuccino.progresProc} />
                        <li>The amount of the checks must exceed 700 thousand hryvnias</li>
                        <UserWishesProgres progress={progres[0].amountChecks.progresProc} />
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default UserLevel;  
