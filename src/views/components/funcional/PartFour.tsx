import styles from './PartFour.module.css';

import professor01 from '../../../assets/images/prof01.jpg';
import professor02 from '../../../assets/images/prof02.jpg';
import professor033 from '../../../assets/images/prof03.jpg';
import professor04 from '../../../assets/images/prof04.jpg';

import { FaInstagram} from "react-icons/fa";


function PartFour() {
    return (
        <div className={styles.firstContainer4}>
            <div className={styles.secondContainer4}>

                <h1>Nossos Professores!</h1>

                <div className={styles.professorBlock}>
                    <img src={professor01} />
                    <h2>Rafael Pires</h2>
                </div>
                <div className={styles.professorBlock}>
                    <img src={professor02} />
                    <h2>Meicke Reichert</h2>

                </div>
                <div className={styles.professorBlock}>
                    <img src={professor033} />
                    <h2>Diego Mesquita </h2>

                </div>
                <div className={styles.professorBlock}>
                    <img src={professor04} />
                    <h2>Rafaella Missagia</h2>

                </div>

            </div>
        </div>

    )
}

export default PartFour