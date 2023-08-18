
import { Cover } from "../../components/Cover";
import { Header } from '../../components/Header';
import { TextCard } from "../../components/TextCard";
import { MainVideo } from "../../components/MainVideo";

import { FontAsH3, FontBold, Container, Title } from "./styles";

import voley01 from '../../assets/images/capa01.jpg';
import voley02 from '../../assets/images/aula.jpg';
import video01 from '../../assets/videos/SITE_VOLEI.mp4';
import { Teacher } from "../../components/Teacher";

import professor01 from '../../assets/images/THIAGO BARBOSA.jpg';

import { Prices } from "../../components/Prices";
import { MapView } from "../../components/MapView";
import { Footer } from "../../components/Footer";
import WhatsButton from "../../components/WhatsButton";

export function Voley() {

    const textA =
        <FontAsH3>Volei: Quer aprender ou se aperfeiçoar no vôlei de praia?
            Venha aprender com nosso <FontBold>professor campeão brasileiro e sulamericano!</FontBold>
        </FontAsH3>

    const textB = <FontAsH3> Não importa se você é iniciante ou avançado, nossos treinos vão ajudá-lo a alcançar seus objetivos.
        Marque sua aula experimental e venha conhecer o melhor quintal da praia da Barra!</FontAsH3>


    return (
        <div>
            <Header headerVariant='arena' />
            <Cover variant='voley' />
            <TextCard variantText={"toLeft"} textToWrite={textA} dirImg={voley01} />
            <TextCard variantText={"toRight"} textToWrite={textB} dirImg={voley02} />
            <MainVideo dirVideo={video01} kind={'arena'} />

            <Container>
                <Title>Nossa instrutora</Title>
                <Teacher name={"Thiago Barbosa"} dirImg={professor01} />

            </Container>

            <Container>
                <Prices variant={"voley"} />
            </Container>

            <Container>
                <MapView variantImage={"arena"} />
            </Container>
            <WhatsButton />
            <Footer FooterVariant={"arena"} />

        </div >
    )
}