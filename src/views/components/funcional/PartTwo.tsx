import styles from './PartTwo.module.css';

import func3 from '../../../assets/images/func3.png';
import beach3 from '../../../assets/images/beach3.png';
import muay3 from '../../../assets/images/muay3.png';
import yoga3 from '../../../assets/images/yoga3.png';


function PartTwo() {
    return (
        <div className={styles.firstContainer2}>
            <div className={styles.secondContainer2}>
                <div id={styles.titles}>
                    <h1>ARENA</h1>
                    <h2>Já pensou em fazer vários esportes diferentes<b> ao ar livre</b> no coração
                        da praia da Barra da Tijuca?! <b>Agora você pode!</b>
                    </h2>
                    <h2>
                        Na Arena STP você encontra <b>Treinamento Funcional, Yoga, Muay Thai, Beach Tennis</b> e muito mais.
                        Marque sua <b>aula experimental</b> e venha fazer parte da Família!
                    </h2>
                </div>
                <div id={styles.texto1p2}>

                    <a href='https://www.instagram.com/stories/highlights/17880827579836310/'>
                        <img src={func3} />
                    </a>

                    <h3>
                        <h2>FUNCIONAL:</h2> <h3>Nosso treinamento funcional <b>é dinâmico</b> e
                        mescla diferentes capacidades e trabalha todo o corpo
                        promovendo <b>flexibilidade</b>, <b>coordenação motora</b>, <b>equilíbrio</b>,
                        <b> condicionamento físico</b>, <b>tônus muscular</b> e ainda auxilia no
                        <b>emagrecimento</b> devido ao gasto energético.
                        O treino é adaptado para <b>todas as idades</b>, níveis e condições físicas.
                        Utilizamos halter, kettlebell, corda e o peso do próprio corpo.
                        </h3>
                    </h3>
                </div>

                <div id={styles.texto2p2}>
                    <h3>
                        <h2>MUAY THAI:</h2> <h3>Você quer se sentir mais confiante, saudável e com energia para enfrentar o dia
                            a dia? Então venha experimentar as aulas de Muay Thai na praia da Barra da Tijuca!
                            Com o Muay Thai, você pode queimar até <b>1000 calorias</b> em uma única aula, além de
                            melhorar sua coordenação motora, equilíbrio e condicionamento cardiovascular.
                            Não importa se você é iniciante ou avançado, nossos treinadores especializados estão
                            prontos para ajuda-lo a alcançar seus onbjetivos.
                            E o melhor de tudo? Você vai estar se exercitando em um <b>ambiente incrível</b>, ao ar livre e com vista para o mar.
                            <b> Não perca mais tempo</b>, venha se juntar a nossa comunidade e experimente a sensação única de treinar Muay Thai na praia!
                        </h3>
                    </h3>
                    <a href='https://www.instagram.com/stories/highlights/18211175716189253/'>
                        <img src={muay3} />
                    </a>
                </div>

                <div id={styles.texto1p2}>
                    <a href='https://www.instagram.com/stories/highlights/17960724710300579/'>
                        <img src={yoga3} />
                    </a>
                    <h3>
                        <h2>YOGA:</h2> <h3>Se você está em busca de equilíbrio e paz interior, você está no lugar certo! Este é o lugar perfeito
                        para você eliminar o estresse do cotidiano e encontrar a serenidade e harmonia que tanto deseja.
                        Com a beleza da paisagem da praia da Barra da Tijuca como cenário, nossas aulas são a combinação
                        perfeita entre corpo e mente, trazendo bem-estar e saúde para o seu dia a dia.
                        Aqui você encontraráprofissionais qualificados e atenciosos que vão ajudá-lo a alcançar seus
                        objetivos e se sentir renovado.
                        Não perca mais tempo e venha experimentar a nossa aula de yoga e comece a sentir a diferença
                        na sua
                        vida!
                        </h3>
                    </h3>
                </div>
                <div id={styles.texto2p2}>

                    <h3>
                        <h2>BEACH TENNIS:</h2><h3>O Beach Tennis é a atividade perfeita para quem busca <b>um exercício divertido
                             e desafiador.</b>
                        E aqui na na Arena STP, oferecemos aulas experimentais para você conhecer melhor o esporte que
                        mais cresce no Brasil.
                        Se você sente a necessidade de se movimentar, mas não aguenta mais a rotina da academia,
                        o <b>Beach Tennis é a solução que você procurava</b>. Além de trabalhar o corpo todo,
                        melhorar a coordenação e  tonificar os músculos,
                        você ainda pode desfrutar da brisa do mar e do visual incrível da praia da Barra da Tijuca.
                        <b>Venha se divertir e se exercitar ao mesmo tempo!</b>
                        </h3>
                    </h3>
                    <a href='https://www.instagram.com/stories/highlights/17992910038883219/'>
                        <img src={beach3} />
                    </a>
                </div>
            </div>
        </div>

    )
}

export default PartTwo


