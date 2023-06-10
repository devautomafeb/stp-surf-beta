
import { Cover } from "../../components/Cover";
import { Header } from '../../components/Header';
import { TextCard } from "../../components/TextCard";
import { MainVideo } from "../../components/MainVideo";

import { FontAsH3, FontBold, Container, Title, Container2 } from "./styles";

import muay02 from '../../assets/images/muayThaiCover.jpg';
import muay01 from '../../assets/images/senhora.jpg';
import video01 from '../../assets/videos/Aulao.mp4';
import { Teacher } from "../../components/Teacher";

import professor01 from '../../assets/images/muayProf.png';

import { Prices } from "../../components/Prices";
import { MapView } from "../../components/MapView";
import { Footer } from "../../components/Footer";

export function Muaythai() {

    const textA = 
        <FontAsH3>MUAY THAI: Você quer se sentir mais confiante, saudável e com energia para enfrentar o dia
            a dia? Então venha experimentar as aulas de Muay Thai na praia da Barra da Tijuca!
            Com o Muay Thai, você pode queimar até <FontBold>1000 calorias</FontBold> em uma única aula, além de
            melhorar sua coordenação motora, equilíbrio e condicionamento cardiovascular.
            Não importa se você é iniciante ou avançado, nossos treinadores especializados estão
            prontos para ajuda-lo a alcançar seus onbjetivos.</FontAsH3>

    const textB = <FontAsH3>E o melhor de tudo? Você vai estar se exercitando em um <FontBold>ambiente incrível</FontBold>, ao ar livre e com vista para o mar.
        <FontBold> Não perca mais tempo</FontBold>, venha se juntar a nossa comunidade e experimente a sensação única de treinar Muay Thai na praia!
    </FontAsH3>

    return (
        <div>
            <Header headerVariant='arena' />
            <Cover variant='muayThai' />
            <TextCard variantText={"toLeft"} textToWrite={textA} dirImg={muay01} />
            <TextCard variantText={"toRight"} textToWrite={textB} dirImg={muay02} />
            <MainVideo dirVideo={video01} />

            <Container2>
                <Title>Nosso instrutor</Title>
                <Teacher name={"Rafael Gonçalves, "} nickName={" o Tchetcha"} dirImg={professor01} />

            </Container2>

            <Container>
                <Prices variant={"muayThai"} />
            </Container>

            <Container>
                <MapView variantImage={"arena"} />
            </Container>
            <Footer FooterVariant={"arena"} />

        </div >
    )
}
