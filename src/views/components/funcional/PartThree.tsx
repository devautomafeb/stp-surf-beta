import styles from './PartThree.module.css';

import logo from "../../../assets/images/Logo.png";
import aulao from '../../../assets/images/Aulao.mp4';

function PartThree(){
    return(
        <div className={styles.firstContainer3}>
                <div className={styles.secondContainer3}>
                    <h1><img src={logo} /></h1>
                    <video width="75%" height="75%" controls>
                        <source src={aulao}></source>
                    </video>
                </div>
            </div>
    )
}

export default PartThree