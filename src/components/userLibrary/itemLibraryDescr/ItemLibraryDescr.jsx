import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import styles from './ItemLibraryDescr.module.scss';
import Back from "../../../img/header/arowLeft.png";

const ItemLibraryDescr = () => {
    const { id } = useParams();
    const libraryItems = useSelector(state => state.library.items);

    const selectedLibraryItem = libraryItems.find(item => item.id === parseInt(id));

    if (!selectedLibraryItem) {
        return <p>Item not found</p>;
    }

    return (
        <div className={styles.itemLibraryDescr}>
            <div className={styles.itemLibraryDescrBack}>
                <Link to='/library'>
                    <img src={Back} alt="Back" />
                </Link>
            </div>
            <div key={selectedLibraryItem.id}>
                <div className={styles.itemLibraryDescrHeader}>
                    <p>{selectedLibraryItem.libraryDescrHeader}</p>
                </div>
                <div className={styles.itemLibraryDescrTime}>
                    <p>Reading time: {selectedLibraryItem.libraryTime} minutes</p>
                </div>
                <div className={styles.itemLibraryDescrText}>
                    <p>{selectedLibraryItem.libraryDescription}</p>
                </div>
                <div className={styles.itemLibraryDescrImg}>
                    <img src={selectedLibraryItem.libraryImage1} alt={`Image1_${selectedLibraryItem.id}`} />
                    <img src={selectedLibraryItem.libraryImage2} alt={`Image2_${selectedLibraryItem.id}`} />
                </div>
            </div>
        </div>
    );
};

export default ItemLibraryDescr;
