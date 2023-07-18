
import { Cover } from "../../components/Cover";
import { Header } from '../../components/Header';
import { TextCard } from "../../components/TextCard";
import { MainVideo } from "../../components/MainVideo";

import { FontAsH3, FontBold, Container, Title, Container2 } from "./styles";

import func01 from '../../assets/images/func01.jpg';
import func02 from '../../assets/images/func5.jpg';
import video01 from '../../assets/videos/VIDEO_FUNCIONAL.mp4';
import { Teacher } from "../../components/Teacher";


import professor02 from '../../assets/images/prof02.jpg';
import professor033 from '../../assets/images/TUI_SITE.jpg';

import { Prices } from "../../components/Prices";
import { MapView } from "../../components/MapView";
import { Footer } from "../../components/Footer";
import WhatsButton from "../../components/WhatsButton";

export function Funcional() {

    const textA = 
        <FontAsH3>FUNCIONAL: Nosso treinamento funcional <FontBold>é dinâmico</FontBold> e
            mescla diferentes capacidades e trabalha todo o corpo
            promovendo <FontBold>flexibilidade</FontBold>, <FontBold>coordenação motora</FontBold>, <FontBold>equilíbrio</FontBold>,
            <FontBold> condicionamento físico</FontBold>, <FontBold>tônus muscular</FontBold> e ainda auxilia no
            <FontBold> emagrecimento</FontBold> devido ao gasto energético.</FontAsH3>

    const textB =<FontAsH3>O treino é adaptado para <FontBold>todas as idades</FontBold>,
        níveis e condições físicas.
        Utilizamos halter, kettlebell, corda e o peso do próprio corpo.
    </FontAsH3>

    return (
        <div>
            <Header headerVariant='arena' />
            <Cover variant='funcional' />
            <TextCard variantText={"toLeft"} textToWrite={textA} dirImg={func01} />
            <TextCard variantText={"toRight"} textToWrite={textB} dirImg={func02} />
            <MainVideo dirVideo={video01} kind={'arena'} />

            <Container2>
                <Title>Nossos instrutores</Title>
                <Teacher name={"Meicke Reichert,"} nickName={' o Mykinho'} dirImg={professor02} />
                <Teacher name={"Arthur Lemes,"} nickName={'o Tui'} dirImg={professor033} />
            </Container2>

            <Container>
                <Prices variant={"funcional"} />
            </Container>

            <Container>
                <MapView variantImage={"arena"} />
            </Container>
            <WhatsButton />
            <Footer FooterVariant={"arena"} />

        </div >
    )
}