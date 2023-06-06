
import { Cover } from "../../components/Cover";
import { Header } from '../../components/Header';
import { TextCard } from "../../components/TextCard";
import { MainVideo } from "../../components/MainVideo";

import { FontAsH3, FontBold, Container, Title } from "./styles";

import yoga01 from '../../assets/images/yoga01.jpg';
import yoga02 from '../../assets/images/yogaCover.jpg';
import video01 from '../../assets/videos/Aulao.mp4';
import { Teacher } from "../../components/Teacher";

import professor01 from '../../assets/images/RAFA.jpg';

import { Prices } from "../../components/Prices";
import { MapView } from "../../components/MapView";
import { Footer } from "../../components/Footer";

export function Yoga() {

    const textA =
        <FontAsH3>YOGA:Se você está em busca de equilíbrio e paz interior,
            você está no lugar certo! Este é o lugar perfeito
            para você eliminar o estresse do cotidiano e encontrar a <FontBold>serenidade e harmonia</FontBold>
            que tanto deseja.
        </FontAsH3>

    const textB = <FontAsH3>Com a beleza da paisagem da praia da Barra da Tijuca como cenário, nossas aulas são a combinação
        perfeita entre corpo e mente, trazendo bem-estar e saúde para o seu dia a dia.
        Aqui você encontrará profissionais <FontBold>qualificados e atenciosos</FontBold> que vão ajudá-lo a alcançar seus
        objetivos e se sentir renovado.
        <FontBold>Não perca mais tempo</FontBold> e venha experimentar a nossa aula de yoga e comece a sentir a diferença
        na sua
        vida!</FontAsH3>


    return (
        <div>
            <Header headerVariant='arena' />
            <Cover variant='yoga' />
            <TextCard variantText={"toLeft"} textToWrite={textA} dirImg={yoga01} />
            <TextCard variantText={"toRight"} textToWrite={textB} dirImg={yoga02} />
            <MainVideo dirVideo={video01} />

            <Container>
                <Title>Nossos instrutores</Title>
                <Teacher name={"Rafa"} nickName={'  '} dirImg={professor01} />

            </Container>

            <Container>
                <Prices variant={"yoga"}/>
            </Container>

            <Container>
                <MapView variantImage={"arena"}/>
            </Container>
            <Footer FooterVariant={"arena"} />

        </div >
    )
}