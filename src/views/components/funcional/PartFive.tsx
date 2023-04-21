import styles from './PartFive.module.css';

import logo from "../../../assets/images/Logo.png";
import func2 from '../../../assets/images/func2.jpg';
import beach2 from '../../../assets/images/beach2.jpg';
import muay2 from '../../../assets/images/muay2.jpg';
import yoga2 from '../../../assets/images/yoga2.jpg';

import { FaMoneyBillWave, FaRegCalendarAlt} from "react-icons/fa";


function PartFive() {
    return (
        <div className={styles.firstContainer5}>
            <div className={styles.secondContainer5}>
                <h1><FaRegCalendarAlt/> & <FaMoneyBillWave/> Horários e Preços:</h1>
                
            <div id={styles.cards}>
                    <a href='https://www.instagram.com/stories/highlights/17880827579836310/'>
                        <img src={func2} />
                    </a>

                    <a href='https://www.instagram.com/stories/highlights/18211175716189253/'>
                        <img src={muay2} />
                    </a>
                    <a href='https://www.instagram.com/stories/highlights/17960724710300579/'>
                        <img src={yoga2} />
                    </a>
                    <a href='https://www.instagram.com/stories/highlights/17992910038883219/'>
                        <img src={beach2} />
                    </a>
                </div>

            </div>
        </div>
    )
}

export default PartFive