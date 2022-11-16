import styles from './PartFive.module.css';

import logo from "../../assets/images/Logo.png";
import { FaMoneyBillWave, FaRegCalendarAlt} from "react-icons/fa";


function PartFive() {
    return (
        <div className={styles.firstContainer5}>
            <div className={styles.secondContainer5}>
                <div><h1>  </h1></div>
                <div id={styles.scheduleAvailabe}>
                    <h1><FaRegCalendarAlt />  Horários</h1>

                    <h2>Segundas e Quartas:</h2>
                    <h3>8:00 às 09:00</h3>
                    <h2>Terça, Quinta e Sexta:</h2>
                    <h3>6:30 às 07:30</h3>
                    <h3>8:00 às 09:00</h3>
                    <h2>Sábado e Domingo:</h2>
                    <h3>7:00 às 08:00</h3>
                    <h3>8:00 às 09:00</h3>
                    <h3>9:30 às 10:30</h3>
                </div>
                <img src={logo} />
                <div id={styles.prices}>

                    <h1><FaMoneyBillWave />  Planos</h1>

                    <h2>2X na semana: <b>R$ 350,00/mês</b></h2>
                    <h3> </h3>
                    <h2>3X na semana: <b>R$ 480,00/mês</b></h2>
                    <h3> </h3>
                    <h2>Aula Particular: <b>R$ 150,00</b> </h2>
                    <h3> </h3>
                    <h2>Pacote com 5 aulas: <b>R$400,00</b></h2>
                    <h3> </h3>
                    <h2>Aula Avulsa: <b>R$ 100,00</b></h2>

                </div>

            </div>
        </div>
    )
}

export default PartFive