import { FaWhatsapp } from "react-icons/fa"

import styles from './WhatsButton.module.css';
import { FontH1, WhatsappContainer } from "./style";

function WhatsButton() {
    return (
        <div>
            <a href='https://wa.me/message/WVFWSTB6MIIRO1'>
                <WhatsappContainer>

                    <FontH1><FaWhatsapp /></FontH1>
                </WhatsappContainer>
            </a>
        </div>
    )
}

export default WhatsButton