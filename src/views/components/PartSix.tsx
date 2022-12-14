import styles from './PartSix.module.css';


import PartSeven from '../components/PartSeven';
import local from '../../assets/images/local.png';


function PartSix(){
    return(
        <div className={styles.firstContainer6}>
                <div className={styles.secondContainer6}>
                    <div className={styles.informations}>
                        <img src={local} />

                        <h2><a href={"https://www.google.com/maps/place/STP+SURF+SCHOOL/@-23.0123575,-43.3216017,15z/data=!4m12!1m6!3m5!1s0x0:0x6c0df6fb06314508!2sSTP+SURF+SCHOOL!8m2!3d-23.0123575!4d-43.3216017!3m4!1s0x0:0x6c0df6fb06314508!8m2!3d-23.0123575!4d-43.3216017"}> Entre o posto 3 e o posto 4, bem em frente ao hotel Windsor.</a>
                        </h2>
                    </div>
                    <PartSeven />
                </div>
            </div>
    )
}

export default PartSix