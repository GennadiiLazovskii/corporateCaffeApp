import BtnLibrary from '../btnLibrary/btnLibrary';
import styles from './MainLibrary.module.scss';
import Clock from '../../../img/libraryImg/clock.png';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const MainLibrary = () => {

    const libraryItems = useSelector(state => state.library.items);

    return (
        <div className={styles.mainLibrary}>
            <BtnLibrary />
            <div className={styles.mainLibraryWrap}>
                {libraryItems.map(item => (
                    <div key={item.id} className={styles.mainLibraryItem}>
                        <div className={styles.mainLibraryDescr}>
                            <Link to={`/library/description/${item.id}`} className={styles.linkSt}>
                                <div className={styles.mainLibraryText}>
                                    <p>{item.libraryDescrHeader}</p>
                                </div>
                            </Link>
                            <div className={styles.mainLibraryTime}>
                                <div className={styles.mainLibraryTimeWrap}>
                                    <img src={Clock} alt="Clock" />
                                    <p>{item.libraryTime} minutes</p>
                                </div>
                            </div>
                        </div>
                        <div className={styles.mainLibraryImg}>
                            <img src={item.libraryImage1} alt={`Image_${item.id}`} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default MainLibrary;