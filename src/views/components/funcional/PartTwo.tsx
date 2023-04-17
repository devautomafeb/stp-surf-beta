import styles from './PartTwo.module.css';

import func1 from '../../../assets/images/func1.jpg';
import beach1 from '../../../assets/images/beach1.jpg';
import muay1 from '../../../assets/images/muay1.jpg';
import yoga1 from '../../../assets/images/yoga1.jpg';


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
                        Na Arena STP você encontra <b>Treinamento Funcional,
                            Yoga, Muay Thai, Beach Tennis</b> e muito mais.
                        Marque sua <b>aula experimental</b> e venha fazer parte da Família!
                    </h2>
                </div>
                <div id={styles.texto1p2}>

                    <div className={styles.flipCard}>
                        <h2>FUNCIONAL</h2>
                        <div className={styles.flipCardInner}>
                            <div className={styles.flipCardFront}>
                                <img src={func1} />
                            </div>
                            <div className={styles.flipCardBack}>
                                <h3>
                                    Nosso treinamento funcional é dinâmico e mescla diferentes capacidades e trabalha todo
                                    o corpo promovendo flexibilidade, coordenação motora, equilíbrio, condicionamento físico,
                                    tônus muscular e ainda auxilia no emagrecimento devido ao gasto energético.</h3>
                                <h3>O treino é adaptado para todas as idades, níveis e condições físicas. Utilizamos halter,
                                    kettlebell, corda e o peso do próprio corpo.</h3>

                            </div>
                        </div>
                    </div>
                    <div className={styles.flipCard}>
                        <h2>MUAY THAI</h2>
                        <div className={styles.flipCardInner}>
                            <div className={styles.flipCardFront}>
                                <img src={muay1} />
                            </div>
                            <div className={styles.flipCardBack}>
                                <h3>
                                    Você quer se sentir mais confiante, saudável e com
                                    energia para enfrentar o dia a dia? Então venha experimentar
                                    as aulas de Muay Thai na praia da Barra da Tijuca!</h3>
                                <h3>Com o Muay Thai, você pode queimar até 1000 calorias em uma única aula,
                                    além de melhorar sua coordenação motora, equilíbrio e condicionamento
                                    cardiovascular. Não importa se você é iniciante ou avançado, nossos
                                    treinadores especializados estão prontos para ajuda-lo a alcançar
                                    seus onbjetivos.</h3>
                                <h3>E o melhor de tudo? Você vai estar se exercitando em um ambiente
                                    incrível, ao ar livre e com vista para o mar. Não perca mais tempo,
                                    venha se juntar a nossa comunidade e experimente a sensação única
                                    de treinar Muay Thai na praia!

                                </h3>
                            </div>
                        </div>
                    </div>
                    <div className={styles.flipCard}>
                        <h2>YOGA</h2>
                        <div className={styles.flipCardInner}>
                            <div className={styles.flipCardFront}>
                                <img src={yoga1} />
                            </div>
                            <div className={styles.flipCardBack}>
                                <h3>
                                    Se você está em busca de equilíbrio e paz interior, você está n
                                    o lugar certo! Este é o lugar perfeito para você eliminar o estresse
                                    do cotidiano e encontrar a serenidade e harmonia que tanto deseja.</h3>
                                <h3>Com a beleza da paisagem da praia da Barra da Tijuca como cenário,
                                    nossas aulas são a combinação perfeita entre corpo e mente,
                                    trazendo bem-estar e saúde para o seu dia a dia.
                                    Aqui você encontrará profissionais qualificados e atenciosos que
                                    vão ajudá-lo a alcançar seus objetivos e se sentir renovado.</h3>

                                <h3>Não perca mais tempo e venha experimentar a nossa aula de yoga e comece a sentir a diferença na sua vida!
                                </h3>
                            </div>
                        </div>
                    </div>
                    <div className={styles.flipCard}>
                        <h2>BEACH TENNIS</h2>
                        <div className={styles.flipCardInner}>
                            <div className={styles.flipCardFront}>
                                <img src={beach1} />
                            </div>
                            <div className={styles.flipCardBack}>
                                <h3>O Beach Tennis é a atividade perfeita para quem busca um
                                    exercício divertido e desafiador. E aqui na na Arena STP,
                                    oferecemos aulas experimentais para você conhecer melhor o esporte que
                                    mais cresce no Brasil.</h3>
                                <h3>Se você sente a necessidade de se movimentar, mas não aguenta mais a rotina da academia, o Beach Tennis é a solução que você procurava. Além de trabalhar o corpo todo, melhorar a coordenação e  tonificar os músculos, você ainda pode desfrutar da brisa do mar e do visual incrível da praia da Barra da Tijuca.
                                    Venha se divertir e se exercitar ao mesmo tempo!

                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default PartTwo