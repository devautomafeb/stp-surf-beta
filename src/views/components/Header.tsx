import styles from './Header.module.css';

import { FaInstagram, FaFacebookF, FaWhatsapp } from "react-icons/fa";
import { MdEmail, MdSurfing } from "react-icons/md";
import logo from "../../assets/images/Logo.png";

function Header() {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.social}>
                    <ul>
                        <li><FaInstagram /></li>
                        <li><FaFacebookF /></li>
                        <li><FaWhatsapp /></li>
                        <li><MdEmail /></li>
                    </ul>
                </div>

                <div className={styles.logo}>
                    <img src={logo} />
                </div>

                <div className={styles.tools}>
                    <ul>
                        <li>Agendar</li>
                        <MdSurfing size={'2rem'} color={'#1e4f61'}/>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Header