import logao from "../../assets/images/logao.png";

import styles from './Choose.module.css';

import { Link } from 'react-router-dom';

function Choose() {

    return (
        <div className={styles.firstChoose}>
            <div className={styles.secondChoose}>
                <div><h1>  </h1></div>
                <Link to='/surf'>
                    <div>
                        <h2>STP Surf School</h2>
                        <div id={styles.surf}>

                        </div>

                    </div>
                </Link>

                <img src={logao} />

                <Link to='/arena'>
                    <div>
                        <h2>Arena STP</h2>
                        <div id={styles.arena}>

                        </div>
                    </div>
                </Link>
            </div>
        </div>
    )

}

export default Choose

