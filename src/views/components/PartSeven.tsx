import styles from './PartSeven.module.css';

import logo from "../../assets/images/Logo.png";

function PartSeven() {
    return (
        <div className={styles.partSevenForm}>

            <form>
                <img src={logo} />

                <label>Nome</label>
                <input type="text" placeholder="Nome" id="username" />

                <label>Email</label>
                <input type="text" placeholder="Email" id="email" />

                <label>Mensagem</label>
                <textarea placeholder="..."/>

                <button>Enviar</button>

            </form>

        </div>
    )

}

export default PartSeven