import logo from "../../assets/images/Logo.png";

import styles from './Choose.module.css';

import { Link } from 'react-router-dom';

function Choose() {

    return (
        <div className={styles.firstChoose}>
            <div className={styles.secondChoose}>
                <div><h1>  </h1></div>
                <Link to='/surf'>
                    <div id={styles.surf}>

                    </div>
                </Link>

                <img src={logo} />
                
                <Link to='/arena'>
                    <div id={styles.arena}>


                    </div>
                </Link>
            </div>
        </div>
    )

}

export default Choose

