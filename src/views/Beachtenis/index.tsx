
import { Cover } from "../../components/Cover";
import { Header } from '../../components/Header';
import { TextCard } from "../../components/TextCard";
import { MainVideo } from "../../components/MainVideo";

import { FontAsH3, FontBold, Container, Title } from "./styles";

import beach01 from '../../assets/images/beachTennisCover.jpg';
import beach02 from '../../assets/images/beach02.jpg';
import video01 from '../../assets/videos/VIDEO_BT.mp4';
import { Teacher } from "../../components/Teacher";

import professor01 from '../../assets/images/Romarinho.jpg';
import professor02 from '../../assets/images/beach11.jpg';

import { Prices } from "../../components/Prices";
import { MapView } from "../../components/MapView";
import { Footer } from "../../components/Footer";
import WhatsButton from "../../components/WhatsButton";

export function Beachtenis() {

    const textA = 
        <FontAsH3>BEACH TENNIS: O Beach Tennis é a atividade perfeita para
            quem busca <FontBold>um exercício divertido
                e desafiador.</FontBold>
             E aqui na na Arena STP, oferecemos aulas experimentais para você conhecer
            melhor o esporte que mais cresce no Brasil.</FontAsH3>

    const textB = <FontAsH3>Se você sente a necessidade de se movimentar, mas não aguenta
        mais a rotina da academia,
        o <FontBold> Beach Tennis é a solução que você procurava </FontBold>. Além de trabalhar
        o corpo todo, melhorar a coordenação e  tonificar os músculos,
        você ainda pode desfrutar da brisa do mar e do visual incrível da praia da Barra da
        Tijuca. <FontBold>Venha se divertir e se exercitar ao mesmo tempo!</FontBold>
    </FontAsH3>

    return (
        <div>
            <Header headerVariant='arena' />
            <Cover variant='beach' />
            <TextCard variantText={"toLeft"} textToWrite={textA} dirImg={beach01} />
            <TextCard variantText={"toRight"} textToWrite={textB} dirImg={beach02} />
            <MainVideo dirVideo={video01} kind={'arena'} />

            <Container>
                <Title>Nossos instrutores</Title>
                <Teacher name={"Romarinho"} nickName={''} dirImg={professor01} />
                <Teacher name={"Manoel"} nickName={''} dirImg={professor02} />
            </Container>

            <Container>
                <Prices variant={"beach"} />
            </Container>

            <Container>
                <MapView variantImage={"arena"} />
            </Container>
            <WhatsButton />
            <Footer FooterVariant={"arena"} />

        </div >
    )
}