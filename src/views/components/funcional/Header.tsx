import styles from './Header.module.css';

import { FaInstagram, FaFacebookF, FaRunning, FaArrowRight, FaArrowCircleRight } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import logo from "../../../assets/images/arenaLogo01.png";

import { Link } from 'react-router-dom';

function Header() {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.social}>
                    <ul>
                        <a href='https://www.instagram.com/arena.stp/'><li><FaInstagram /></li></a>
                        <li><FaFacebookF /></li>
                        <li><MdEmail /></li>
                    </ul>
                </div>

                <div className={styles.logo}>
                    <img src={logo} />
                </div>

                <div className={styles.tools}>
                    <ul>
                        <Link to='/surf'>
                        <FaArrowCircleRight size={'1.2rem'} color={'#1e4f61'} />
                            <li>Surf</li>
                        </Link>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Header