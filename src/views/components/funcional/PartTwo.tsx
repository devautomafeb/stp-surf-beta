import styles from './PartTwo.module.css';

import func1 from '../../../assets/images/func1.jpg';
import beach1 from '../../../assets/images/beach1.jpg';
import muay1 from '../../../assets/images/muay1.jpg';
import yoga1 from '../../../assets/images/yoga1.jpg';
import { Link } from 'react-router-dom';


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
                <div id={styles.cards}>
                    <a href='https://www.instagram.com/stories/highlights/17880827579836310/'>
                        <img src={func1} />
                    </a>

                    <a href='https://www.instagram.com/stories/highlights/18211175716189253/'>
                        <img src={muay1} />
                    </a>
                    <a href='https://www.instagram.com/stories/highlights/17960724710300579/'>
                        <img src={yoga1} />
                    </a>
                    <a href='https://www.instagram.com/stories/highlights/17992910038883219/'>
                        <img src={beach1} />
                    </a>
                </div>
                <div id={styles.texts}>
                    <h2>FUNCIONAL</h2>
                    <p>
                        Nosso treinamento funcional <b>é dinâmico</b> e
                        mescla diferentes capacidades e trabalha todo o corpo
                        promovendo <b>flexibilidade</b>, <b>coordenação motora</b>, <b>equilíbrio</b>,
                        <b>condicionamento físico</b>, <b>tônus muscular</b> e ainda auxilia no
                        <b>emagrecimento</b> devido ao gasto energético.<h3>O treino é adaptado para <b>todas as idades</b>, níveis e condições físicas.
                            Utilizamos halter, kettlebell, corda e o peso do próprio corpo.</h3>
                    </p>
                    <h2>MUAY THAI</h2>
                    <p>Você quer se sentir mais confiante, saudável e com energia para enfrentar o dia 
                        a dia? Então venha experimentar as aulas de Muay Thai na praia da Barra da Tijuca!</p>
                    <p> Com o Muay Thai, você pode queimar até <b>1000 calorias</b> em uma única aula, além de
                     melhorar sua coordenação motora, equilíbrio e condicionamento cardiovascular.
                      Não importa se você é iniciante ou avançado, nossos treinadores especializados estão
                       prontos para ajuda-lo a alcançar seus onbjetivos.</p>
                    <p> E o melhor de tudo? Você vai estar se exercitando em um ambiente incrível, ao ar livre e com vista para o mar. Não perca mais tempo, venha se juntar a nossa comunidade e experimente a sensação única de treinar Muay Thai na praia!
                    </p>
                    <h2>YOGA</h2>
                    <p>
                        Se você está em busca de equilíbrio e paz interior, você está no lugar certo! Este é o lugar perfeito
                        para você eliminar o estresse do cotidiano e encontrar a serenidade e harmonia que tanto deseja.</p>
                    <p> Com a beleza da paisagem da praia da Barra da Tijuca como cenário, nossas aulas são a combinação
                        perfeita entre corpo e mente, trazendo bem-estar e saúde para o seu dia a dia.</p>
                    <p> Aqui você encontrará <b>profissionais qualificados</b> e atenciosos que vão ajudá-lo a alcançar seus
                        objetivos e se sentir renovado.
                        <b>Não perca mais tempo</b> e venha experimentar a nossa aula de yoga e comece a sentir a diferença na sua
                        vida!
                    </p>

                    <h2>BEACH TENNIS</h2>
                    <p>
                        O Beach Tennis é a atividade perfeita para quem busca um exercício <b>divertido e desafiador</b>.
                        E aqui na na Arena STP, oferecemos aulas experimentais para você conhecer melhor o esporte que
                        mais cresce no Brasil.    </p>
                    <p>Se você sente a necessidade de se movimentar, mas não aguenta mais a rotina da academia,
                        o Beach Tennis é a solução que você procurava. Além de <b>trabalhar o corpo todo</b>,
                        melhorar a coordenação e  tonificar os músculos,
                        você ainda pode desfrutar da brisa do mar e do visual incrível da praia da Barra da Tijuca.
                        <b>Venha se divertir e se exercitar ao mesmo tempo!</b></p>

                </div>
            </div>
        </div>

    )
}

export default PartTwo