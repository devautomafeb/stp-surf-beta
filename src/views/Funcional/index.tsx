
import { Cover } from "../../components/Cover";
import { Header } from '../../components/Header';
import { TextCard } from "../../components/TextCard";
import { MainVideo } from "../../components/MainVideo";

import { FontAsH3, FontBold, Container, Title } from "./styles";

import func01 from '../../assets/images/func01.jpg';
import func02 from '../../assets/images/func02.jpg';
import video01 from '../../assets/videos/Aulao.mp4';
import { Teacher } from "../../components/Teacher";

import professor01 from '../../assets/images/professor01.jpg';
import professor02 from '../../assets/images/professor02.jpg';
import professor033 from '../../assets/images/professor033.jpg';
import professor04 from '../../assets/images/professor04.jpg';

import { Prices } from "../../components/Prices";
import { MapView } from "../../components/MapView";
import { Footer } from "../../components/Footer";

export function Funcional() {

    const textA = <FontAsH3>
        <FontAsH3>FUNCIONAL: Nosso treinamento funcional <FontBold>é dinâmico</FontBold> e
            mescla diferentes capacidades e trabalha todo o corpo
            promovendo <FontBold>flexibilidade</FontBold>, <FontBold>coordenação motora</FontBold>, <FontBold>equilíbrio</FontBold>,
            <FontBold> condicionamento físico</FontBold>, <FontBold>tônus muscular</FontBold> e ainda auxilia no
            <FontBold>emagrecimento</FontBold> devido ao gasto energético.</FontAsH3>

    </FontAsH3>

    const textB = <FontAsH3><FontAsH3>O treino é adaptado para <FontBold>todas as idades</FontBold>,
        níveis e condições físicas.
        Utilizamos halter, kettlebell, corda e o peso do próprio corpo.
    </FontAsH3></FontAsH3>

    return (
        <div>
            <Header headerVariant='arena' />
            <Cover variant='funcional' />
            <TextCard variantText={"toLeft"} textToWrite={textA} dirImg={func01} />
            <TextCard variantText={"toRight"} textToWrite={textB} dirImg={func02} />
            <MainVideo dirVideo={video01} />

            <Container>
                <Title>Nossos instrutores</Title>
                <Teacher name={"Rafael Maia"} nickName={', o João '} dirImg={professor01} />
                <Teacher name={"Gabriel Vasconcellos"} nickName={', o João '} dirImg={professor02} />
                <Teacher name={"Lucas Guigues"} nickName={', o João '} dirImg={professor033} />
                <Teacher name={"João Felipe Amaral"} nickName={', o João '} dirImg={professor04} />
            </Container>

            <Container>
                <Prices variant={"funcional"} />
            </Container>

            <Container>
                <MapView variantImage={"arena"} />
            </Container>
            <Footer FooterVariant={"arena"} />

        </div >
    )
}