import styles from './MainPages.module.scss';
import MainScreanProfile from '../../components/mainScreenProfile/mainScreanProfile';
import UserProfileScreean from '../../components/userProfileScreean/UserProfileScreean';
import { useState } from 'react';

const MainPages = () => {

    const [open, setOpen] = useState(false);
    const [close, setClose] = useState(true);

    const showProfileScreean = () => {
        setOpen(true)
        setClose(false)
    }

    return (
        <div className={styles.MainPages}>
            {close && <MainScreanProfile showProfileScreean={showProfileScreean}/>}
            {open && <UserProfileScreean/>}
        </div>
    )
}

export default MainPages;
