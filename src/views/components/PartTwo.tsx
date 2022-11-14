import styles from './PartTwo.module.css';

import prancha from '../../assets/images/prancha.jpg';
import surfista01 from '../../assets/images/surfista01.jpg';

function PartTwo() {
    return (
        <div className={styles.firstContainer2}>
            <div className={styles.secondContainer2}>
                <div id={styles.titles}>
                    <h1>STP</h1>
                    <h2>Nossa Escola</h2>
                </div>
                <div id={styles.texto1p2}>
                    <img src={prancha} />
                    <h3>
                        <b>A STP surgiu com a pegada de fazer diferente. </b>
                        Reunimos os melhores professores da Barra da Tijuca, <b>com seus mais de 15 anos</b> de experiência
                        e melhoramos tudo o que foi possível quando se trata de aulas de surf.
                        Nasceu então uma escola de surf em que <b>o foco é o aluno.</b> Aqui, temos aulas de domingo a
                        domingo, e você escolhe o dia e horário que quer fazer sua aula, mesmo que isso mude o
                        tempo todo, basta se confirmar na aula até o dia anterior.
                        É isso mesmo, não temos turmas certas e definidas. <b>Você faz sua aula quando quiser!</b>
                    </h3>
                </div>
                <div id={styles.texto2p2}>
                    <h3>
                        <b>Adicionamos a isso uma cobertura profissional de fotos e vídeos</b> para você acompanhar sua evolução
                        e postar à vontade.
                        Ta esperando o que?! <b>Vem pra STP!</b>
                    </h3>
                    <img src={surfista01} />
                </div>

            </div>
        </div>
    
    )
}

export default PartTwo