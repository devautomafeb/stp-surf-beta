import styles from './Footer.module.css';

import { FaInstagram, FaFacebookF, FaWhatsapp } from "react-icons/fa";
import { MdEmail, MdSurfing } from "react-icons/md";
import logo from "../../assets/images/Logo.png";

function Footer() {
    return (
        <div className={styles.footer} >
                <img src={logo} />
        </div>
    )

}

export default Footer