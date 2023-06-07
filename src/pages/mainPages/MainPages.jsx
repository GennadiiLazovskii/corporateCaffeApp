import MainScreanProfile from "../../components/mainScreenProfile/mainScreanProfile";
import UserProfileScreean from "../../components/userProfileScreean/UserProfileScreean";
import styles from "./MainPages.module.scss";

const MainPages = () => {

    return (
        <div className={styles.MainPages}>
            <MainScreanProfile/>
            {/* <UserProfileScreean/> */}
        </div>
    );
};

export default MainPages;
