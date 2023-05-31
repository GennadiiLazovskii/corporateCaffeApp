import ButtonExit from "../../buttonExit/ButtonExit"
import styles from "./ContestMonth.module.scss"
import Karma from "../../../img/user/karma.png"
import HeroPrize from "../../../img/Prize/airpoods.png";
import TeamPrize from "../../../img/Prize/popcorn.png";

const ContestMonth = ({hideContestMonth}) => {
    return (
        <div className={styles.contestMonth}>
            <ButtonExit hideContestMonth={hideContestMonth}/>
            <div className={styles.contestMonthHeader}>
                <img src={Karma} alt="Karma" />
                <p>Prize of the month</p>
            </div>
            <div className={styles.contestMonthWrapPrize}>
                <div className={styles.contestMonthWrapPrizeItem}>
                    <h2>Hero of the month</h2>
                    <p>AirPoods 3</p>
                    <img src={HeroPrize} alt="Hero Prize" />
                </div>
                <div className={styles.contestMonthWrapPrizeItem}>
                    <h2>Team of the month</h2>
                    <p>Collective trip to the cinema</p>
                    <img src={TeamPrize} alt="Team Prize" />
                </div>
            </div>
        </div>
    )
}

export default ContestMonth
