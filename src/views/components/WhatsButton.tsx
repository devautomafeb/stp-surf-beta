import { FaWhatsapp } from "react-icons/fa"

import styles from './WhatsButton.module.css';

function WhatsButton() {
    return (
        <div className={styles.whatsapp}>
                <h1><FaWhatsapp /></h1>
        </div>
    )
}

export default WhatsButton