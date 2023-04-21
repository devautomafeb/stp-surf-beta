import styles from './PartThree.module.css';

import logo from "../../../assets/images/Logo.png";
import video01 from '../../../assets/images/video01.mp4';

function PartThree(){
    return(
        <div className={styles.firstContainer3}>
                <div className={styles.secondContainer3}>
                    <h1><img src={logo} /></h1>
                    <video width="75%" height="75%" controls>
                        <source src={video01}></source>
                    </video>
                </div>
            </div>
    )
}

export default PartThree