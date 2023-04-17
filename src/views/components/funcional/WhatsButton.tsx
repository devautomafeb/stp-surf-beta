import { FaWhatsapp } from "react-icons/fa"

import styles from './WhatsButton.module.css';

function WhatsButton() {
    return (
        <div>
            <a href='https://wa.me/message/WVFWSTB6MIIRO1'>
                <div className={styles.whatsapp}>

                    <h1><FaWhatsapp /></h1>
                </div>
            </a>
        </div>
    )
}

export default WhatsButton