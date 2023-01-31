import styles from './PartFour.module.css';

import professor01 from '../../assets/images/professor01.jpg';
import professor02 from '../../assets/images/professor02.jpg';
import professor033 from '../../assets/images/professor033.jpg';
import professor04 from '../../assets/images/professor04.jpg';

import { FaInstagram} from "react-icons/fa";


function PartFour() {
    return (
        <div className={styles.firstContainer4}>
            <div className={styles.secondContainer4}>

                <h1>Nossos Professores!</h1>

                <div className={styles.professorBlock}>
                    <img src={professor01} />
                    <h2>Rafael Maia, o “Rafa”</h2>
                </div>
                <div className={styles.professorBlock}>
                    <img src={professor02} />
                    <h2>Gabriel Vasconcellos, o “Biel”</h2>

                </div>
                <div className={styles.professorBlock}>
                    <img src={professor033} />
                    <h2>Lucas Guigues, o “Curió”</h2>

                </div>
                <div className={styles.professorBlock}>
                    <img src={professor04} />
                    <h2>João Felipe Amaral, o “João”</h2>

                </div>

            </div>
        </div>

    )
}

export default PartFour