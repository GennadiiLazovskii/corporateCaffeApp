import { Link } from "react-router-dom";
import styles from "./ItemLibraryDescr.module.scss";
import Back from "../../../img/header/arowLeft.png";
import Coffee1 from "../../../img/libraryImg/1coffee.jpeg";
import Coffee2 from "../../../img/libraryImg/2coffee.png";

const ItemLibraryDescr = () => {
    return (
        <div className={styles.itemLibraryDescr}>
            <div className={styles.itemLibraryDescrBack}>
                <Link to='/library'>
                    <img src={Back} alt="Back" />
                </Link>
            </div>
            <div className={styles.itemLibraryDescrHeader}>
                <p>Types of roasting coffee beans</p>
            </div>
            <div className={styles.itemLibraryDescrTime}>
                <p>Reading time: 5 minutes</p>
            </div>
            <div className={styles.itemLibraryDescrText}>
                <p>
                    Roasting is one of the most important steps in coffee production. It
                    consists in the heat treatment of coffee beans, due to which coffee
                    acquires a certain taste and aroma. During roasting, a large number of
                    chemical reactions occur, leading to the formation of complex
                    compounds that form the coffee potential. Depending on the
                    temperature, different compounds can be formed. By controlling the
                    different stages of roasting, you can adjust the taste of the coffee.
                </p>
            </div>
            <div className={styles.itemLibraryDescrImg}>
                <img src={Coffee1} alt="Coffee1" />
                <img src={Coffee2} alt="Coffee2" />
            </div>
        </div>
    );
};

export default ItemLibraryDescr;
