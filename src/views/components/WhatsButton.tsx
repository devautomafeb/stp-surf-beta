import { FaWhatsapp } from "react-icons/fa"

import styles from './WhatsButton.module.css';

function WhatsButton() {
    return (
        <div>
            <a href='https://l.instagram.com/?u=https%3A%2F%2Fwa.me%2Fmessage%2FWVFWSTB6MIIRO1&e=ATMewb2BJ1_n7rcHerifrsYgnt7xPOAbBFCDNY0yFz3OBdLQbM2OwCRiZnD2yOVhM-8Ef88Q_zUitkOK&s=1'>
                <div className={styles.whatsapp}>

                    <h1><FaWhatsapp /></h1>
                </div>
            </a>
        </div>
    )
}

export default WhatsButton