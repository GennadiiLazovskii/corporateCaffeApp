import { useReducer } from "react";
import { cardProfileReducer } from "../../components/reducers/cardProfileReducer";
import {
    showMain,
    showProfile,
} from "../../components/actions/actionCardProfile";
import MainScreanProfile from "../../components/mainScreenProfile/mainScreanProfile";
import UserProfileScreean from "../../components/userProfileScreean/UserProfileScreean";
import styles from "./MainPages.module.scss";
import MainLibrary from "../../components/userLibrary/mainLibrary/MainLibrary";

const MainPages = () => {

    const initialState = {
        openMain: true,
        openProfile: false,
    };

    const [state, dispatch] = useReducer(cardProfileReducer, initialState);

    const handleShowMain = () => {
        dispatch(showMain());
    };

    const handleShowProfile = () => {
        dispatch(showProfile());
    };


    console.log(state);

    return (
        <div className={styles.MainPages}>
            {state.openMain && (
                <MainScreanProfile
                    handleShowMain={handleShowMain}
                    handleShowProfile={handleShowProfile}
                />
            )}
            {/* {state.openProfile && <UserProfileScreean />} */}
            {<MainLibrary/>}
        </div>
    );
};

export default MainPages;
