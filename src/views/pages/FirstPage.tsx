import styles from './FirstPage.module.css'

import Header from '../components/Header';
import Footer from '../components/Footer';

import professor01 from '../../assets/images/professor01.jpg';
import professor02 from '../../assets/images/professor02.jpg';
import professor03 from '../../assets/images/professor03.jpg';
import professor04 from '../../assets/images/professor04.jpg';
import local from '../../assets/images/local.png';
import logo from "../../assets/images/Logo.png";

import { FaInstagram, FaFacebookF, FaWhatsapp, FaMapMarkerAlt } from "react-icons/fa";


import PartSeven from '../components/PartSeven';
import PartOne from '../components/PartOne';
import PartTwo from '../components/PartTwo';


function FirstPage() {
    return (
        <div>
            <Header />
            <PartOne />
            <PartTwo />


            

            <div className={styles.firstContainer4}>
                <div className={styles.secondContainer4}>

                    <h1>Nossos Professores!</h1>

                    <div className={styles.professorBlock}>
                        <img src={professor01} />
                        <h2><FaInstagram />   Rafael</h2>
                    </div>
                    <div className={styles.professorBlock}>
                        <img src={professor02} />
                        <h2><FaInstagram />   Gabriel</h2>

                    </div>
                    <div className={styles.professorBlock}>
                        <img src={professor03} />
                        <h2><FaInstagram />   Lucas "Curió"</h2>

                    </div>
                    <div className={styles.professorBlock}>
                        <img src={professor04} />
                        <h2><FaInstagram />   João Felipe</h2>

                    </div>

                </div>
            </div>


            <div className={styles.firstContainer5}>
                <div className={styles.secondContainer5}>

                    <div id={styles.scheduleAvailabe}>
                        <h1>Horários</h1>

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

                        <h1>Planos</h1>

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
            <div className={styles.firstContainer6}>
                <div className={styles.secondContainer6}>
                    <div className={styles.informations}>
                        <img src={local} />

                        <h2><a href={"https://www.google.com/maps/place/STP+SURF+SCHOOL/@-23.0123575,-43.3216017,15z/data=!4m12!1m6!3m5!1s0x0:0x6c0df6fb06314508!2sSTP+SURF+SCHOOL!8m2!3d-23.0123575!4d-43.3216017!3m4!1s0x0:0x6c0df6fb06314508!8m2!3d-23.0123575!4d-43.3216017"}><FaMapMarkerAlt />  Entre o posto 3 e o posto 4, bem em frente ao hotel Windsor.</a>
                        </h2>
                    </div>
                    <PartSeven />
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default FirstPage