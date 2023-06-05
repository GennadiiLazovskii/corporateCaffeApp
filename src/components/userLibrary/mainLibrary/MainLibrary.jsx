import BtnLibrary from '../btnLibrary/btnLibrary';
import styles from './MainLibrary.module.scss';
import Coffee from '../../../img/libraryImg/coffee.jpeg';
import Clock from '../../../img/libraryImg/clock.png';

const MainLibrary = () => {
    return (
        <div className={styles.mainLibrary}>
            <BtnLibrary />
            <div className={styles.mainLibraryWrap}>
                <div className={styles.mainLibraryItem}>
                    <div className={styles.mainLibraryDescr}>
                        <div className={styles.mainLibraryText}>
                            <p>Types of roasting
                                coffee beans</p>
                        </div>
                        <div className={styles.mainLibraryTime}>
                            <div className={styles.mainLibraryTimeWrap}>
                                <img src={Clock} alt="Clock" />
                                <p>5 minutes</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.mainLibraryImg}>
                        <img src={Coffee} alt="Coffee" />
                    </div>
                </div>
                <div className={styles.mainLibraryItem}>
                    <div className={styles.mainLibraryDescr}>
                        <div className={styles.mainLibraryText}>
                            <p>Types of roasting
                                coffee beans</p>
                        </div>
                        <div className={styles.mainLibraryTime}>
                            <div className={styles.mainLibraryTimeWrap}>
                                <img src={Clock} alt="Clock" />
                                <p>5 minutes</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.mainLibraryImg}>
                        <img src={Coffee} alt="Coffee" />
                    </div>
                </div>
                <div className={styles.mainLibraryItem}>
                    <div className={styles.mainLibraryDescr}>
                        <div className={styles.mainLibraryText}>
                            <p>Types of roasting
                                coffee beans</p>
                        </div>
                        <div className={styles.mainLibraryTime}>
                            <div className={styles.mainLibraryTimeWrap}>
                                <img src={Clock} alt="Clock" />
                                <p>5 minutes</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.mainLibraryImg}>
                        <img src={Coffee} alt="Coffee" />
                    </div>
                </div>
                <div className={styles.mainLibraryItem}>
                    <div className={styles.mainLibraryDescr}>
                        <div className={styles.mainLibraryText}>
                            <p>Types of roasting
                                coffee beans</p>
                        </div>
                        <div className={styles.mainLibraryTime}>
                            <div className={styles.mainLibraryTimeWrap}>
                                <img src={Clock} alt="Clock" />
                                <p>5 minutes</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.mainLibraryImg}>
                        <img src={Coffee} alt="Coffee" />
                    </div>
                </div>
                <div className={styles.mainLibraryItem}>
                    <div className={styles.mainLibraryDescr}>
                        <div className={styles.mainLibraryText}>
                            <p>Types of roasting
                                coffee beans</p>
                        </div>
                        <div className={styles.mainLibraryTime}>
                            <div className={styles.mainLibraryTimeWrap}>
                                <img src={Clock} alt="Clock" />
                                <p>5 minutes</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.mainLibraryImg}>
                        <img src={Coffee} alt="Coffee" />
                    </div>
                </div>
                <div className={styles.mainLibraryItem}>
                    <div className={styles.mainLibraryDescr}>
                        <div className={styles.mainLibraryText}>
                            <p>Types of roasting
                                coffee beans</p>
                        </div>
                        <div className={styles.mainLibraryTime}>
                            <div className={styles.mainLibraryTimeWrap}>
                                <img src={Clock} alt="Clock" />
                                <p>5 minutes</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.mainLibraryImg}>
                        <img src={Coffee} alt="Coffee" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainLibrary;